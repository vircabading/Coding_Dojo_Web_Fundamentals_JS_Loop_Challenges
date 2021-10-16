//////////////////////////////////////////////////
// Subj:    Coding Dojo > Web Fundamentals > JS
//          Loop Challenges
// By:      Virgilio D. Cabading Jr.
// Created: October 16, 2021
//////////////////////////////////////////////////

//// FUNCTIONS SECTION ///////////////////////////

function log_intro(description) {                       // Function to print desctions onto the console
    console.log ("//////////////////////////////////////////////////")
    console.log(description);
    console.log("");
}

function get_odd_numbers(start, end) {                  // Function to get all the odd numbers from start to end
    var content = [];
    for (var idx=start; idx <= end; idx++) {
        if (idx % 2 == 1) {
            content.push(idx);
        }
    }
    return content;
}

//// MAIN EXECUTABLE SECTION //////////////////////

log_intro ("1. Print odds 1-20");
console.log("The odd numbers from 1-20 are: " + get_odd_numbers(1, 20));
