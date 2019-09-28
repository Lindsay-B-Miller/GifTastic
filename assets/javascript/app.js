// GLOBAL VARIABLES ==========================================================================================

// topics = [];
var keyword = "dog";
var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=hv1F9gem7bGR4Z4zMeZFirQnyj0iUS30&tag=" + keyword + "&limit=5";

// FUNCTIONS =================================================================================================


// ajax call
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});