$(document).ready(function() {

  var valueKeys = JSON.parse(localStorage.getItem("value1"));
  var lastValue = valueKeys[valueKeys.length - 1]
  var APIKey = "ebdc73f0f98e2655e84d811acead2d14";
  var queryURL5 = "https://api.openweathermap.org/data/2.5/weather?q=" + lastValue + "&appid=" + APIKey
  

  // -----------------------DISPLAY ONLOAD ---------
  $.ajax({
      url: queryURL5,
      method: "GET"
    }).then(function(response5) {
      console.log(response5)
      var imgURL5 = response5.weather[0].icon
      var weatherIcon5 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + imgURL5 + ".png")
  
              $("#current-city").empty();
              $("#current-city").append(response5.name + ": " + (moment().format('L')));
              $("#city-temp").empty();
              $("#city-temp").append("Temperature: " + response5.main.temp + " F°")
              $("#city-humidity").empty();
              $("#city-humidity").append("Humidity: " + response5.main.humidity + " %")
              $("#city-wind").empty();
              $("#city-wind").append("Wind-Speed: " + response5.wind.speed + " MPH")
              $("#weather-icon").empty();
              $("#weather-icon").append(weatherIcon5);

    var cityName = lastValue;
      var APIKey = "ebdc73f0f98e2655e84d811acead2d14";
      var queryURL6 = "http://api.openweathermap.org/data/2.5/forecast?appid=" + APIKey + "&q=" + cityName;

    $.ajax({
      url: queryURL6,
      method: "GET"
    }).then(function(response6) {
console.log(response6)
    
    var imgURL2 = response6.list[5].weather[0].icon
        var weatherIcon2 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + imgURL2 + ".png")
        var wholeTime = response6.list[1].dt_txt;
        for (var i=0; i<wholeTime.length; i++) {
          var futureTime1 = wholeTime.slice(0, 10);
        }
                $("#current-city1").empty();
                $("#current-city1").append(response6.city.name + ": " + futureTime1);
                $("#city-temp1").empty();
                $("#city-temp1").append("Temperature: " + response6.list[5].main.temp + " F°")
                $("#city-humidity1").empty();
                $("#city-humidity1").append("Humidity: " + response6.list[5].main.humidity + " %")
                $("#city-wind1").empty();
                $("#city-wind1").append("Wind-Speed: " + response6.list[5].wind.speed + " MPH")
                $("#weather-icon1").empty();
                $("#weather-icon1").append(weatherIcon2);


        var imgURL2 = response6.list[13].weather[0].icon
        var weatherIcon2 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + imgURL2 + ".png")
        var wholeTime = response6.list[9].dt_txt;
        for (var i=0; i<wholeTime.length; i++) {
          var futureTime2 = wholeTime.slice(0, 10);
        }
                $("#current-city2").empty();
                $("#current-city2").append(response6.city.name + ": " + futureTime2);
                $("#city-temp2").empty();
                $("#city-temp2").append("Temperature: " + response6.list[13].main.temp + " F°")
                $("#city-humidity2").empty();
                $("#city-humidity2").append("Humidity: " + response6.list[13].main.humidity + " %")
                $("#city-wind2").empty();
                $("#city-wind2").append("Wind-Speed: " + response6.list[13].wind.speed + " MPH")
                $("#weather-icon2").empty();
                $("#weather-icon2").append(weatherIcon2);


        var imgURL2 = response6.list[21].weather[0].icon
        var weatherIcon2 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + imgURL2 + ".png")
        var wholeTime = response6.list[17].dt_txt;
        for (var i=0; i<wholeTime.length; i++) {
          var futureTime3 = wholeTime.slice(0, 10);
        }
                $("#current-city3").empty();
                $("#current-city3").append(response6.city.name + ": " + futureTime3);
                $("#city-temp3").empty();
                $("#city-temp3").append("Temperature: " + response6.list[21].main.temp + " F°")
                $("#city-humidity3").empty();
                $("#city-humidity3").append("Humidity: " + response6.list[21].main.humidity + " %")
                $("#city-wind3").empty();
                $("#city-wind3").append("Wind-Speed: " + response6.list[21].wind.speed + " MPH")
                $("#weather-icon3").empty();
                $("#weather-icon3").append(weatherIcon2);

        var imgURL2 = response6.list[29].weather[0].icon
        var weatherIcon2 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + imgURL2 + ".png")
        var wholeTime = response6.list[25].dt_txt;
        for (var i=0; i<wholeTime.length; i++) {
          var futureTime4 = wholeTime.slice(0, 10);
        }
                $("#current-city4").empty();
                $("#current-city4").append(response6.city.name + ": " + futureTime4);
                $("#city-temp4").empty();
                $("#city-temp4").append("Temperature: " + response6.list[29].main.temp + " F°")
                $("#city-humidity4").empty();
                $("#city-humidity4").append("Humidity: " + response6.list[29].main.humidity + " %")
                $("#city-wind4").empty();
                $("#city-wind4").append("Wind-Speed: " + response6.list[29].wind.speed + " MPH")
                $("#weather-icon4").empty();
                $("#weather-icon4").append(weatherIcon2);

        var imgURL2 = response6.list[37].weather[0].icon
        var weatherIcon2 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + imgURL2 + ".png")
        var wholeTime = response6.list[33].dt_txt;
        for (var i=0; i<wholeTime.length; i++) {
          var futureTime5 = wholeTime.slice(0, 10);
        }
                $("#current-city5").empty();
                $("#current-city5").append(response6.city.name + ": " + futureTime5);
                $("#city-temp5").empty();
                $("#city-temp5").append("Temperature: " + response6.list[37].main.temp + " F°")
                $("#city-humidity5").empty();
                $("#city-humidity5").append("Humidity: " + response6.list[37].main.humidity + " %")
                $("#city-wind5").empty();
                $("#city-wind5").append("Wind-Speed: " + response6.list[37].wind.speed + " MPH")
                $("#weather-icon5").empty();
                $("#weather-icon5").append(weatherIcon2);
    });
      
    });
  //-----------------END DISPLAY ONLOAD -----------------
    

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
  var maxAllowed = 5;
  while (textArr.length > maxAllowed) {    // CREATES MAX NUMBER OF ARRAY VALUES
       textArr.shift();
  }
  localValue = JSON.stringify(textArr);
  localStorage.setItem("value1", localValue);  
});
// -----------------------------------------------------



// ---------SETTING PAST SEARCH BUTTON VALUES

    var valueKeys = JSON.parse(localStorage.getItem("value1"));
    var lastValue = valueKeys[valueKeys.length - 1]
    for (var i=0;i<valueKeys.length;i++) {    
    }

          $("#past-city4").append(valueKeys[4]);
          $("#past-city3").append(valueKeys[3]);
          $("#past-city2").append(valueKeys[2]);
          $("#past-city1").append(valueKeys[1]);
          $("#past-city0").append(valueKeys[0]);

// --------ONCLICK AJAX CALLS ----------
$('.search-city').on('click', function(e){  
  e.preventDefault();
var search = $("#city-search").val();
var APIKey = "ebdc73f0f98e2655e84d811acead2d14";
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
      
      var cityName = response.name
      var APIKey = "ebdc73f0f98e2655e84d811acead2d14";
      var queryURL3 = "http://api.openweathermap.org/data/2.5/forecast?appid=" + APIKey + "&q=" + cityName;
      
    
      console.log(queryURL3)
      $.ajax({
        url: queryURL3,
        method: "GET"
      }).then(function(response3) {
        console.log(response3)
        var imgURL2 = response3.list[0].weather[0].icon
        var weatherIcon2 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + imgURL2 + ".png")


        
        // 5 DAY FORECAST ---------------------------------------
        var imgURL2 = response3.list[5].weather[0].icon
        var weatherIcon2 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + imgURL2 + ".png")
        var wholeTime = response3.list[1].dt_txt;
        for (var i=0; i<wholeTime.length; i++) {
          var futureTime1 = wholeTime.slice(0, 10);
        }
              $("#current-city1").empty();
              $("#current-city1").append(response.name + ": " + futureTime1);
              $("#city-temp1").empty();
              $("#city-temp1").append("Temperature: " + response3.list[5].main.temp + " F°")
              $("#city-humidity1").empty();
              $("#city-humidity1").append("Humidity: " + response3.list[5].main.humidity + " %")
              $("#city-wind1").empty();
              $("#city-wind1").append("Wind-Speed: " + response3.list[5].wind.speed + " MPH")
              $("#weather-icon1").empty();
              $("#weather-icon1").append(weatherIcon2);


        var imgURL2 = response3.list[13].weather[0].icon
        var weatherIcon2 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + imgURL2 + ".png")
        var wholeTime = response3.list[9].dt_txt;
        for (var i=0; i<wholeTime.length; i++) {
          var futureTime2 = wholeTime.slice(0, 10);
        }
              $("#current-city2").empty();
              $("#current-city2").append(response.name + ": " + futureTime2);
              $("#city-temp2").empty();
              $("#city-temp2").append("Temperature: " + response3.list[13].main.temp + " F°")
              $("#city-humidity2").empty();
              $("#city-humidity2").append("Humidity: " + response3.list[13].main.humidity + " %")
              $("#city-wind2").empty();
              $("#city-wind2").append("Wind-Speed: " + response3.list[13].wind.speed + " MPH")
              $("#weather-icon2").empty();
              $("#weather-icon2").append(weatherIcon2);


        var imgURL2 = response3.list[21].weather[0].icon
        var weatherIcon2 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + imgURL2 + ".png")
        var wholeTime = response3.list[17].dt_txt;
        for (var i=0; i<wholeTime.length; i++) {
          var futureTime3 = wholeTime.slice(0, 10);
        }
              $("#current-city3").empty();
              $("#current-city3").append(response.name + ": " + futureTime3);
              $("#city-temp3").empty();
              $("#city-temp3").append("Temperature: " + response3.list[21].main.temp + " F°")
              $("#city-humidity3").empty();
              $("#city-humidity3").append("Humidity: " + response3.list[21].main.humidity + " %")
              $("#city-wind3").empty();
              $("#city-wind3").append("Wind-Speed: " + response3.list[21].wind.speed + " MPH")
              $("#weather-icon3").empty();
              $("#weather-icon3").append(weatherIcon2);

        var imgURL2 = response3.list[29].weather[0].icon
        var weatherIcon2 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + imgURL2 + ".png")
        var wholeTime = response3.list[25].dt_txt;
        for (var i=0; i<wholeTime.length; i++) {
          var futureTime4 = wholeTime.slice(0, 10);
        }
              $("#current-city4").empty();
              $("#current-city4").append(response.name + ": " + futureTime4);
              $("#city-temp4").empty();
              $("#city-temp4").append("Temperature: " + response3.list[29].main.temp + " F°")
              $("#city-humidity4").empty();
              $("#city-humidity4").append("Humidity: " + response3.list[29].main.humidity + " %")
              $("#city-wind4").empty();
              $("#city-wind4").append("Wind-Speed: " + response3.list[29].wind.speed + " MPH")
              $("#weather-icon4").empty();
              $("#weather-icon4").append(weatherIcon2);

        var imgURL2 = response3.list[37].weather[0].icon
        var weatherIcon2 = $("<img>").attr("src", "http://openweathermap.org/img/w/" + imgURL2 + ".png")
        var wholeTime = response3.list[33].dt_txt;
        for (var i=0; i<wholeTime.length; i++) {
          var futureTime5 = wholeTime.slice(0, 10);
        }
              $("#current-city5").empty();
              $("#current-city5").append(response.name + ": " + futureTime5);
              $("#city-temp5").empty();
              $("#city-temp5").append("Temperature: " + response3.list[37].main.temp + " F°")
              $("#city-humidity5").empty();
              $("#city-humidity5").append("Humidity: " + response3.list[37].main.humidity + " %")
              $("#city-wind5").empty();
              $("#city-wind5").append("Wind-Speed: " + response3.list[37].wind.speed + " MPH")
              $("#weather-icon5").empty();
              $("#weather-icon5").append(weatherIcon2);
              });
  
  
    });
});


});

});