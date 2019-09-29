// GLOBAL VARIABLES ==========================================================================================

var topics = ["camping", "hiking", "skiing", "snowboarding", "mountain biking", "backpacking", "skydiving", "hang gliding", "bungee jumping", "wing suiting", "rock climbing", "slack lining", "mountaineering", "zip lining", "canyoneering", "kite surfing", "kayaking", "rafting"];


// FUNCTIONS =================================================================================================

// For loop to loop through array of topics. This is to render the buttons upon page loading. 
//((Make this a function and then call function later?))
for (var i = 0; i < topics.length; i++) {
    // Then dynamicaly generating buttons for each movie in the array
    var a = $("<button type='button' class='btn btn-info'>");
    // Adding a class of movie to our button
    a.addClass("sport");
    // Adding a data-attribute
    a.attr("data-name", topics[i]);
    // Providing the initial button text
    a.text(topics[i]);
    // Adding the button to the HTML
    $("#buttons-view").prepend(a);
}

// Function for displaying the sport info
// We're adding a click event listener to all elements with the class "sport"
// We're adding the event listener to the document because it will work for dynamically generated elements
// $(".animals").on("click") will only add listeners to elements that are on the page at that time
$(document).on("click", ".sport", alertSportName);


// Generic function for capturing the sport name from the data-attribute
function alertSportName() {
    var keyword = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hv1F9gem7bGR4Z4zMeZFirQnyj0iUS30&q=" + keyword + "&limit=10&rating=pg-13";
    // ajax call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var sport = response.data
        console.log(sport)

        for (var i = 0; i < topics.length; i++) {
            var sportStill = sport[i].images.fixed_height_still.url;
            console.log(sportStill);
            var sportAnimate = sport[i].images.fixed_height.url;


            // Creating a div to hold the gif
            var gifDiv = $("<div class='gif'>");
            // Storing the rating data
            var rating = sport[i].rating;
            // Creating an element to have the rating displayed
            var p = $("<p>").text("Rating: " + rating);
            // Displaying the rating
            gifDiv.append(p);
            // Creating an element to store the gif
            var gifData = $("<img>").attr({ src: sportStill, class: "gif", "data-state": "still", "data-still": sportStill, "data-animate": sportAnimate });
            // Displaying the gif html
            gifDiv.append(gifData);
            // Displaying gif and rating on page
            $("#gif-dump").append(gifDiv);
        }
    });
}


// Function for displaying gif data
function renderButtons() {


    // Deleting the topics prior to adding new topics
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();

    // For loop to loop through array of topics
    for (var i = 0; i < topics.length; i++) {
        // Then dynamicaly generating buttons for each movie in the array
        var a = $("<button type='button' class='btn btn-info'>");
        // Adding a class of sport to our button
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

    // On click event for pausing and starting the gifs
    $(".gif").on("click", function () {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    })

})
