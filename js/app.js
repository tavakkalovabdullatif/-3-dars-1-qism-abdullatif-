const elImg = document.getElementById("img");
document.querySelectorAll("#btn").forEach((el) => {
  el.addEventListener("click", (evt) => {
    elImg.src = `/images/${evt.target.innerText}.png`;
  });
});

// const elFlash = document.getElementById("flash");
// document.addEventListener("mousemove", (evt) => {
//   elFlash.style.cssText = `
//   left: ${evt.clientX}px;
//   top: ${evt.clientY}px;
//   `;
// });
const elFlash = document.getElementById("flash");
const elBtn = document.getElementById("click");

let isActive = false;

elBtn.addEventListener("click", () => {
  isActive = true;
});

document.addEventListener("mousemove", (evt) => {
  if (!isActive) return;
  elFlash.style.cssText = `
    left: ${evt.clientX}px;
    top: ${evt.clientY}px;
  `;
});
