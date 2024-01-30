$(document).ready(function () {
    var listOfCity= [];
    $("#search-button").on("click", function (event) {
    event.preventDefault();
      var searchString = $("#search-input").val();
      listOfCity.push(searchString)
      console.log(listOfCity)
      var apiKey = "6168024906cbfc2eddabc6965434b217";
      var unit= "metric";
      var queryURL =
        "http://api.openweathermap.org/data/2.5/weather?q=" + searchString + "&appid=" + apiKey + "&units=" + unit;
      
//   Fetch to get the wather data
      fetch(queryURL)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);

        $("#cityName").empty()  
        var cityName= $("<p>");
        cityName.text("City Name: " + data.name);
        $("#cityName").append(cityName);
       
       
        $("#temperature").empty()
        var temperature= $("<p>");
        temperature.text("Temperature(Celsius): " + data.main.temp);
        $("#temperature").append(temperature);


        $("#humidity").empty()
        var humidity= $("<p>");
        humidity.text("Humidity: " + data.main.humidity);
        $("#humidity").append(humidity);

        $("#wind-speed").empty()
        var windspeed= $("<p>");
        windspeed.text("Wind Speed: " + data.wind.speed);
        $("#wind-speed").append(windspeed);

        var apiKey = "6168024906cbfc2eddabc6965434b217";
        var unit= "imperial";
        var cnt = 5;
       
        var queryURL2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchString + "&appid=" + apiKey + "&units=" + unit;
        
        

        fetch(queryURL2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);

          var list = data.list

          for (let index = 0; index < list.length; index=index + 7) {
            var currentListItem = list[index];

            console.log(currentListItem)
            
          }
          

        //   $("#date").empty()  
        // var date= $("<p>");
        // date.text("City Name: " + data.name);
        // $("#date").append(date);

        });







          localStorage.setItem("searchString", JSON.stringify(listOfCity));
        renderLocal();
        });


    });
    
    function renderLocal() {
      // get from local Storage
      // put it on the page
      // call it here
    }

    renderLocal();



  });
  