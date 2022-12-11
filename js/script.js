//use jQuery to capture input from the form
//and display it in the div with the id of "skills-list"
//use the .append() method to add the input to the div
//use the .val() method to get the value of the input
//use the .html() method to set the html of the div
//use the .on() method to listen for a click on the button
//use the .preventDefault() method to prevent the default action of the button

// insert red x icon from font awesome to delete skill
let deleteIcon =
  '<button class ="border-0 bg-transparent"><i id="icon" class="fas fa-times bg-danger p-2 text-white"></i></button>';

$(document).ready(function () {
  $("#add-skill-btn").on("click", function (event) {
    event.preventDefault();
    let skill = $("#add-skill").val();
    if (skill === "") return;
    $("#skills-list").append(`<h4 id = "skills"> ${deleteIcon} ${skill} </h4>`);
    //add skill to local storage
    localStorage.setItem("skills", $("#skills-list").html());

    $("#add-skill").val("");
  });
});

//on click of the red x icon, remove the skill from the list
$(document).on("click", ".fa-times", function () {
  $(this).parent().parent().remove();
});

$(document).ready(function () {
  $("#skills-list").html(localStorage.getItem("skills"));
});
