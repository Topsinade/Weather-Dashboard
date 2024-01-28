$(document).ready(function() {

var searchString = "";

var limit = 5;
var apiKey= "6168024906cbfc2eddabc6965434b217";
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q="+searchString+"&limit=" + limit + "&appid=" + apiKey;



$("#search-button").on("click", function () {
    searchString = $("#search-string").val();
    // console.log('query: ', queryURL)


    fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    console.log(data);
    console.log(data)
    
    });
});

});

// $(document).ready(function() {
//     // Attach a click event handler to the button
//     $('#searchButton').click(function() {
//       // Get the value of the search input using jQuery
//       var searchValue = $('#searchInput').val();

//       // Use the searchValue variable as needed (e.g., log it to the console)
//       console.log("Search Value:", searchValue);

//       // You can perform further actions with the searchValue variable
//       // For example, initiate an AJAX request, update the DOM, etc.
//     });
//   });


