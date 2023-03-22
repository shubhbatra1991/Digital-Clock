const clock = document.querySelector('.clock');


const tick = () => {
    
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
        <span> ${h}</span> :
        <span> ${m}</span> :
        <span> ${s}</span>
    `;
    clock.innerHTML = html;
};

setInterval(tick, 1000);

// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}