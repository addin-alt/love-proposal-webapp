var confetti = {
  start: function () {
    const duration = 5 * 1000; // 5 seconds
    const end = Date.now() + duration;

    (function frame() {
      createConfettiParticle();
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  },
  stop: function () {}, // can add stop functionality if needed
};

function createConfettiParticle() {
  const confettiEl = document.createElement("div");
  confettiEl.innerText = "🎊";
  confettiEl.style.position = "fixed";
  confettiEl.style.left = Math.random() * 100 + "vw";
  confettiEl.style.top = "-30px";
  confettiEl.style.fontSize = Math.random() * 20 + 20 + "px";
  confettiEl.style.transform = `rotate(${Math.random() * 360}deg)`;
  confettiEl.style.transition = "transform 0.1s linear";
  confettiEl.style.zIndex = 9999;
  document.body.appendChild(confettiEl);

  let y = -30;
  const speed = Math.random() * 2 + 3; // px per frame
  const rotateSpeed = Math.random() * 5 + 2; // degrees per frame

  function fall() {
    y += speed;
    const rotate =
      parseFloat(
        confettiEl.style.transform.replace("rotate(", "").replace("deg)", "")
      ) + rotateSpeed;
    confettiEl.style.transform = `rotate(${rotate}deg)`;
    confettiEl.style.top = y + "px";

    if (y < window.innerHeight + 50) {
      requestAnimationFrame(fall);
    } else {
      confettiEl.remove();
    }
  }

  requestAnimationFrame(fall);
}
