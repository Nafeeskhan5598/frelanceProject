function myFunction() {
    var x = document.getElementById("toggle");
    if (x.className === "nav-item") {
      x.className += " responsive";
    } else {
      x.className = "nav-item";
    }
  

// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "all-item";
//     }
//   }