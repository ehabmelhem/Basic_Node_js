let form = document.getElementById("form");
let text = document.getElementById("text");
let root = document.getElementById("root");
let counter = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (text.value !== "") {
    fetch(`/add-elment?id=${counter}&text=${text.value}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  }
});

fetch("/get-elemnts")
  .then((r) => r.json())
  .then((data) => {});
