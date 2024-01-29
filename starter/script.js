$(document).ready(function () {
    $("#search-button").on("click", function (event) {
    event.preventDefault();
      var searchString = $("#search-input").val();
      var cnt = 6;
      var apiKey = "6168024906cbfc2eddabc6965434b217";
      var queryURL =
        "http://api.openweathermap.org/data/2.5/weather?q=" + searchString + "&appid=" + apiKey
      
      console.log(searchString);
//   Fetch to get the wather data
      fetch(queryURL)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          localStorage.setItem("searchString", JSON.stringify(searchString));

        });


    });
  });
  var searchString = $("#search-input").val();
  renderSearch();
  function renderSearch() {
    history.innerHTML = "";
    for (var i = 0; i < searchString.length; i++) {
        var list = searchString[i];
    
        var li = document.createElement("li");
        li.textContent = list;
        history.appendChild(li);
    }
  }
  
