function openNav() {
  console.log("hello", document.getElementById("hamburger-menu"));

  document.getElementById("hamburger-menu").classList.add("show");
  document.getElementById("body").classList.add("hamburger");
}

function closeNav() {
  console.log("hello", document.getElementById("hamburger-menu"));

  document.getElementById("hamburger-menu").classList.remove("show");
  document.getElementById("body").classList.remove("hamburger");
}
