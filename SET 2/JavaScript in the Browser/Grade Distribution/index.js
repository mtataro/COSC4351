function parseScores(scoresString) {
    return scoresString.split(" ");
}

function buildDistributionArray(scoresArray) {
    if(scoresArray.length === 0){
        return new Array(5).fill(0);
    }
    let letterScores = new Array(5).fill(0);
    scoresArray.forEach(score => {
        switch(true){
            case 90<=score && score<=100:
                letterScores[0]++;
            break;

            case 80<=score && score<=89:
                letterScores[1]++;
            break;

            case 70<=score && score<=79:
                letterScores[2]++;
            break;

            case 60<=score && score<=69:
                letterScores[3]++;
            break;

            case score<=59:
                letterScores[4]++;
            break;
        }
    });
    return letterScores;
}

function setTableContent(userInput) {
    let scoresArray = parseScores(userInput);
    let letterScores = buildDistributionArray(scoresArray);
    let table = document.getElementById('distributionTable');
    if(scoresArray.length > 0 && scoresArray[0] != ''){
        table.innerHTML =   `<tr>
                                <td><div style="height:${letterScores[0] * 10}px" class="bar0"></div></td>
                                <td><div style="height:${letterScores[1] * 10}px" class="bar1"></div></td>
                                <td><div style="height:${letterScores[2] * 10}px" class="bar2"></div></td>
                                <td><div style="height:${letterScores[3] * 10}px"  class="bar3"></div></td>
                                <td><div style="height:${letterScores[4] * 10}px" class="bar4"></div></td>
                            </tr>
                            <tr>
                                <td>A</td>
                                <td>B</td>
                                <td>C</td>
                                <td>D</td>
                                <td>F</td>
                            </tr>
                            <tr>
                                <td>${letterScores[0]}</td>
                                <td>${letterScores[1]}</td>
                                <td>${letterScores[2]}</td>
                                <td>${letterScores[3]}</td>
                                <td>${letterScores[4]}</td>
                            </tr>
                            `
                            
    }else{
        table.innerHTML = `<tr><td>No graph to display</td></tr>`
    }
    
}

function bodyLoaded() {
    // The argument passed to writeTableContent can be changed for 
    // testing purposes
    setTableContent("45");
}