let form = document.getElementById("form");
let text = document.getElementById("text");
let showBtn = document.getElementById("show");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (text.value !== "") {
    await fetch(`/add-elemnt?element=${text.value}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
    text.value = "";
  }
});

showBtn.addEventListener("click", () => {
  fetch("/send-all-elments")
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
    });
});
