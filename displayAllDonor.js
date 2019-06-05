function displayAllDonors() {
    console.log("new js file");
    var x = document.getElementById("results");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var td2 = document.createElement('th');
    var td3 = document.createElement('th');
    var td4 = document.createElement('th');
    var td5 = document.createElement('th');
    var text1 = document.createTextNode('Donor Name');
    var text2 = document.createTextNode('Personalization');
    var text3 = document.createTextNode('Zone');
    var text4 = document.createTextNode('view');
    td2.appendChild(text1);
    td3.appendChild(text2);
    td4.appendChild(text3);
    td5.appendChild(text4);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    table.appendChild(tr);
  
    for (var x in bricksJSON) {
      var text1 = document.createTextNode(bricksJSON[x].DonorName);
      var text2 = document.createTextNode(bricksJSON[x].Personalization);
      var text3 = document.createTextNode(bricksJSON[x].Zone);
      displayTable();
    }
  
    for (var x in paversJSON) {
      var text1 = document.createTextNode(paversJSON[x].DonorName);
      var text2 = document.createTextNode(paversJSON[x].Personalization);
      var text3 = document.createTextNode(paversJSON[x].Zone);
      displayTable();
    }
  
  
    // for (var x in bricksJSON) {
    //   var toCheck = bricksJSON[x].DonorName.toLowerCase();
    //   var descriptioncheck = bricksJSON[x].Personalization.toLowerCase();
    //     var word1 = "null";
    //     word1 = bricksJSON[x].Personalization;
    //     var text1 = document.createTextNode(bricksJSON[x].DonorName);
    //     var text2 = document.createTextNode(bricksJSON[x].Personalization);
    //     var text3 = document.createTextNode(bricksJSON[x].Zone); 
    //     displayTable();
    // }
    // for (var x in paversJSON) {
    //   var toCheck = paversJSON[x].DonorName.toLowerCase();
    //   var descriptioncheck = paversJSON[x].Personalization.toLowerCase();
    //     var word1 = "null";
    //     word1 = paversJSON[x].Personalization;
    //     var text1 = document.createTextNode(paversJSON[x].DonorName);
    //     var text2 = document.createTextNode(paversJSON[x].Personalization);
    //     var text3 = document.createTextNode(paversJSON[x].Zone);
    //     displayTable();
    
    // }
    var x = document.createElement("H2");
    function displayTable() {
      var tr = document.createElement('tr');
      var td2 = document.createElement('td');
      var td3 = document.createElement('td');
      var td4 = document.createElement('td');
      var td5 = document.createElement('td');
      var text4 = document.createTextNode("👁");
      td2.appendChild(text1);
      td3.appendChild(text2);
      td4.appendChild(text3);
      td5.appendChild(text4);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      table.appendChild(tr);
      var node = document.createElement("p");
      node.appendChild(table);
      document.getElementById("results").appendChild(node);
      var w = text3.textContent.replace(" ", "") + "," + text2.textContent.replace(/\n|\r/g, "").replace(/\"/g, " ");
      tr.setAttribute("onclick", 'showImage(\"' + w + '")');
    }
  }