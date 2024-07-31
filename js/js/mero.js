const btn = document.getElementById("btn");
const myDiv = document.getElementById("myDiv");

btn.addEventListener("dblclick", () => {
  myDiv.style.backgroundColor = "red";
    document.body.style.backgroundColor = "green";
});
btn.addEventListener("mouseover", () => {
  //   myDiv.style.backgroundColor = "red";
  document.body.style.backgroundColor = "green";
});

myDiv.addEventListener("mouseover", () => {
  alert("Mouse Over Vayo");
});
