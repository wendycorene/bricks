<script>
$(document).ready(function(){
var url = "https://wendycorene.github.io/bricks/data/MultiSheetBrickData.xlsx";
/* set up async GET request */
var req = new XMLHttpRequest();
req.open("GET", url, true);
req.responseType = "arraybuffer";
req.onload = function(e) {
  var data = new Uint8Array(req.response);
  var workbook = XLSX.read(data, {type:"array"});
  var first_sheet_name = workbook.SheetNames[0];
  var bricks = workbook.Sheets[first_sheet_name];
  var bricksJSON = XLSX.utils.sheet_to_json(bricks,{raw:true});
  document.getElementById("wrapper").append('Bricks');
  for(var i=0; i< bricksJSON.length; i++){
    var node = document.createElement("p");
    var textnode = document.createTextNode(bricksJSON[i].DonorName+ " "+ bricksJSON[i].Personalization.replace(/\r|\n|"|/gm, "") +"      "  +bricksJSON[i].Zone+" "+bricksJSON[i].BrickNumber+" "+bricksJSON[i].Line1+" "+bricksJSON[i].Line2+" "+bricksJSON[i].Line3 );         // Create a text node
    node.appendChild(textnode);
    document.getElementById("wrapper").appendChild(node);
  }
  var second_sheet_name = workbook.SheetNames[1];
  var pavers = workbook.Sheets[second_sheet_name];
  var paversJSON = XLSX.utils.sheet_to_json(pavers,{raw:true});
  for(var i=0; i< paversJSON.length; i++){
    var node = document.createElement("p");
    var textnode = document.createTextNode(paversJSON[i].DonorName + "  " + paversJSON[i].Personalization.replace(/\r|\n|"|/gm, "") + " " +paversJSON[i].Zone+" "+paversJSON[i].BrickNumber );         // Create a text node
    node.appendChild(textnode);
    document.getElementById("wrapper").appendChild(node);
  }

 function myfunction() {
var nameChecked = document.getElementById("form_id").nodeValue;
  for (x in bricksJSON)
  {
    var toCheck = bricksJSON[x].DonorName.toLowerCase();
    if (toCheck.includes(nameChecked)){
      $('#wrapper')[0].innerHTML += JSON.stringify(bricksJSON[x].DonorName)
      + "<br>" + JSON.stringify(bricksJSON[x].Line1) + "<br>"
      + JSON.stringify(bricksJSON[x].Line2) + "<br>"
      + JSON.stringify(bricksJSON[x].Line3) + "<br><br>";
    }
  }
  for (x in paversJSON)
  {
    toCheck = paversJSON[x].DonorName.toLowerCase();
    if (toCheck.includes(nameChecked)){
      $('#wrapper')[0].innerHTML += JSON.stringify(paversJSON[x].DonorName)
      + "<br>" + JSON.stringify(paversJSON[x].Line1) + "<br>"
      + JSON.stringify(paversJSON[x].Line2) + "<br>"
      + JSON.stringify(paversJSON[x].Line3) + "<br>"
      + JSON.stringify(paversJSON[x].Line4) + "<br>"
      + JSON.stringify(paversJSON[x].Line5) + "<br>"
      + JSON.stringify(paversJSON[x].Line6) + "<br><br>";
    }
  }
}}
  req.send();

})
</script>
