function calcWordFrequencies() {
    let str = prompt("enter words");
    let strArray = str.split(" "); //split string into array seperated by a space
    var wordFreq = {};
    //function to map frequency to words
    strArray.forEach(function(word){
       if(!wordFreq[word]){
          wordFreq[word] = 1;
       }else{
          wordFreq[word]++;
       }
    });
    //function to print out words and freq for each word in strArray
    for(const [key, value] of Object.entries(wordFreq)){
      console.log(`${key} ${value}`)
    }
 }