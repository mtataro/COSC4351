function playGuessingGame(gNum, totalGuesses = 10){
    let numToGuess = gNum;
    let guessesLeft = totalGuesses-1;
    let promptStr = `Enter a number between 1 and 100.`
    let num = prompt(promptStr);
    while(guessesLeft >= 0){
        if(num === null){
            return 0;
        }else if(isNaN(num) || num === ""){ //this would be better as a while loop, because this only checks once, but zyBooks wants it this way? This is kinda stupid, it requires more comparisons this way
            num = prompt("Please enter a number.")
        }else if(num == numToGuess){
            return totalGuesses - guessesLeft;
        }else{
            if(num < numToGuess){
                promptStr = `${num} is too small. Guess a larger number.`
            }else{
                promptStr = `${num} is too large. Guess a smaller number.`
            }
            num = prompt(promptStr)
            guessesLeft--;
        }
    }
    if(guessesLeft <= 0){
        return 0;
    }
}