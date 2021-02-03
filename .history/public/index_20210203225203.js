let form = document.getElementById("form");
let text = document.getElementById("text");
let showBtn = document.getElementById("show");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (text.value !== "") {
    let name = text.value;
    text.value = "";
    fetch(`/add-elemnt?element=${name}`)
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
      data.map((elm) => {
        var h1 = document.createElement("h5");
        h1.innerText=h5
      });
    });
});
