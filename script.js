document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const nextBtns = document.querySelectorAll(".nextBtn");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const answerPage = document.querySelector(".answer");
  const proposalPage = document.querySelector(".proposal");
  const bgMusic = document.getElementById("bgMusic");

  let currentPage = 0;
  pages[currentPage].classList.add("active");

  // Start music on first interaction
  document.body.addEventListener("click", () => {
    if (bgMusic.paused) bgMusic.play();
  });

  // Navigate pages
  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      pages[currentPage].classList.remove("active");
      currentPage++;
      if (currentPage < pages.length) {
        pages[currentPage].classList.add("active");
      }
    });
  });

  // Yes button
  yesBtn.addEventListener("click", () => {
    proposalPage.classList.remove("active");
    answerPage.classList.add("active");

    // trigger confetti
    if (confetti && typeof confetti.start === "function") {
      confetti.start();
    }
  });

  // No button escape trick (desktop + mobile)
  function moveNoButton() {
    const padding = 50; // so it doesn't go off screen
    const x = Math.random() * (window.innerWidth - padding);
    const y = Math.random() * (window.innerHeight - padding);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }

  // Desktop hover
  noBtn.addEventListener("mouseover", moveNoButton);
  // Mobile touch
  noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // prevent double activation
    moveNoButton();
  });
});

