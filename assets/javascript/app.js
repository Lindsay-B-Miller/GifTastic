// GLOBAL VARIABLES ==========================================================================================

// topics = [];


// FUNCTIONS =================================================================================================

// On click event for each button 
$(".btn").on("click", function (event) {
    var keyword = $(this).val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hv1F9gem7bGR4Z4zMeZFirQnyj0iUS30&q=" + keyword + "&limit=10";

    // ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var animal = response.data
        console.log(animal);
    });

})
