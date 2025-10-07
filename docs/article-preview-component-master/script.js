var btn = document.getElementsByTagName("button")[0];
var popup = document.getElementsByClassName("pop-up")[0];

btn.addEventListener("click", function() {
  var current = getComputedStyle(popup).visibility;

  if (current === "hidden") {
    popup.style.visibility = "visible";
  } else {
    popup.style.visibility = "hidden";
  }
});
