// Method help in searching the json data for desirble results
// Designed by Priyanka Bonam
// Function to populate results when user clicks on the search result in a table
function populateResults() {
  var x = document.getElementById("results");
  if (x.style.display == "none") {
    x.style.display = "block";
  }
  document.getElementById("results").innerHTML = "";
  var val = document.getElementById("search").value.toLowerCase().trim();
  var res = val.slice(-1);
  var lengt = val.length;
  if (lengt <= 1) {
    var y = document.createElement("H1");
    var count = document.createTextNode("Please enter at least 2 characters to search");
    y.appendChild(count);
    document.getElementById("results").appendChild(y);

  }
  if (res != 0) {
    // if condition to check if the result is in the excel sheet and to print it in the table
    if (val != "" && lengt > 1) {
      var counter = 1;
      var pcounter = 1;
      var dpcounter = 1;
      var ppcounter = 1;
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
        var toCheck = bricksJSON[x].DonorName.toLowerCase();
        var descriptioncheck = bricksJSON[x].Personalization.toLowerCase();
        if (toCheck.includes(val)) {
          var text1 = document.createTextNode(bricksJSON[x].DonorName);
          var text2 = document.createTextNode(bricksJSON[x].Personalization);
          var text3 = document.createTextNode(bricksJSON[x].Zone);
          console.log("in bricks don");
          printmap();
          counter++;
        } else if (descriptioncheck.includes(val)) {
          var text1 = document.createTextNode(bricksJSON[x].DonorName);
          var text2 = document.createTextNode(bricksJSON[x].Personalization);
          var text3 = document.createTextNode(bricksJSON[x].Zone);
          console.log("in bricks person");
          printmap();
          counter++;
        }
        var donorcount = counter;
      }

      for (var x in paversJSON) {
        var toCheck = paversJSON[x].DonorName.toLowerCase();
        var descriptioncheck = paversJSON[x].Personalization.toLowerCase();
        if (toCheck.includes(val)) {
          var text1 = document.createTextNode(paversJSON[x].DonorName);
          var text2 = document.createTextNode(paversJSON[x].Personalization);
          var text3 = document.createTextNode(paversJSON[x].Zone);
          console.log("in pavers don");
          printmap();
          pcounter++;
        } else if (descriptioncheck.includes(val)) {
          var text1 = document.createTextNode(paversJSON[x].DonorName);
          var text2 = document.createTextNode(paversJSON[x].Personalization);
          var text3 = document.createTextNode(paversJSON[x].Zone);
          console.log("in pavers person");
          printmap();
          pcounter++;

        }
        var pavercount = pcounter;
      }


      for (var x in bricksJSON) {
        var toCheck = bricksJSON[x].DonorName.toLowerCase();
        var descriptioncheck = bricksJSON[x].Personalization.toLowerCase();
        console.log(donorcount);
        if (donorcount === 1 && pavercount == 1) {
          var word1 = "null";
          var searchword = val.split(" ");
          for (i = 0; i < searchword.length; i++) {
            if (!searchword[i].includes("&") && searchword[i].trim() != "") {
              if (toCheck.includes(searchword[i].trim()) && bricksJSON[x].Personalization != word1) {
                word1 = bricksJSON[x].Personalization;
                var text1 = document.createTextNode(bricksJSON[x].DonorName);
                var text2 = document.createTextNode(bricksJSON[x].Personalization);
                var text3 = document.createTextNode(bricksJSON[x].Zone);
                console.log("in bricks don+array");
                printmap();
                dpcounter++;

              } else if (descriptioncheck.includes(searchword[i]) && bricksJSON[x].Personalization != word1) {
                word1 = bricksJSON[x].Personalization;
                var text1 = document.createTextNode(bricksJSON[x].DonorName);
                var text2 = document.createTextNode(bricksJSON[x].Personalization);
                var text3 = document.createTextNode(bricksJSON[x].Zone);
                console.log("in bricks don+array");
                printmap();
                dpcounter++;

              }
            }
            var totaldonorcount = dpcounter;
          }

        }
      }
      // if condition to check if the result is in the excel sheet and to print it in the table for the pavers
      for (var x in paversJSON) {
        var toCheck = paversJSON[x].DonorName.toLowerCase();
        var descriptioncheck = paversJSON[x].Personalization.toLowerCase();
        console.log(donorcount);
        if (donorcount === 1 && pavercount == 1) {
          var word1 = "null";
          var searchword = val.split(" ");
          for (i = 0; i < searchword.length; i++) {
            if (!searchword[i].includes("&") && searchword[i].trim() != "") {
              if (toCheck.includes(searchword[i].trim()) && paversJSON[x].Personalization != word1) {
                word1 = paversJSON[x].Personalization;
                var text1 = document.createTextNode(paversJSON[x].DonorName);
                var text2 = document.createTextNode(paversJSON[x].Personalization);
                var text3 = document.createTextNode(paversJSON[x].Zone);
                console.log("in bricks don+array");
                printmap();
                ppcounter++;

              } else if (descriptioncheck.includes(searchword[i]) && paversJSON[x].Personalization != word1) {
                word1 = paversJSON[x].Personalization;
                var text1 = document.createTextNode(paversJSON[x].DonorName);
                var text2 = document.createTextNode(paversJSON[x].Personalization);
                var text3 = document.createTextNode(paversJSON[x].Zone);
                console.log("in pavers don+array");
                printmap();
                ppcounter++;
              }
            }
            var totalpavercount = ppcounter;
          }

        }
      }

      var x = document.createElement("H1");
      if (totaldonorcount === 1 && totalpavercount === 1) {
        var count = document.createTextNode("No results found for  " + val + ". Please check your search terms and try again. ");
        x.appendChild(count);
        document.getElementById("results").appendChild(x);
      }
      //Function to print the map with respect to their zone numbers
      function printmap() {

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
  }
}
