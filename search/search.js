function populateResults() {
    document.getElementById("results").innerHTML = "";
    // Convert the search result to lower case
  var val = document.getElementById("search").value.toLowerCase();
  var res=val.slice(-1);
  if(res!=0)
  {
  if(val != ""){
    // set counter to 1
    var counter = 1;
    // create table
    var table = document.createElement('table');
    // Setting attributes rows of table where the results are extracted from xcel file in columns
    var tr = document.createElement('tr');   
    var td1 = document.createElement('th');
    var td2 = document.createElement('th');
    var td3 = document.createElement('th');
    var td4 = document.createElement('th');
    // Setting rows of the tables header
    var text0 = document.createTextNode('S.No');
    var text1 = document.createTextNode('Donor Name');
    var text2 = document.createTextNode( 'Personalization');
    var text3 = document.createTextNode( 'Zone');
    // retriving data and assigning to variables
    td1.appendChild(text0);
    td2.appendChild(text1);
    td3.appendChild(text2);
    td4.appendChild(text3);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    
    table.appendChild(tr);
      var node = document.createElement("p");  
      node.appendChild(table);             
      document.getElementById("results").appendChild(node); 
  for (var x in bricksJSON)
    {
      // Convert the search result to lower case
      var toCheck = bricksJSON[x].DonorName.toLowerCase(); 
        if (toCheck.includes(val))
      {
    var tr = document.createElement('tr');   
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var text1 = document.createTextNode( bricksJSON[x].DonorName);
    var text2 = document.createTextNode( bricksJSON[x].Personalization);
    var text3 = document.createTextNode( bricksJSON[x].Zone);
    var text0 = document.createTextNode( counter);
    var link = document.createTextNode( bricksJSON[x].DonorName); 
    td1.appendChild(text0);
    td2.appendChild(text1);
    td3.appendChild(text2);
    td4.appendChild(text3);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
      var node = document.createElement("p");  
      // p.href="www.google.com"
      // var textnode = document.createTextNode(counter+ ") " + toCheck+ "  "+ bricksJSON[x].Zone);
      node.appendChild(table);             
      document.getElementById("results").appendChild(node); 
      counter++; 
      }
     
      var brickscount1=counter;
    }
      for (var x in bricksJSON)
    {
// Convert the search result to lower case
      var descriptioncheck = bricksJSON[x].Personalization.toLowerCase();         
      if (descriptioncheck.includes(val)){
        var tr = document.createElement('tr');   
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var text0 = document.createTextNode( brickscount1);
        var text1 = document.createTextNode( bricksJSON[x].DonorName);
        var text2 = document.createTextNode( bricksJSON[x].Personalization);
        var text3 = document.createTextNode( bricksJSON[x].Zone);
        td1.appendChild(text0);
        td2.appendChild(text1);
        td3.appendChild(text2);
        td4.appendChild(text3);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        table.appendChild(tr);
      var node = document.createElement("p");  
      // var textnode = document.createTextNode(brickscount1+ ") " + descriptioncheck+" "+bricksJSON[x].Zone);
      node.appendChild(table);                             
      document.getElementById("results").appendChild(node);     
 
      brickscount1++; 
      }
      var paverscount=brickscount1;
     
    }
    for (x in paversJSON)
    {
      // Convert the search result to lower case
        var toCheck = paversJSON[x].DonorName.toLowerCase();
        if (toCheck.includes(val))
        {
          var tr = document.createElement('tr');   
          var td1 = document.createElement('td');
          var td2 = document.createElement('td');
          var td3 = document.createElement('td');
          var td4 = document.createElement('td');
          var text0 = document.createTextNode( paverscount);
          var text1 = document.createTextNode( paversJSON[x].DonorName);
          var text2 = document.createTextNode( paversJSON[x].Personalization);
          var text3 = document.createTextNode( paversJSON[x].Zone);
          td1.appendChild(text0);
          td2.appendChild(text1);
          td3.appendChild(text2);
          td4.appendChild(text3);
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
       
          table.appendChild(tr);
        var node = document.createElement("p");  
        // var textnode = document.createTextNode(paverscount+ ") " + toCheck+" "+paversJSON[x].Zone);
        node.appendChild(table);                             
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
          var tr = document.createElement('tr');   
          var td1 = document.createElement('td');
          var td2 = document.createElement('td');
          var td3 = document.createElement('td');
          var td4 = document.createElement('td');
          var text0 = document.createTextNode( Personalizationpaverscount);
          var text1 = document.createTextNode( paversJSON[x].DonorName);
          var text2 = document.createTextNode( paversJSON[x].Personalization);
          var text3 = document.createTextNode( paversJSON[x].Zone);
          td1.appendChild(text0);
          td2.appendChild(text1);
          td3.appendChild(text2);
          td4.appendChild(text3);
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          table.appendChild(tr);
          
        var node = document.createElement('a');  
        node.setAttribute('class', 'signature');
        node.setAttribute('href', 'secondpage/navigatepage.html');

        // var textnode = document.createTextNode(Personalizationpaverscount+ ") " + PersonalizationCheck+paversJSON[x].Zone);
        node.appendChild(table);                      
        var a= document.getElementById("results").appendChild(node)      
     console.log(a)
        Personalizationpaverscount++; 
      }
      
    
    }
     var paverscounter=Personalizationpaverscount-1;
     var x = document.createElement("H1");
    var count = document.createTextNode("Total "+paverscounter+" results found for word  "+val);
    x.appendChild(count);
    document.getElementById("results").appendChild(x);   
  } }}