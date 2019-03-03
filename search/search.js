
function populateResults() {
    document.getElementById("results").innerHTML = "";
  var val = document.getElementById("search").value.toLowerCase();
  // console.log(val);
  if(val != ""){
    var counter = 1;
   
  for (var x in bricksJSON)
    {
      var toCheck = bricksJSON[x].DonorName.toLowerCase(); 
        if (toCheck.includes(val))
      {
  
      var node = document.createElement("p");  
      var textnode = document.createTextNode(counter+ ") " + toCheck+ "  "+ bricksJSON[x].Zone);
      node.appendChild(textnode);                             
      document.getElementById("results").appendChild(node);      
      counter++; 
      }
     
      var brickscount1=counter;
    }
      for (var x in bricksJSON)
    {

      var descriptioncheck = bricksJSON[x].Personalization.toLowerCase();         
      if (descriptioncheck.includes(val)){
      var node = document.createElement("p");  
      var textnode = document.createTextNode(brickscount1+ ") " + descriptioncheck+" "+bricksJSON[x].Zone);
      node.appendChild(textnode);                             
      document.getElementById("results").appendChild(node);      
      brickscount1++; 
      }
      var paverscount=brickscount1;
     
    }
    for (x in paversJSON)
    {
        var toCheck = paversJSON[x].DonorName.toLowerCase();
        if (toCheck.includes(val))
        {
        var node = document.createElement("p");  
        var textnode = document.createTextNode(paverscount+ ") " + toCheck+" "+paversJSON[x].Zone);
        node.appendChild(textnode);                             
        document.getElementById("results").appendChild(node);      
        paverscount++; 
      }
      var Personalizationpaverscount=paverscount;
    
    }
    for (x in paversJSON)
    {
        var PersonalizationCheck = paversJSON[x].Personalization.toLowerCase();
        if (PersonalizationCheck.includes(val))
        {
        var node = document.createElement("p");  
        var textnode = document.createTextNode(Personalizationpaverscount+ ") " + PersonalizationCheck+paversJSON[x].Zone);
        node.appendChild(textnode);                             
        document.getElementById("results").appendChild(node);      
        Personalizationpaverscount++; 
      }
    
    }
     var paverscounter=Personalizationpaverscount-1;
     var x = document.createElement("H1");
    var count = document.createTextNode("Total "+paverscounter+" results found for word  "+val);
    x.appendChild(count);
    document.getElementById("results").appendChild(x);   
  } }