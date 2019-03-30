var bricksJSON;
var paversJSON;
$(document).ready(function(){
var url = "https://wendycorene.github.io/bricks/MultiSheetBrickData.xlsx";
var req = new XMLHttpRequest();
req.open("GET", url, true);
req.responseType = "arraybuffer";
req.onload = function(e) {
  var data = new Uint8Array(req.response);
  var workbook = XLSX.read(data, {type:"array"});
  var first_sheet_name = workbook.SheetNames[0];
  var bricks = workbook.Sheets[first_sheet_name];
  bricksJSON = XLSX.utils.sheet_to_json(bricks,{raw:true});
  var second_sheet_name = workbook.SheetNames[1];
  var pavers = workbook.Sheets[second_sheet_name];
  paversJSON = XLSX.utils.sheet_to_json(pavers,{raw:true});  
  //document.getElementById("results").style.color="white";
  //document.getElementById("results").style.opacity=0.3; 

}
  req.send();
})
