window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   cBox = document.getElementById('cInput');
   fBox = document.getElementById('fInput');
   errorMessage = document.getElementById('errorMessage');
   //input listeners
   cBox.addEventListener('input', function(){fBox.value = ""})
   fBox.addEventListener('input', function(){cBox.value = ""})
   //convert function
   document.getElementById('convertButton').addEventListener('click', function(){

      if(cBox.value !== ""){
         if(isNaN(parseFloat(cBox.value))){
            errorMessage.innerHTML = `${cBox.value} is not a number`
         }else{
            errorMessage.innerHTML = ``
            fBox.value = convertCtoF(parseFloat(cBox.value))
         }
      }else{
         if(isNaN(parseFloat(fBox.value))){
            errorMessage.innerHTML = `${fBox.value} is not a number`
         }else{
            errorMessage.innerHTML = ``
            cBox.value = convertFtoC(parseFloat(fBox.value))
         }
      }
      
      weatherImage = document.getElementById('weatherImage')
      switch(true){
         case fBox.value < 32:
            weatherImage.src = "cold.png"
         break;
         case 32 <= fBox.value && fBox.value <= 50:
            weatherImage.src = "cool.png"
         break;
         case 50 < fBox.value:
            weatherImage.src = "warm.png"
         break;
         default:
            break;
      }
   });
}

function convertCtoF(degreesCelsius) {
   return ((degreesCelsius*(9/5))+32)
}

function convertFtoC(degreesFahrenheit) {
   return ((degreesFahrenheit-32)*(5/9))
}
