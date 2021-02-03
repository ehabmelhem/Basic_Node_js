let form = document.getElementById("form");
let text = document.getElementById("text");
let root = document.getElementById("root");
let counter = 0;
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (text.value !== "") {
    await fetch(`/add-elment?id=${counter}&text=${text.value}`)
      .then((r) => r.json())
      .then((data) => {
        var div = document.createElement("div");
        var h4 = document.createElement("h4");
        var btn = document.createElement("button");
        h4.innerText = text.value;
        btn.innerText = "delete";
        btn.id = counter;
        btn.addEventListener("click", async (e) => {
          div.remove();
          await fetch(`/delete?id=${btn.id}`)
            .then((r) => r.json())
            .then((data) => {
              console.log(data);
            });
        });
        div.appendChild(h4);
        div.appendChild(btn);
        div.className = "div";
        counter++;
        document.getElementById("root").appendChild(div);
      });
    text.value = "";
  }
});

fetch("/get-elemnts")
  .then((r) => r.json())
  .then((data) => {
    data.elments.map((elm) => {
      var div = document.createElement("div");
      div.className = "div";
      var h4 = document.createElement("h4");
      var btn = document.createElement("button");
      h4.innerText = elm.text;
      btn.innerText = "delet";
      btn.id = counter;
      btn.addEventListener("click", async (e) => {
        div.remove();
        await fetch(`/delete?id=${btn.id}`)
          .then((r) => r.json())
          .then((data) => {
            console.log(data);
          });
      });
      div.appendChild(h4);
      div.appendChild(btn);
      counter++;
      document.getElementById("root").appendChild(div);
    });
  });
