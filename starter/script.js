$(document).ready(function () {
    $("#search-button").on("click", function (event) {
    event.preventDefault();
      var searchString = $("#search-input").val();
      var cnt = 6;
      var apiKey = "6168024906cbfc2eddabc6965434b217";
      var queryURL =
        "http://api.openweathermap.org/data/2.5/forecast/daily?q=" +
        searchString +
        "&cnt=" +
        cnt +
        "&appid=" +
        apiKey;
  
      console.log(searchString);
  
      fetch(queryURL)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        });
    });
  });

//   api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}