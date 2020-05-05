var url;
var theVal;
console.log("isthisrunning");
getBackValue();

function getBackValue(){

  url = window.location.href.split("/test")[0];  
  url = url.charAt(url.length-1) == "/" ? url.slice(0,-1) : url
  var settings_get = {
    "async": true,
    "crossDomain": true,
    "url": url + "/getBackValue",
    "method": "GET",
    "headers": {
    "content-type": "application/json",
    },
  }

  $.ajax(settings_get).done(function (response) {
    theVal = response.backValue;
    updateVal();
  });
}

function updateVal(){
    document.getElementById('valueSpot').innerHTML = '<b>' + theVal + '</b>';
  }