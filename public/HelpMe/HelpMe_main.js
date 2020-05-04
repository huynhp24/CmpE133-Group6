document.getElementById('questionInputForm').addEventListener('submit', saveQuestion);

function saveQuestion(e) {
  var questionTitle = document.getElementById('questionTitleInput').value;
  var questionDesc = document.getElementById('questionDescInput').value;
  var questionKey = document.getElementById('questionKeyInput').value;
  var questionId = chance.guid();
  var questionStatus = 'Open';

  var question = {
    id: questionId,
    title: questionTitle,
    description: questionDesc,
    keywords: questionKey,
    status: questionStatus
  }

  if (localStorage.getItem('questions') == null) {
    var questions = [];
    questions.push(question);
    localStorage.setItem('questions', JSON.stringify(questions));
  } else {
    var questions = JSON.parse(localStorage.getItem('questions'));
    questions.push(question);
    localStorage.setItem('questions', JSON.stringify(questions));
  }

  document.getElementById('questionInputForm').reset();
  fetchQuestions();
  e.preventDefault();
}

function setStatusClosed(id) {
  var questions = JSON.parse(localStorage.getItem('questions'));

  for (var i = 0; i < questions.length; i++) {
    if (questions[i].id == id) {
      questions[i].status = 'Closed';
    }
  }

  localStorage.setItem('questions', JSON.stringify(questions));

  fetchQuestions();
}

function deleteQuestion(id) {
  var questions = JSON.parse(localStorage.getItem('questions'));

  for (var i = 0; i < questions.length; i++) {
    if (questions[i].id == id) {
      questions.splice(i, 1);
    }
  }

  localStorage.setItem('questions', JSON.stringify(questions));

  fetchQuestions();
}

function fetchQuestions() {
  var questions = JSON.parse(localStorage.getItem('questions'));
  var questionsList = document.getElementById('questionsList');

  questionsList.innerHTML = '';

  if(!questions || !questions.length){return null}
  else{
  for (var i = 0; i < questions.length; i++) {
    var id = questions[i].id;
    var desc = questions[i].description;
    var title = questions[i].title;
    var keywords = questions[i].keywords;
    var status = questions[i].status;

    questionsList.innerHTML +='<div class="well">'+
                              '<p><span class="label label-info"> ' + status + '</span></p><hr class="my-4">'+
                              '<h4><strong> Title: </strong>' + title + '</h4> '+
                              '<h4><strong> Description: </strong>' + desc + '</h4>'+
                              '<h4><strong> Keywords: </strong>' + keywords + '</h4><hr class="my-4">'+
                              '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a> '+
                              '<a href="#" onclick="deleteQuestion(\''+id+'\')" class="btn btn-danger">Delete</a>'+
                              '<a href="ChooseTutor_index.html"> <button> Find Tutor </button></a> '+
                              '</div>';
  }
}
}