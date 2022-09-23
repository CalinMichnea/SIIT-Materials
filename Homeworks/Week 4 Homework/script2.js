for (i=1; i<=20; i++) {
    if(i % 2 != 0) {
        console.log(i + '(odd number)');
    }
    else {
        console.log(i);
    }
}
     
const myNumbers = [20, 2, 6, 34, 10, 18, 6, 6,];

console.log(myNumbers);
    function sum(myNumbers) {
        sum = 0;
        for (i = 0; i < myNumbers.length; i++)
        sum += myNumbers[i];

        return sum;
    }

    console.log('The sum of the elements of the array is:' + sum(myNumbers));

    console.log('The maximum of an element of the array is: ' + Math.max(...myNumbers));

    let myNumber = 6;
    let counter = 0;
    for(number of myNumbers){
        if (number === myNumber){
            counter++;
        }
    };

    console.log('The number 6 appears ' + counter + ' times in the array');