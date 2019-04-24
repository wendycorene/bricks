
function showImage()
{
  var x = document.getElementById("results");
  if (x.style.display == "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
  var str = event.target.parentElement.childNodes[3].innerHTML.replace(/\s/g, "").concat(".jpg");
  var imgSource = document.getElementById("outputImage");
  imgSource.setAttribute("width", 1000, "margin-left", 1000,"border-width", 100 );
  imgSource.setAttribute("src", "maps/"+str);
  // var p=event.target.parentElement.childNodes[2].innerHTML;
  var nameOnBrick = event.target.parentElement.childNodes[2].innerText.split("<td>").join("").split("\n").join("<br>");
  document.getElementById("brick").innerHTML = nameOnBrick;

  console.log(event.target.parentElement.childNodes[2].innerHTML);
  console.log(event.target.parentElement.childNodes[2].innerText);

  console.log(event.target.parentElement.childNodes[2].innerText.replace("<td>","").replace("\n","<br>"));
  console.log(event.target.parentElement.childNodes[2].innerText.split("<td>").join("").split("\n").join("<br>"));
  document.getElementById("brick").style.display = "block";
 
  for(x in bricksJSON)
  {
    if(p==bricksJSON[x].Personalization)
    {
      console.log(p);
      document.getElementById("brick").innerHTML="<br/>";
      document.getElementById("brick").innerHTML=bricksJSON[x].Line1+ "<br />";
      // document.write("\n");
      document.getElementById("brick").innerHTML+=bricksJSON[x].Line2+"<br />";
      // document.write("\n");
      document.getElementById("brick").innerHTML+=bricksJSON[x].Line3;
      console.log(bricksJSON[x].Line1);
    }
  }
  for(x in paversJSON)
  {
    if(p==paversJSON[x].Personalization)
    {
      
      document.getElementById("brick").innerHTML="\n";
      document.getElementById("brick").innerHTML=paversJSON[x].Line1+ "<br />";
      document.getElementById("brick").innerHTML+=paversJSON[x].Line2+"<br />";
      document.getElementById("brick").innerHTML+=paversJSON[x].Line3+ "<br />";
      console.log(paversJSON[x].Line5);
      console.log(typeof paversJSON[x].Line5);
      console.log(typeof "undefined");
       console.log(typeof paversJSON[x].Line4 !== "undefined");
      if(typeof paversJSON[x].Line4 !== "undefined")
      {
        document.getElementById("brick").innerHTML+=paversJSON[x].Line4+ "<br />";
        // paversJSON[x].Line4+ "<br />";
      }
      // else 
      // {
      //   document.getElementById("brick").innerHTML+=paversJSON[x].Line4+ "<br />";
      // }
    // if(paversJSON[x].Line5.trim()!=="")
    //   {
    //     document.getElementById("brick").innerHTML+=paversJSON[x].Line5+ "<br />";
    //   }
    //  if(paversJSON[x].Line6!=="undefined")
    //   {
    //     document.getElementById("brick").innerHTML+=paversJSON[x].Line6+ "<br />";
    //   }
      // document.getElementById("brick").innerHTML+=paversJSON[x].Line6;
      console.log("@"+paversJSON[x].Line4+"@");
    }}
  document.getElementById("brick").style.display = "block";
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
  if(val!= ""){
    var counter = 1;

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


    table.appendChild(tr);



  for (var x in bricksJSON)
    {
      var toCheck = bricksJSON[x].DonorName.toLowerCase();
      var doname=bricksJSON[x].DonorName.toLowerCase();
      if (toCheck.includes(val))
      {
        var node = document.createElement("p");
      node.textContent=table;
      node.appendChild(table);
        {       
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
  
    var text1 = document.createTextNode( bricksJSON[x].DonorName);
    var text2 = document.createTextNode( bricksJSON[x].Personalization);
    var text3 = document.createTextNode( bricksJSON[x].Zone);

    // var text4 = document.createTextNode( bricksJSON[x].Line1);
    // var text5 = document.createTextNode( bricksJSON[x].Line2);
    // var text6 = document.createTextNode( bricksJSON[x].Line3);
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
  
          tr.setAttribute("onclick", 'showImage(\"'+w+'")');
 
    table.appendChild(tr);
      var node = document.createElement("p");
      node.appendChild(table);
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

          tr.setAttribute("onclick", 'showImage(\"'+w+'")');

        table.appendChild(tr);
      var node = document.createElement("p");
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
          var w = text3.textContent.replace(" ","")+","+text2.textContent.replace(/\n|\r/g, "").replace(/\"/g, " ");
          tr.setAttribute("onclick", 'showImage(\"'+w+'")');
          table.appendChild(tr);
        var node = document.createElement("p");
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

          tr.setAttribute("onclick", 'showImage(\"'+w+'")');
          
          table.appendChild(tr);
          
        var node = document.createElement("p");
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
