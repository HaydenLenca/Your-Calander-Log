// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var timeBlockEl = $('.time-block').text();
var buttonEl = $('.btn');
// var description = $(('.description').select);
// var inputEl = $(('textarea').value);




$(function () {

   
    $('button').click(function(){
    
        console.log(this.timeBlockEl);
        
        // $(console.log(this.description));

    });


    // $('#saveBtn').on('click', function() {
    //     localStorage.setItem(JSON.stringify(this.hour), JSON.stringify(this.textareaEl));
    // });

    // buttonEl.on('click', function() {
        
    //    alert(this.description);
    // });
    
// $(function() {
//     $("saveBtn").onclick(function() {
//         var time_block=$ ("#discription");
//         localStorage.setItem("getvalue", time_block);
//     })
// });

// $("#saveBtn").click(function(){
//     return this.textareaEl;
// });

// function getTextareaValue() {

//     var textarea = document.getElementById('textarea');
//     var value = textarea.value;
//     window.alert(value);

// }

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

    
    // var hourtime = today.diff(beginningOfDay, 'day');
    // var hour = hourtime % 2 === 1;
    // $('#4a').text(hour + ", because it's currently week " + hourtime);
    


        // this is the repeating time-blocks
    var time_block = '<div id="hour-10" class="row time-block future"><div class="col-2 col-md-1 hour text-center py-3">00AM</div><textarea class="col-8 col-md-10 description" rows="3"></textarea><button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button></div>';
    
    
    console.log(hour);

    for(let i = 0; i <= 11; i++){

        var hour = dayjs().format('h A');
        $("#time").append(time_block)[i];
        // time_block = time_block + i;
        // console.log(i);
        // console.log(time_block);
        $('.hour').text(hour);
        console.log(hour);
        
    }
    // end of the repeating time-blocks
   
    



    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //


    // TODO: Add code to display the current date in the header of the page.

    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));

  });




  