// today my works
var myWorks = ['unlock module at night 8.00', 'Finish this module', 'Video above notes', 'Practice module with along', 'any problem, think this problem and get a solution (google)'];

var j=5;
while (j>=1) {
    console.log("\n----------------------- ", j, "----------------------- ");
    var i = myWorks.length - 1;
    while (i >= 0) {
        console.log("\t @", myWorks[i])
        i--;
    }
    j--;
}
