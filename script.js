import { Effects } from "./effect.js";

window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  // Set canvas dimensions
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const effect = new Effects(canvas);

  let runningConstillation = false;

  const constellationDisplay = document.getElementById(
    "constillationContainer"
  );
  const clickMeButton = document.getElementById("click_event_container");
  const click_me_button = document.getElementById("clickMe_button");

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    effect.width = canvas.width;
    effect.height = canvas.height;
  });

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctr.clearRect(0, 0, scrollingTextCanvas.width, scrollingTextCanvas.height);
    effect.handleBallParticles(ctx); // Update effects
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("click", (e) => {
    const buttonId = e.target.id;
    const clickMeButtonId = "clickMe_button";

    if (buttonId === clickMeButtonId) {
      constellationDisplay.style.display = "block";
      clickMeButton.style.display = "none";

      runningConstillation = true;
    }
  });

  window.addEventListener("keydown", (e) => {
    console.log(`Key pressed: ${e.key}`);

    if (runningConstillation == true && e.key === "Escape") {
      runningConstillation = false;
      constellationDisplay.style.display = "none";
      clickMeButton.style.display = "block";
      click_me_button.textContent = "Drag & Drop Me...";
    }
  });

  window.dragStartHandler = function (ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
  };

  window.dragOverHandler = function (ev) {
    ev.preventDefault();
  };

  window.dropHandler = function (ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    if (draggedElement) {
      ev.target.innerHTML = ""; // Clear previous content
        ev.target.appendChild(draggedElement);
        if (click_me_button) {
            click_me_button.style.display = "none"
        }


      const messageContainer = document.createElement("div");
      messageContainer.id = "text_display";
      const message = document.createElement("h3");

      message.textContent = "Happy Mothers Day!....";
      message.style.fontSize = "20px";
        message.style.color = "blue";
        messageContainer.appendChild(message)
      ev.target.appendChild(message);
    }
  };
});
