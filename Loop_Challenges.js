//////////////////////////////////////////////////
// Subj:    Coding Dojo > Web Fundamentals > JS
//          Loop Challenges
// By:      Virgilio D. Cabading Jr.
// Created: October 16, 2021
//////////////////////////////////////////////////

//// FUNCTIONS SECTION ///////////////////////////

function print_intro(description) {                     // Function to print descriptions onto the console
    console.log ("//////////////////////////////////////////////////")
    console.log(description);
    console.log("");
}

function print_ln() {                                    // Function to print an empty line 
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
                                                        // Function to get decreasing numbers from start to end with a give interval 
function get_numbers_decreasing_order(start, end, interval) {
    var content = [];
    for (var idx=start; idx >= end; idx-=interval) {
        content.push(idx);
    }
    return content;
}

//// MAIN EXECUTABLE SECTION //////////////////////

print_intro ("1. Print odds 1-20");                     // 1st Loop Challenge
console.log("The odd numbers from 1-20 are: " + get_odd_numbers(1, 20));
print_ln();

print_intro ("2. Decreasing Multiples of 3");           // 2nd Loop Challenge
console.log("The decreasing multiplses of 3 fromm 100 to 0 are: " + get_decreasing_multiples_of_3(100));
print_ln();

print_intro("3. Print the sequence");                   // 3rd loop challenge
console.log("The numbers from 4 to -3.5 in intervals of 1.5 are: " + get_numbers_decreasing_order(4, -3.5, 1.5));
print_ln();