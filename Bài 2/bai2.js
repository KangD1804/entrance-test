
function makeLine(num) {

  var stars = "";
  for (var i = 0; i <= num; i++) {
    stars = stars + " *"
  }
  return stars;
}
  
function numberOneTriangle(num) {
  var stars = "";
  for (var i = 0; i < num; i++) {
    stars = stars + makeLine(i) + "\n";
  }
  console.log(stars)
}
  
numberOneTriangle(3);