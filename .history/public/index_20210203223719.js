let form = document.getElementById("form");
let text=document.getElementById("text");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(text.value!==""){
      fetch("/add-elemnt").then(r=>r.json())
  }
});
