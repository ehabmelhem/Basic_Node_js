let h1 = document.createElement("h1");
// h1.innerText = "this is ehab";
let answer = fetch("/get-user-name");
console.log();
document.getElementsByTagName("body")[0].appendChild(h1);
