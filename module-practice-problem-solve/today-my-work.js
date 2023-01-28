// today my works
var myWorks = ['unlock module at night 8.00', 'Finish this module', 'Video above notes', 'Practice module with along', 'any problem, think this problem and get a solution (google)'];

for (var j=1; j<=5; j++) {
    console.log("\n----------------------- ", j, "----------------------- ");
    for (var i = 0; i < myWorks.length; i++) {
        console.log("\t @", myWorks[i])
    }
}
