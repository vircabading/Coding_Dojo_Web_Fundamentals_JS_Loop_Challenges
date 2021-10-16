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

function get_decreasing_multiples_of_3(start) {         // Function to get all the multiples of 3 in decreasing order from start 
    var content = [];
    for (var idx=start; idx >=0; idx--) {
        if (idx % 3 == 0) {
            content.push(idx);
        }
    }
    return content;
}

//// MAIN EXECUTABLE SECTION //////////////////////

log_intro ("1. Print odds 1-20");
console.log("The odd numbers from 1-20 are: " + get_odd_numbers(1, 20));

log_intro ("2. Decreasing Multiples of 3");
console.log("The decreasing multiplses of 3 fromm 100 to 0 are: " + get_decreasing_multiples_of_3(100));