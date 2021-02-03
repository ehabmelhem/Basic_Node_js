let form = document.getElementById("form");
let text = document.getElementById("text");
let counter = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (text.value !== "") {
    fetch(`/add-elment?id=${counter}&text=${text.value}`)
      .then((r) => r.json())
      .then((data) => {
        // data.map((elm) => {
        //   var div = document.createElement("div");
        //   var h4 = document.createElement("h4");
        //   var btn = document.createElement("button");
        //   h4.innerText = elm.value;
        //   btn.innerText = "delet";
        //   btn.addEventListener("click", (e) => {
        //     div.remove();
        //   });
        //   div.appendChild(h4);
        //   div.appendChild(btn);
        //   document.getElementsByTagName("body")[0].appendChild(div);
        // });
     
    });
  }
});
