window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   //xhr setup
   xhr = new XMLHttpRequest();
   xhr.addEventListener("load", responseReceivedHandler);
   xhr.responseType = 'json';
   xhr.open("GET", `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`);
   xhr.send();


   /*
   let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      html += `<li>Quote ${c} - Anonymous</li>`;
   }
   html += "</ol>";

   document.querySelector("#quotes").innerHTML = html;
   */
}

function responseReceivedHandler(){
   if(this.status === 200){
      let html;
      if(this.response.error){
         html = this.response.error
      }else{
         html = "<ol>";
         for (let c = 0; c < this.response.length; c++) {
            html += `<li>${this.response[c].quote} - ${this.response[c].source}</li>`;
         }
         html += "</ol>";
      }
      
      document.querySelector("#quotes").innerHTML = `${html}`
   }
}