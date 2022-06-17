function displayElements(){

   let userArray = prompt(); // Code will be tested with other array values as well
   
   userArray.pop();
   userArray.pop();
   userArray.push(3);
   userArray.push(9);
   for(let i = 0; i < userArray.length; i++){
      console.log(userArray[i])
   }
}
