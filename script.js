$(document).ready(function() {


// ----------SETS SEARCH VALUE TO LOCAL STORAGE ARRAY --------
$('.search-city').on('click', function(e){  
  e.preventDefault();
  var localValue = localStorage.getItem('value1');
  var textArr = localValue ? JSON.parse(localValue) : [];   
  var text = $('#city-search').val();
  text = text.trim();
  if (text) {
      textArr.push(text);
  }
  var maxAllowed = 10;
  while (textArr.length > maxAllowed) {    // CREATES MAX NUMBER OF ARRAY VALUES
       textArr.shift();
  }
  localValue = JSON.stringify(textArr);
  localStorage.setItem("value1", localValue);  
});
// -----------------------------------------------------



// ---------ONLOAD PAST SEARCH VALUE
$("#current-city").append(localStorage.getItem([0]) + ": " + (moment().format('L')));
$("#city-temp").append("Temperature: " + localStorage.getItem("value1"[0]) + " F°")
$("#city-humidity").append("Humidity: " + localStorage.getItem("value1"[0]) + " %")
$("#city-wind").append("Wind-Speed: " + localStorage.getItem("value1"[0]) + " MPH")
$("#weather-icon").append(localStorage.getItem("value1"[0]));
//-----------------------------------------------------




// ---------SETTING PAST SEARCH BUTTON VALUES


var valueKeys = JSON.parse(localStorage.getItem("value1"));

for (var i=0;i<valueKeys.length;i++) {
  console.log(valueKeys[i])
}


// $("#past-city9").append(JSON.parse((Object.entries(localStorage)[0][1]))[9])
// $("#past-city8").append(JSON.parse((Object.entries(localStorage)[0][1]))[8]);
// $("#past-city7").append(JSON.parse((Object.entries(localStorage)[0][1]))[7]);
// $("#past-city6").append(JSON.parse((Object.entries(localStorage)[0][1]))[6]);
// $("#past-city5").append(JSON.parse((Object.entries(localStorage)[0][1]))[5]);
// $("#past-city4").append(JSON.parse((Object.entries(localStorage)[0][1]))[4]);
// $("#past-city3").append(JSON.parse((Object.entries(localStorage)[0][1]))[3]);
// $("#past-city2").append(JSON.parse((Object.entries(localStorage)[0][1]))[2]);
// $("#past-city1").append(JSON.parse((Object.entries(localStorage)[0][1]))[1]);
// $("#past-city0").append(JSON.parse((Object.entries(localStorage)[0][1]))[0]);
// // -------------------------------------------
// console.log(JSON.parse((Object.entries(localStorage)[0][1]))[0]);



// --------ONCLICK AJAX CALLS ----------
$('.search-city').on('click', function(e){  
  e.preventDefault();
var search = $("#city-search").val();
var APIKey = "166a433c57516f51dfab1f7edaed8413";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&appid=" + APIKey


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response)
    var imgURL = response.weather[0].icon
    var weatherIcon = $("<img>").attr("src", "http://openweathermap.org/img/w/" + imgURL + ".png")
    // ---------------DISPLAYING MOST RECENT SEARCH ITEM -----
    
    $("#current-city").empty();
    $("#current-city").append(response.name + ": " + (moment().format('L')));
    $("#city-temp").empty();
    $("#city-temp").append("Temperature: " + response.main.temp + " F°")
    $("#city-humidity").empty();
    $("#city-humidity").append("Humidity: " + response.main.humidity + " %")
    $("#city-wind").empty();
    $("#city-wind").append("Wind-Speed: " + response.wind.speed + " MPH")
    $("#weather-icon").empty();
    $("#weather-icon").append(weatherIcon);

    // ----SETUP FOR UV AJAX CALL --------
    var latitude = response.coord.lat
    var longitude = response.coord.lon
    var queryURL2 = "http://api.openweathermap.org/data/2.5/uvi?appid="+ APIKey + "&lat="+ latitude + "&lon=" + longitude // cnt = number of days returned

    $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function(response2) {
      $("#city-uv").empty();
      $("#city-uv").append("UV Index: " + response2.value)
      


      // -------COLOR FOR UV INDEX
    var classesToClear = ["low-level", "moderate-level", "high-level",  "very-high-level", "extreme"]
    for (var i=0; i<classesToClear.length; i++) {
      $("#city-uv").removeClass(classesToClear[i])
  }
      if (response2.value <= 2) {
        $("#city-uv").addClass("low-level");
      } else if ( 5>= response2.value >= 3) {
        $("#city-uv").addClass("moderate-level")
      } else if ( 7>= response2.value >= 6) {
        $("#city-uv").addClass("high-level")
      } else if ( 10>= response2.value >= 8) {
        $("#city-uv").addClass("very-high-level")
      } else if ( response2.value >= 11) {
        $("#city-uv").addClass("extreme")
      }

      //---------SETUP FOR 5 DAY FORECAST-----
      var countryCode = response.id
      var city = response.name
      var queryURL3 = "api.openweathermap.org/data/2.5/forecast/daily?q="+ city +","+ countryCode +"&cnt=" + 5;
      console.log(queryURL3)
      $.ajax({
        url: queryURL3,
        method: "GET"
      }).then(function(response3) {
        console.log(response3)


      });
  
  
    });
});


});

});