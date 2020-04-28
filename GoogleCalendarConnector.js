var auth = require("./auth.js");
const { google } = require('googleapis');
const gKey = auth.google

// Set the calendar to query
const calendar = google.calendar({ version: 'v3', gKey });
var output;





function requestEvents(parameters) {
  output = {};
    calendar.events.list(parameters, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        const events = res.data.items;
        if (events.length) {
          console.log('Upcoming 10 events:');
          output = Object.assign({}, events)
        } else {
          console.log('No upcoming events found.');
        }
      });
}


// Make the query
function listAllEvents() {

    parameters = {
        calendarId: 'helpmehelpmetutor@gmail.com',
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
    }
requestEvents(parameters);

   
   setTimeout(()=>{
    let events = JSON.parse(JSON.stringify(output));
    //console.log(JSON.stringify(events))

    var i;
    for (i in events){
      let title = events[i]["summary"];
      let description = events[i]["description"]
      let start = events[i]["start"]["dateTime"] || events[i]["start"]["date"];
      let html = events[i]["htmlLink"]
      let loc = events[i]["location"]
      console.log('\n\nMeeting: ' + title + '\nDesc: ' + description + '\nStarts: ' + start + '\nLink: ' + html + '\nWhere: ' + loc);
    }
  },1000)
    
}

listAllEvents();