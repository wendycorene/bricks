
function populateResults() {
    document.getElementById("results").innerHTML = "";
  var val = document.getElementById("search").value.toLowerCase();
  var res=val.slice(-1);
  if(res!=0)
  {
  if(val != ""){
    var counter = 1;
    var table = document.createElement('table');
    table.setAttribute("id","rowCtr");
    var tr = document.createElement('tr');   
    var td1 = document.createElement('th');
    var td2 = document.createElement('th');
    var td3 = document.createElement('th');
    var td4 = document.createElement('th');
    var text0 = document.createTextNode('S.No');
    var text1 = document.createTextNode('Donor Name');
    var text2 = document.createTextNode( 'Personalization');
    var text3 = document.createTextNode( 'Zone');
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
      node.href='http://www.google.com';  
      node.textContent=table;
      node.appendChild(table);             
      document.getElementById("results").innerHTML.href='http://www.google.com'; 

  for (var x in bricksJSON)
    {
      var toCheck = bricksJSON[x].DonorName.toLowerCase();
      var doname=bricksJSON[x].DonorName.toLowerCase();
     
        if (toCheck.includes(val))
      {
        // if(doname!=toCheck) 
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
      node.appendChild(table);
      node.href="www.google.com";
      document.getElementById("results").appendChild(node); 
      counter++; 
      }}
     
      var brickscount1=counter;
    }
      for (var x in bricksJSON)
    {

      var descriptioncheck = bricksJSON[x].Personalization.toLowerCase();       
      var doname=bricksJSON[x].DonorName.toLowerCase();  
      if (descriptioncheck.includes(val)){
       if(!doname.includes(val)){
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
      }}
      var paverscount=brickscount1;
     
    }
    for (x in paversJSON)
    {
        var toCheck = paversJSON[x].DonorName.toLowerCase();
        var doname=paversJSON[x].DonorName.toLowerCase();
        if (toCheck.includes(val))
        {
          //  if(!doname.includes(val))
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
      }}
      var Personalizationpaverscount=paverscount;
    
    }
    for (x in paversJSON)
    {
        var PersonalizationCheck = paversJSON[x].Personalization.toLowerCase();
        var doname=paversJSON[x].DonorName.toLowerCase();
        if (PersonalizationCheck.includes(val))
        {
          if(!doname.includes(val))
          {
          var tr = document.createElement('tr');  
         //tr.setAttribute("onClick","data()");
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
       // var node = document.createElement("p");
        //node.setAttribute("href", "dhfsdhj");  
       // node.setAttribute("id","data");
        // var textnode = document.createTextNode(Personalizationpaverscount+ ") " + PersonalizationCheck+paversJSON[x].Zone);
        //node.appendChild(table);                             
        document.getElementById("results").appendChild(table);      
        Personalizationpaverscount++; 
      }}
    
    }

init();

     var paverscounter=Personalizationpaverscount-1;
     var x = document.createElement("H1");
    var count = document.createTextNode("Total "+paverscounter+" results found for word  "+val);
    x.appendChild(count);
    document.getElementById("results").appendChild(x);   
  } }}
  

  
  function init(){
  
      addRowHandlers('rowCtr');
  
  }
  
  function addRowHandlers(tableId) {
      if(document.getElementById(tableId)!=null){
          var table = document.getElementById(tableId);
          var rows = table.getElementsByTagName('tr');
          console.log(rows.length)
          var ocb = '';
          var area = '';
          var name = '';
          var cell = '';
          for ( var i = 1; i < rows.length; i++) {
  
              rows[i].i = i;
              rows[i].onclick = function() {
  
                  ocb = table.rows[this.i].cells[0].innerHTML;                
                  area = table.rows[this.i].cells[1].innerHTML;
                  name = table.rows[this.i].cells[2].innerHTML;
                  cell = table.rows[this.i].cells[3].innerHTML;
                  console.log('ocb: '+ocb+' area: '+area+' name: '+name+' cell: '+cell);
                  sessionStorage.setItem("name", name);
                  sessionStorage.setItem("cell", cell);
                  window.location.href = "secondpage.html";
                  
              };
          }
      }
  }