
function populateResults() {
    document.getElementById("results").innerHTML = "";
  var val = document.getElementById("search").value;
  console.log(val);
  if(val != ""){
    var counter = 1;
    var pcounter=1;
  for (var x in bricksJSON)
    {
      var toCheck = bricksJSON[x].DonorName.toLowerCase();      
      if (toCheck.includes(val)){
      var node = document.createElement("p");  
      var textnode = document.createTextNode(counter+ ") " + toCheck);
      node.appendChild(textnode);                             
      document.getElementById("results").appendChild(node);      
      counter++; 
      }
      var brickscount=counter;
     
    }
    for (x in paversJSON)
    {
        var toCheck = paversJSON[x].DonorName.toLowerCase();
        if (toCheck.includes(val))
        {
        var node = document.createElement("p");  
        var textnode = document.createTextNode(brickscount+ ") " + toCheck);
        node.appendChild(textnode);                             
        document.getElementById("results").appendChild(node);      
        brickscount++; 
      }
    
    }
     var paverscounter=brickscount-1;
     var x = document.createElement("H1");
    var count = document.createTextNode("Total "+paverscounter+" results found for word  "+val);
    x.appendChild(count);
    document.getElementById("results").appendChild(x);   
  } }