// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hourCount = ['06AM','07AM','08AM','09AM','10AM','11AM','12PM','01PM','02PM','03PM','04PM','05PM','06PM'];

  




   
    

 $(function() {
    
    var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));

    $(".saveBtn").click(function() {

        var textData = [];
        var localSave_0=$("#localSave_0").val();
        var localSave_1=$('#localSave_1').val();
        var localSave_2=$('#localSave_2').val();
        var localSave_3=$('#localSave_3').val();
        var localSave_4=$('#localSave_4').val();
        var localSave_5=$('#localSave_5').val();
        var localSave_6=$('#localSave_6').val();
        var localSave_7=$('#localSave_7').val();
        var localSave_8=$('#localSave_8').val();
        var localSave_9=$('#localSave_9').val();
        var localSave_10=$('#localSave_10').val();
        var localSave_11=$('#localSave_11').val();


        textData.push(localSave_0, localSave_1, localSave_2, localSave_3, localSave_4, localSave_5, localSave_6, localSave_7, localSave_8, localSave_9, localSave_10, localSave_11);
    
        localStorage.setItem("time-block", textData);
        console.log(localSave_0);
    })
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

    
    // var hourtime = today.diff(beginningOfDay, 'day');
    // var hour = hourtime % 2 === 1;
    // $('#4a').text(hour + ", because it's currently week " + hourtime);
    
$(function() {

    var timeCount = [0, 1, 2, 3, 4, 5,6, 7, 8, 9, 10, 11, 12];
    // this is hopfully the changing element 
    var timeChange = "";

    for(let i = 0; i < hourCount.length; i++){
        
        var timeZone = dayjs().format('hhA');
        // newCount = timeZone + ' ' + timeCount[i];
        // oldCount = timeCount[i];
        // console.log(newCount);
        

        newTime = JSON.stringify(timeZone);

        
       
        if (timeZone === hourCount[i]){
                timeChange = "present";
            }
             else if (hourCount.length < hourCount[i]){
                timeChange = "future";
            } 
            else {
                    timeChange = "past";
                };

        var hourId = '<div id=' + timeCount[i] + ' class="row time-block ' + timeChange + '">';
        var timeBlockElement = '<div id="hour_' + hourCount[i] + '" class="col-2 col-md-1 hour text-center py-3">' + hourCount[i] + '</div><textarea class="col-8 col-md-10 description" rows="3" id=localSave_' + i + '></textarea><button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button></div>';

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
