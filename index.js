// Your code goes here
document.addEventListener("DOMContentLoaded", function () {
  
  const replaceText = document.querySelector("#text"); //or "p"
  replaceText.textContent = "This is really cool!";
});
console.log(
  "thigit ss console log fires when index.js loads before dom cntent loaded is trigered"
);
