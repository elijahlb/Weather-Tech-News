$(document).ready(function() {


// ----------Sets search value to local storage --------
$('.search-city').on('click', function(e){  
  e.preventDefault();

  // get the value from local storage
  var localValue = localStorage.getItem('value1');

  // if we had a value, parse it back to an array, if we dont, create an empty array
  var textArr = localValue ? JSON.parse(localValue) : [];

  // get the text from the search input, dont use "form-control"
  // you're likely to have several of those on the page
  // give the element a custom class like "search-input" and use that (id would be even better)
  var text = $('.form-control').val();

  text = text.trim();
  if (text) {
      textArr.push(text);
  }
  var maxAllowed = 10;
  while (textArr.length > maxAllowed) {
       textArr.shift();
  }
  localValue = JSON.stringify(textArr);
  localStorage.setItem("value1", localValue);  
});



$('.search-city').on('click', function(e){  
  e.preventDefault();
 
var search = JSON.parse(localStorage.getItem("value1"));

var APIKey = "166a433c57516f51dfab1f7edaed8413";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&appid=" + APIKey


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    // Create CODE HERE to Log the queryURL
    console.log(response)
 
    var currentCity1 = $("<h2>").text(response.name)
    var currentCity2 = $("<p>").text(response.main.temp)
    var currentCity3 = $("<p>").text(response.main.humidity)
    $(".dc-display1").append(currentCity1)
    $(".dc-display1").append(currentCity2)
    $(".dc-display1").append(currentCity3)
  
    
    // var artistName = $("<h1>").text(response.name);
    // var artistURL = $("<a>").attr("href", response.url).append(artistName);
    // var artistImage = $("<img>").attr("src", response.thumb_url);
    // var trackerCount = $("<h2>").text(response.tracker_count + " fans tracking this artist");
    // var upcomingEvents = $("<h2>").text(response.upcoming_event_count + " upcoming events");
    // var goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");

    // Empty the contents of the artist-div, append the new artist content
    // $("#artist-div").empty();
    // $("#artist-div").append(artistURL, artistImage, trackerCount, upcomingEvents, goToArtist);
  });
  });

});