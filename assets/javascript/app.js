// GLOBAL VARIABLES ==========================================================================================

var topics = ["camping", "hiking", "skiing", "snowboarding", "mountain biking", "backpacking", "skydiving", "hang gliding", "bungee jumping", "Wing Suiting", "rock climbing", "slack lining", "mountaineering", "zip lining", "canyoneering", "kite surfing", "kayaking", "rafting"];


// FUNCTIONS =================================================================================================

// For loop to loop through array of topics
for (var i = 0; i < topics.length; i++) {
    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
    var a = $("<button type='button' class='btn btn-info'>");
    // Adding a class of movie to our button
    a.addClass("sport");
    // Adding a data-attribute
    a.attr("data-name", topics[i]);
    // Providing the initial button text
    a.text(topics[i]);
    // Adding the button to the HTML
    $("#buttons-view").append(a);
}

// Function for displaying the sport info
// We're adding a click event listener to all elements with the class "sport"
// We're adding the event listener to the document because it will work for dynamically generated elements
// $(".animals").on("click") will only add listeners to elements that are on the page at that time
$(document).on("click", ".sport", alertSportName);


// Generic function for capturing the sport name from the data-attribute
function alertSportName() {
    var keyword = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hv1F9gem7bGR4Z4zMeZFirQnyj0iUS30&q=" + keyword + "&limit=10";
    // ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var sport = response.data
        console.log(sport);
    });

    // alert(keyword);
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
        var a = $("<button type='button' class='btn btn-info'>");
        // Adding a class of movie to our button
        a.addClass("sport");
        // Adding a data-attribute
        a.attr("data-name", topics[i]);
        // Providing the initial button text
        a.text(topics[i]);
        // Adding the button to the HTML
        $("#buttons-view").append(a);
    }
}


// This function handles events where one button is clicked
$("#find-gif").on("click", function (event) {
    // Preventing the buttons default behavior when clicked (which is submitting a form)
    event.preventDefault();
    // This line grabs the input from the textbox
    var sport = $("#text-input").val().trim();
    // Adding the movie from the textbox to our array
    topics.push(sport);
    // Calling renderButtons which handles the processing of our topics array
    renderButtons();


    // Function for displaying the sport info
    // We're adding a click event listener to all elements with the class "sport"
    // We're adding the event listener to the document because it will work for dynamically generated elements
    // $(".animals").on("click") will only add listeners to elements that are on the page at that time
    // $(document).on("click", ".sport", alertSportName);

    // Calling the renderButtons function to display the intial buttons
    renderButtons();



})
