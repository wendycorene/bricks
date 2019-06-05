// function to show the image of the map by hiding the search results table when a donor clicks on the respective search result row
// if condition checks if there is any matching image for the search result and displays the image or else display nothing on the page
// Designed and implemented by Priyanka Bonam
function showImage() {
  var x = document.getElementById("results");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var str = event.target.parentElement.childNodes[2].innerHTML.replace(/\s/g, "").concat(".jpg");
  var imgSource = document.getElementById("outputImage");
  imgSource.setAttribute("width", 1000, "margin-left", 1000, "border-width", 100);
  imgSource.setAttribute("src", "img/Maps/" + str);
  // storing the the personalization in variable "p" when donor clicks on the result
  var p = event.target.parentElement.childNodes[1].innerHTML;
  var nameOnBrick = event.target.parentElement.childNodes[1].innerText.split("<td>").join("").split("\n").join("<br>");
  document.getElementById("brick").innerHTML = nameOnBrick;
  document.getElementById("brick").style.display = "block";
  //for loop to check if the results are present in "x"
  //if condition checks the variable "p" when donor clicks on a result 
  //and calls the inscription line by line & prints the inscription on the brick if the result is present in the bricksJSON 
  for (x in bricksJSON) {
    if (p == bricksJSON[x].Personalization) {
      console.log(p);
      document.getElementById("brick").style.padding = "50px";
      document.getElementById("brick").innerHTML = "<br/>";
      document.getElementById("brick").innerHTML = bricksJSON[x].Line1.toString().toUpperCase() + "<br />";
      document.getElementById("brick").innerHTML += bricksJSON[x].Line2.toString().toUpperCase() + "<br />";
      document.getElementById("brick").innerHTML += bricksJSON[x].Line3.toString().toUpperCase();

    }
  }

  //for loop to check if the results are present in "x"
  //if condition checks the variable "p" when donor clicks on a result 
  //and calls the inscription line by line & prints the inscription on the brick if the result is present in the paversJSON 
  for (x in paversJSON) {
    if (p == paversJSON[x].Personalization) {
// toString().toUpperCase()
      document.getElementById("brick").innerHTML = "\n";
      document.getElementById("brick").innerHTML = paversJSON[x].Line1.toString().toUpperCase()+ "<br />";
      console.log(paversJSON[x].Line1);
      if (typeof paversJSON[x].Line3 !== "undefined") {
        document.getElementById("brick").innerHTML += paversJSON[x].Line2.toString().toUpperCase() + "<br />";
      }
      

      if (typeof paversJSON[x].Line3 !== "undefined") {
        document.getElementById("brick").innerHTML += paversJSON[x].Line3.toString().toUpperCase()+ "<br />";
      }
      // Generally personalization is of 6 lines and the donor's personalization may not be 6 six lines it can be of 2 0r 3 lines also
      // if condition to leave the brick blank if the personalization is not of six lines 
      if (typeof paversJSON[x].Line4 !== "undefined") {
        document.getElementById("brick").innerHTML += paversJSON[x].Line4.toString().toUpperCase() + "<br />";
      }
      if (typeof paversJSON[x].Line5 !== "undefined") {
        document.getElementById("brick").innerHTML += paversJSON[x].Line5.toString().toUpperCase() + "<br />";
      }
      if (typeof paversJSON[x].Line6 !== "undefined") {
        document.getElementById("brick").innerHTML += paversJSON[x].Line6.toString().toUpperCase()+ "<br />";
      }
    }
  }
  document.getElementById("brick").style.display = "block";
}
