// today my works
var myWorks = ['unlock module at night 8.00', 'Finish this module', 'Video above notes', 'Practice module with along', 'any problem, think this problem and get a solution (google)'];
var j=1;
while (j<=5) {
    console.log("\n----------------------- ", j, "----------------------- ");
    var i = 0;
    while (i < myWorks.length) {
        console.log("\t @", myWorks[i])
        i++;
    }
    j++;
}
