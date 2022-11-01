const fields = document.querySelectorAll(".key");

window.addEventListener("keydown", (e) => {
  console.log(e);
  fields[0].innerHTML =
    (e.key === " " ? "Space" : e.key) + "<small>event.key</small>";
  fields[1].innerHTML = e.keyCode + "<small>event.keyCode</small>";
  fields[2].innerHTML = e.code + "<small>event.code</small>";
});
