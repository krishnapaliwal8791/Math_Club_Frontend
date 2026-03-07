const messages = [
 "Booting Math Engine...",
 "Connecting to Backend...",
 "Loading Event Modules...",
 "Launching Portal..."
];

const bar = document.getElementById("progress-bar");
const text = document.getElementById("boot-log");
const percent = document.getElementById("percent");

let progress = 0;

const interval = setInterval(()=>{

 progress += 1;

 bar.style.width = progress + "%";
 percent.innerText = progress + "%";

 if(progress === 25) text.innerText = messages[1];
 if(progress === 50) text.innerText = messages[2];
 if(progress === 75) text.innerText = messages[3];

 if(progress >= 100){

   clearInterval(interval);

   document.getElementById("preloader").style.opacity="0";

   setTimeout(()=>{
     document.getElementById("preloader").remove();
   },500);

 }

},60);
particlesJS("particles-js", {
  particles: {
    number: {
      value: 60
    },
    color: {
      value: "#16c784"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#16c784",
      opacity: 0.35,
      width: 1
    },
    move: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: false
      }
    }
  },
  retina_detect: true
}); 