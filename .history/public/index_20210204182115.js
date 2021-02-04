let form = document.getElementById("form");
let text = document.getElementById("text");
let root = document.getElementById("root");
let counter = 0;
form.addEventListener("submit", () => {
  let input = text.value;
  if (input !== "") {
    fetch(`/add-elment?counter=${counter}&text=${input}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  }
});
