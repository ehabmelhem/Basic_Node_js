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
          var div = document.createElement("div");
          var h4 = document.createElement("h4");
          var btn = document.createElement("button");
          h4.innerText = elm.text;
          btn.innerText = "delet";
          btn.addEventListener("click", (e) => {
            div.remove();
          });
          div.appendChild(h4);
          div.appendChild(btn);
          document.getElementById("root").appendChild(div);
        });
        console.log(data);
      });
  }
});

fetch("/get-elemnts")
  .then((r) => r.json())
  .then((data) => {
    data.elments.map((elm) => {
      var div = document.createElement("div");
      var h4 = document.createElement("h4");
      var btn = document.createElement("button");
      h4.innerText = elm.text;
      btn.innerText = "delet";
      btn.addEventListener("click", (e) => {
        div.remove();
      });
      div.appendChild(h4);
      div.appendChild(btn);
      document.getElementById("root").appendChild(div);
    });
  });
