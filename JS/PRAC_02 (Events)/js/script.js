// let txt = (document.querySelector(".text").style.color = "red");
// txt.style.color = "red";

// document.querySelectorAll(".text").forEach(function (txt) {
//   txt.style.color = "red";
// });

let block = document.querySelector(".block");
block.addEventListener("click", function () {
  block.classList.add("translate");
});
