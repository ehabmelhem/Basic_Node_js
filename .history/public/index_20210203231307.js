let form = document.getElementById("form");
let text = document.getElementById("text");
let counter = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (text.value !== "") {
    fetch("/add-elment")
      .then((r) => r.json())
      .then((data) => {});
  }
});
