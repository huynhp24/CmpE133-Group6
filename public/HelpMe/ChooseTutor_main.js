// document.getElementById('questionInputForm').addEventListener('submit', saveQuestion);

// function saveQuestion(e) {
//   var questionTitle = document.getElementById('questionTitleInput').value;
//   var questionDesc = document.getElementById('questionDescInput').value;
//   var questionKey = document.getElementById('questionKeyInput').value;
//   var questionId = chance.guid();
//   var questionStatus = 'Open';

//need to connect to mysql

  var tutor = {
    id: tutorId,
    name: tutorName,
    title: tutorTitle,
    description: tutorDesc,
    Specialization: tutorSpecialization
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


function scheduling(userId) {
  var tutor = JSON.parse(localStorage.getItem('tutors'));

  for (var i = 0; i < questions.length; i++) {
    if (tutors[i].id == id) {
      tutors[i].Specialization = user[];
    }
  }

  localStorage.setItem('questions', JSON.stringify(questions));

  fetchQuestions();
}

function fetchTutors() {
  var tutors = JSON.parse(localStorage.getItem('tutors'));
  var tutorssList = document.getElementById('tutorsList');

  tutorssList.innerHTML = '';

  if(!tutors || !tutorss.length){return null}
  else{
  for (var i = 0; i < tutors.length; i++) {
    var userId = tutors[i].userId;
    var name = tutors[i].name;
    var Specialization = tutors[i].Specialization;
    var rating = tutors[i].rating;

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