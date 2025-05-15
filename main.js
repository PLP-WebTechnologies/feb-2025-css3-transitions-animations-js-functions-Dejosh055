
const startBtn = document.querySelector("#startBtn")
const stopBtn = document.querySelector("#stopBtn")
const Animate = document.querySelector(".animation")


startBtn.addEventListener("click",()=>{
Animate.style.animationPlayState = "running";
})

stopBtn.addEventListener("click",()=>{
Animate.style.animationPlayState = "paused";
})