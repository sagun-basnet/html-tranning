// alert("asdf");
const bars = document.getElementById("btnBar");

const cross = document.getElementById("btnCross");

const sideBar = document.getElementById("sideBar");

bars.addEventListener("click", () => {
  sideBar.style.marginLeft = "0rem";
  bars.style.display = "none";
  cross.style.display = "block";
});
cross.addEventListener("click", () => {
  sideBar.style.marginLeft = "-16rem";
  bars.style.display = "block";
  cross.style.display = "none";
});
