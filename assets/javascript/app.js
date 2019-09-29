// GLOBAL VARIABLES ==========================================================================================

var topics = ["cat", "dog", "rabbit"];


// FUNCTIONS =================================================================================================

// Generic function for capturing the movie name from the data-attribute
function alertAnimalName() {
    var animalName = $(this).attr("data-name");

    alert(animalName);
}


// Function for displaying gif data
function renderButtons() {


    // Deleting the topics prior to adding new topics
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();

    // For loop to loop through array of topics
    for (var i = 0; i < topics.length; i++) {
        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie to our button
        a.addClass("animal");
        // Adding a data-attribute
        a.attr("data-name", animals[i]);
        // Providing the initial button text
        a.text(animals[i]);
        // Adding the button to the HTML
        $("#buttons-view").append(a);
    }
}


// This function handles events where one button is clicked
$("#find-gif").on("click", function (event) {
    // Preventing the buttons default behavior when clicked (which is submitting a form)
    event.preventDefault();
    // This line grabs the input from the textbox
    var animal = $("#text-input").val().trim();
    // Adding the movie from the textbox to our array
    topics.push(animal);
    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
    // var keyword = $(this).val();
    // var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hv1F9gem7bGR4Z4zMeZFirQnyj0iUS30&q=" + keyword + "&limit=10";


    $(document).on("click", ".animal", alertAnimalName);

    // Calling the renderButtons function to display the intial buttons
    renderButtons();


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
