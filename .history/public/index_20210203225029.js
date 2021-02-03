let form = document.getElementById("form");
let text = document.getElementById("text");
let showBtn = document.getElementById("show");

form.addEventListener("submit",  (e) => {
  e.preventDefault();
  if (text.value !== "") {

    fetch(`/add-elemnt?element=${text.value}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  }
});

showBtn.addEventListener("click", () => {
  fetch("/send-all-elments")
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
    });
});
