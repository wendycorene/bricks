
function showImage(){

  var x = document.getElementById("results");
  if (x.style.display == "none") {
    x.style.display = "block";
    // console.log(x.style.display);
  } else {
    x.style.display = "none";
  }
  var str = event.target.parentElement.childNodes[3].innerHTML.replace(/\s/g, "").concat(".jpg");
  var imgSource = document.getElementById("outputImage");
  imgSource.setAttribute("width", 1000, "margin-left", 1000,"border-width", 100 );
  imgSource.setAttribute("src", "maps/"+str);
  // var brickd=document.getElementById("brickimage");
  // brickd.setAttribute("width", 400, "height", 228,"padding",200);
  // brickd.setAttribute("src", "brick.jpg");
  // var strdata=event.target.parentElement.childNodes[2].innerHTML;
  
  document.getElementById("brick").innerHTML = event.target.parentElement.childNodes[2].innerHTML;
  document.getElementById("brick").style.display = "block";
  // lines.innerText=strdata;

  // brickd.innerText=strdata;
}

function populateResults() {

  var x = document.getElementById("results");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

    document.getElementById("results").innerHTML = "";
  var val = document.getElementById("search").value.toLowerCase();
  var res=val.slice(-1);
  if(res!=0)
  {
  if(val != ""){
    var counter = 1;
    var anchorElement = document.createElement("a");
    var table = document.createElement('table');
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
    anchorElement.appendChild(tr);
    table.appendChild(anchorElement);
    // table.appendChild(tr);


  for (var x in bricksJSON)
    {
      var toCheck = bricksJSON[x].DonorName.toLowerCase();
      var doname=bricksJSON[x].DonorName.toLowerCase();

        if (toCheck.includes(val))
      {

        var node = document.createElement("p");
      node.textContent=table;
      node.appendChild(table);
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
    var w = text3.textContent.replace(" ","")+","+text2.textContent.replace(/\n|\r/g, "").replace(/\"/g, " ");
    console.log(w.trim());
    var anchorElement = document.createElement("a");
          anchorElement.setAttribute("style", "display:block;");
          anchorElement.setAttribute("onclick", 'showImage(\"'+w+'")');
    anchorElement.appendChild(tr);
    table.appendChild(anchorElement);
    // table.appendChild(tr);
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
        var w = text3.textContent.replace(" ","")+","+text2.textContent.replace(/\n|\r/g, "").replace(/\"/g, " ");
    var anchorElement = document.createElement("a");
          anchorElement.setAttribute("style", "display:block;");
          anchorElement.setAttribute("onclick", 'showImage(\"'+w+'")');
        anchorElement.appendChild(tr);
        table.appendChild(anchorElement);
      var node = document.createElement("p");
      // var textnode = document.createTextNode(brickscount1+ ") " + descriptioncheck+" "+bricksJSON[x].Zone);
      node.appendChild(table);
      document.getElementById("results").appendChild(node);
      console.log(text3)
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
          var w = text3.textContent.replace(" ","")+","+text2.textContent.replace(/\n|\r/g, "").replace(/\"/g, " ");
    var anchorElement = document.createElement("a");
          anchorElement.setAttribute("style", "display:block;");
          anchorElement.setAttribute("onclick", 'showImage(\"'+w+'")');
          anchorElement.appendChild(tr);
          table.appendChild(anchorElement);
          // table.appendChild(tr);
          console.log(text3)
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
          var w = text3.textContent.replace(" ","")+","+text2.textContent.replace(/\n|\r/g, "").replace(/\"/g, " ");
    var anchorElement = document.createElement("a");
          anchorElement.setAttribute("style", "display:block;");
          anchorElement.setAttribute("onclick", 'showImage(\"'+w+'")');
          anchorElement.appendChild(tr);
          table.appendChild(anchorElement);
          // table.appendChild(tr);
          console.log(text3)
        var node = document.createElement("p");
        // var textnode = document.createTextNode(Personalizationpaverscount+ ") " + PersonalizationCheck+paversJSON[x].Zone);
        node.appendChild(table);
        document.getElementById("results").appendChild(node);
        Personalizationpaverscount++;
      }}

    }
     var paverscounter=Personalizationpaverscount-1;
     var x = document.createElement("H1");
    var count = document.createTextNode("Total "+paverscounter+" results found for word  "+val);
    x.appendChild(count);
    document.getElementById("results").appendChild(x);
  } }}
