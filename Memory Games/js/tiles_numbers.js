var numbers = [ false, false, false, false, false, false, false, false, false ];

function tiles_numbers_fadeOut(element, number, pos) {
    var classToShow = '.t' + number;
    
    // Checks that 1 is always the first card selected
    if (number == 1) {
        element.style.visibility = "hidden";
        numbers[number-1] = true;
        fadeIn(classToShow, "visible");
    }
    
    // Checks that the number is greater than 1, and then checks
    // to make sure that the number previous to it's value has already 
    // been selected.
    else if (number > 1 && numbers[number - 2]) {
        element.style.visibility = "hidden";
        numbers[number-1] = true;
        fadeIn(classToShow, "visible");
        
        if (number == 9) {
            setTimeout(function() {
                fadeOut('table .choices', "hidden");
                fadeOut('table .guess', "hidden");
            
                $('table .guess').fadeOut("slow", function() {
                    fadeIn('.tiles_won', "visible");
                    $('.CongratsImg').css({ 
                        width: "100%",
                        height: "100%"
                    });
                    fadeIn('.CongratsImg', "visible");
                });     
            }, 2000); 
        }
    }
    
    // Neither of the other cases are met, we're going to pulse 
    // a red background on the cell.
    else {
       $(element).fadeOut(150).fadeIn(150);
    }
}
