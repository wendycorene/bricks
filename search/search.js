
function populateResults() {
    document.getElementById("results").innerHTML = "";
  var val = document.getElementById("search").value;
  console.log(val);
  if(val != ""){
    var bcounter = 1;
    var pcounter=1;
  for (var x in bricksJSON)
    {
      var toCheck = bricksJSON[x].DonorName.toLowerCase();      
      if (toCheck.includes(val)){
      var node = document.createElement("p");  
      var textnode = document.createTextNode(bcounter+ ") " + toCheck);
      node.appendChild(textnode);                             
      document.getElementById("results").appendChild(node);      
      bcounter++; 
      }
      var brickscount=bcounter;
     
    }
    for (x in paversJSON)
    {
        var toCheck = paversJSON[x].DonorName.toLowerCase();
        if (toCheck.includes(val))
        {
        var node = document.createElement("p");  
        var textnode = document.createTextNode(pcounter+ ") " + toCheck);
        node.appendChild(textnode);                             
        document.getElementById("results").appendChild(node);      
        pcounter++; 
      }
    
    }
    // var paverscounter=bcounter+brickscount;
    // var count = document.createTextNode("Total "+paverscounter+" results found"+brickscount+" "+pcounter);
    // document.getElementById("results").appendChild(count);   
  } }