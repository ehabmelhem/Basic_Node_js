let form = document.getElementById("form");
let text = document.getElementById("text");
let root = document.getElementById("root");
let counter = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = text.value;
  if (input !== "") {
    fetch(`/add-elment?counter=${counter}&text=${input}`)
      .then((r) => r.json())
      .then((data) => {
        counter++;
        console.log(data);
      });
  
    }
});
