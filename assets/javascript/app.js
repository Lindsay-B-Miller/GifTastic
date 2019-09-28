// GLOBAL VARIABLES ==========================================================================================

// topics = [];
var keyword = "dog";
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hv1F9gem7bGR4Z4zMeZFirQnyj0iUS30&q=" + keyword + "&limit=10";

// FUNCTIONS =================================================================================================


// ajax call
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});