let h1 = document.createElement("h1");
// h1.innerText = "this is ehab";
fetch("/get-user-name")
  .then((r) => r.json())
  .then((data) => {
    console.log(data);
    h1.i
  });
document.getElementsByTagName("body")[0].appendChild(h1);
