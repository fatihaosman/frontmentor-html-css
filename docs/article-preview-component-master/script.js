var btn = document.getElementsByTagName("button")[0];
var popup = document.getElementsByClassName("pop-up")[0];
var author = document.getElementsByClassName("author")[0];
var authormobile = document.getElementsByClassName("authour-mobile")[0];

// btn.addEventListener("click", function() {
//   var current = getComputedStyle(popup).visibility;

//   if (current === "hidden") {
//     popup.style.visibility = "visible";
//   } else {
//     popup.style.visibility = "hidden";
//   }
// });

btn.addEventListener("click", function() {
  if (window.innerWidth < 600) {
    // 👇 Mobile behavior
    if (authormobile.style.display === "none" || authormobile.style.display === "") {
      authormobile.style.display = "flex"; // show mobile section
      author.style.display = "none";       // hide desktop author
    } else {
      authormobile.style.display = "none";
      author.style.display = "flex";
    }
  } else {
    // 👇 Desktop behavior
    if (popup.style.visibility === "hidden" || popup.style.visibility === "") {
      popup.style.visibility = "visible";
    } else {
      popup.style.visibility = "hidden";
    }
  }
});

window.addEventListener("resize", function() {
  if (window.innerWidth >= 600) {
    authormobile.style.display = "none";
    author.style.display = "flex";
    popup.style.visibility = "visible";
    } 
    // if( window.innerWidth >= 600 && authormobile.style.display === "flex"  ){
    //   authormobile.style.display = "none";
    //   author.style.display = "flex";
    //   popup.style.visibility = "visible";
    // }
  else {
    popup.style.visibility = "hidden";
  }
});


