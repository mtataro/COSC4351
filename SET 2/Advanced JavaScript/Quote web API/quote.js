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

async function fetchQuotes(topic, count) {
   let url = `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`;
   let response = await fetch(url);
   let json = await response.json();
   let html;
   if(json.error){
      html = json.error
   }else{
      html = "<ol>";
      for (let c = 0; c < json.length; c++) {
         html += `<li>${json[c].quote} - ${json[c].source}</li>`;
      }
      html += "</ol>";
   }
   console.log(html)
   document.querySelector("#quotes").innerHTML = `${html}`

}
