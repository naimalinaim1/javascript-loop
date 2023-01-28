var numbers = [1,2,5,8,9,4,6,2,7,8,2,5,6];


for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 6) {
        continue;
    }
    
    console.log(number);
}