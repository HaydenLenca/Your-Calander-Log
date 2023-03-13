// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hourCount = ['06AM','07AM','08AM','09AM','10AM','11AM','12PM','01PM','02PM','03PM','04PM','05PM','06PM'];
var today = moment().format('dddd, MMMM D YYYY, h:mm:ss a');
var hour6 = moment().hour(6);
var hour7 = moment().hour(7);
var hour8 = moment().hour(8);
var hour9 = moment().hour(9);
var hour10= moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14);
var hour15 = moment().hour(15);
var hour16 = moment().hour(16);
var hour17 = moment().hour(17);
var hour18 = moment().hour(18);
var hour19 = moment().hour(19);


$('#currentDay').text(today);

 
    
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //

    $(function() {
            $("button").on("click", function () {
                var save0 = $(this).sibling("#localSave_0").val();
                localStorage.setItem('#0', JSON.stringify(save0));
                console.log(save0);
            });
});

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //


    


$(function() {

    var timeCount = [0, 1, 2, 3, 4, 5,6, 7, 8, 9, 10, 11, 12];
    // this is hopfully the changing element 
    var timeChange = "";

    for(let i = 0; i < hourCount.length; i++){
       
        var hourId = '<div id=' + timeCount[i] + ' class="row time-block ' + timeChange + '">';
        var timeBlockElement = '<div id="hour_' + hourCount[i] + '" class="col-2 col-md-1 hour text-center py-3">' + hourCount[i] + '</div><textarea class="col-8 col-md-10 description" rows="3" id=localSave_' + i + '></textarea><button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button></div>';


        if (moment().isBetween(hour6, hour7)) {
            $("#localSave_0").addClass("present");
        }
        else if (moment().isAfter(hour7)) {
            $("#localSave_0").addClass("past");
        }
        else {
            $("#localSave_0").addClass("future");
        }

        if (moment().isBetween(hour7, hour8)) {
            $("#localSave_1").addClass("present");
        }
        else if (moment().isAfter(hour8)) {
            $("#localSave_1").addClass("past");
        }
        else {
            $("#localSave_1").addClass("future");
        }

        if (moment().isBetween(hour8, hour9)) {
            $("#localSave_2").addClass("present");
        }
        else if (moment().isAfter(hour9)) {
            $("#localSave_2").addClass("past");
        }
        else {
            $("#localSave_2").addClass("future");
        }

        if (moment().isBetween(hour9, hour10)) {
            $("#localSave_3").addClass("present");
        }
        else if (moment().isAfter(hour10)) {
            $("#localSave_3").addClass("past");
        }
        else {
            $("#localSave_3").addClass("future");
        }

        if (moment().isBetween(hour10, hour11)) {
            $("#localSave_4").addClass("present");
        }
        else if (moment().isAfter(hour11)) {
            $("#localSave_4").addClass("past");
        }
        else {
            $("#localSave_4").addClass("future");
        }

        if (moment().isBetween(hour11, hour12)) {
            $("#localSave_5").addClass("present");
        }
        else if (moment().isAfter(hour12)) {
            $("#localSave_5").addClass("past");
        }
        else {
            $("#localSave_5").addClass("future");
        }

        if (moment().isBetween(hour12, hour13)) {
            $("#localSave_6").addClass("present");
        }
        else if (moment().isAfter(hour13)) {
            $("#localSave_6").addClass("past");
        }
        else {
            $("#localSave_6").addClass("future");
        }

        if (moment().isBetween(hour13, hour14)) {
            $("#localSave_7").addClass("present");
        }
        else if (moment().isAfter(hour14)) {
            $("#localSave_7").addClass("past");
        }
        else {
            $("#localSave_7").addClass("future");
        }

        if (moment().isBetween(hour14, hour15)) {
            $("#localSave_8").addClass("present");
        }
        else if (moment().isAfter(hour15)) {
            $("#localSave_8").addClass("past");
        }
        else {
            $("#localSave_8").addClass("future");
        }

        if (moment().isBetween(hour15, hour16)) {
            $("#localSave_9").addClass("present");
        }
        else if (moment().isAfter(hour16)) {
            $("#localSave_9").addClass("past");
        }
        else {
            $("#localSave_9").addClass("future");
        }

        if (moment().isBetween(hour16, hour7)) {
            $("#localSave_10").addClass("present");
        }
        else if (moment().isAfter(hour17)) {
            $("#localSave_10").addClass("past");
        }
        else {
            $("#localSave_10").addClass("future");
        }

        if (moment().isBetween(hour17, hour18)) {
            $("#localSave_11").addClass("present");
        }
        else if (moment().isAfter(hour18)) {
            $("#localSave_11").addClass("past");
        }
        else {
            $("#localSave_11").addClass("future");
        }

        if (moment().isBetween(hour18, hour19)) {
            $("#localSave_12").addClass("present");
        }
        else if (moment().isAfter(hour19)) {
            $("#localSave_12").addClass("past");
        }
        else {
            $("#localSave_12").addClass("future");
        }

        var time_block = hourId + timeBlockElement;
        $("#info-block").append(time_block)[i];    
    };
    // end of the repeating time-blocks

  

    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

    // TODO: Add code to display the current date in the header of the page.

  });


