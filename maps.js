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
  imgSource.setAttribute("src", "img/Maps/"+str);
  var p=event.target.parentElement.childNodes[2].innerHTML;
  var nameOnBrick = event.target.parentElement.childNodes[2].innerText.split("<td>").join("").split("\n").join("<br>");
  document.getElementById("brick").innerHTML = nameOnBrick;
  document.getElementById("brick").style.display = "block";
  
  for(x in bricksJSON)
  {
    if(p==bricksJSON[x].Personalization)
    {
      console.log(p);
      document.getElementById("brick").innerHTML="<br/>";
      document.getElementById("brick").innerHTML=bricksJSON[x].Line1+ "<br />";
      document.getElementById("brick").innerHTML+=bricksJSON[x].Line2+"<br />";
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
      }
      if(typeof paversJSON[x].Line5 !== "undefined")
      {
        document.getElementById("brick").innerHTML+=paversJSON[x].Line5+ "<br />";
      }
      if(typeof paversJSON[x].Line6 !== "undefined")
      {
        document.getElementById("brick").innerHTML+=paversJSON[x].Line6+ "<br />";
      }
    }}
  document.getElementById("brick").style.display = "block";
}

