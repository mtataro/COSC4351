let evenArray = new Array;
let oddArray = new Array;
function divideArray(numArray){
    //seperate evens and odds
    numArray.forEach(num => {
        if(num % 2 === 0){
            evenArray.push(num);
        }else{
            oddArray.push(num)
        }
    });
    //sort arrays
    evenArray.sort(function(a, b) {return a - b;});
    oddArray.sort(function(a, b) {return a - b;});

    //print arrays
    console.log(`Even numbers:`)
    if(evenArray.length >= 1){
        evenArray.forEach(function(i){console.log(i)})
    }else{
        console.log("None")
    }
    console.log(`Odd numbers:`)
    if(oddArray.length >= 1){
        oddArray.forEach(function(i){console.log(i)})
    }else{
        console.log("None")
    }
}