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
    if (typeof confetti === "function") {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  });

  // No button escape trick
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth * 0.6;
    const y = Math.random() * window.innerHeight * 0.6;
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });
});
