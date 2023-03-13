// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hourCount = ['06AM','07AM','08AM','09AM','10AM','11AM','12PM','01PM','02PM','03PM','04PM','05PM','06PM'];
var currentDay = moment().format('dddd, MMMM D YYYY, h:mm:ss a');

var today = dayjs();
    $('#currentDay').text(currentDay);

var hour9 = moment().hour(9);
var hour10 = moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14);
var hour15 = moment().hour(15);
var hour16 = moment().hour(16);
var hour17 = moment().hour(17);
var hour18 = moment().hour(18);







$("button").on("click", function () {
            var save0 = $("#localSave_0").val();
            localStorage.setItem('#0', JSON.stringify(save0));
            console.log(save0);
        });


    

 $(function() {
    

    $(".saveBtn").click(function() {

        
        // var localSave_0 = JSON.parse(localStorage.getItem('#localSave_0')) || "";

        // textData.push(localSave_0, localSave_1, localSave_2, localSave_3, localSave_4, localSave_5, localSave_6, localSave_7, localSave_8, localSave_9, localSave_10, localSave_11);
        
        localStorage.setItem("hour9", textData);
        

        
});
});
    
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //


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
        
        var timeZone = moment().format('hhA');
       
        

        var hourId = '<div id=' + timeCount[i] + ' class="row time-block ' + timeChange + '">';
        var timeBlockElement = '<div id="hour_' + hourCount[i] + '" class="col-2 col-md-1 hour text-center py-3">' + hourCount[i] + '</div><textarea class="col-8 col-md-10 description" rows="3" id=localSave_' + i + '></textarea><button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button></div>';


        if (moment().isBetween(hour9, hour10)) {
            $("#localSave_0").addClass("present");
        }
        else if (moment().isAfter(hour10)) {
            $("#localSave_0").addClass("past");
        }
        else {
            $("#localSave_0").addClass("future");
        }

        if (moment().isBetween(hour10, hour11)) {
            $("#localSave_1").addClass("present");
        }
        else if (moment().isAfter(hour10)) {
            $("#localSave_1").addClass("past");
        }
        else {
            $("#localSave_1").addClass("future");
        }

        if (moment().isBetween(hour11, hour12)) {
            $("#localSave_2").addClass("present");
        }
        else if (moment().isAfter(hour10)) {
            $("#localSave_2").addClass("past");
        }
        else {
            $("#localSave_2").addClass("future");
        }

        // if (timeZone === hourCount[i]){
        //         timeChange = "present";
        //     } else {
        //             timeChange = "past";
        //         };

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


