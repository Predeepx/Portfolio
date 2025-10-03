//nav scrool 
window.addEventListener("scroll", function () {
  let header = document.getElementsByClassName("header")[0];
  if (window.scrollY > 80) {
    header.classList.add("header-scorled");
  } else {
    header.classList.remove("header-scorled");
  }
});

