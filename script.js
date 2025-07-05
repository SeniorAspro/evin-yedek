document.addEventListener("DOMContentLoaded", () => {
    // const btn = document.querySelector(".btn-start");
    // let heartInterval;

    // btn.addEventListener("mouseenter", () => {
    //   heartInterval = setInterval(() => {
    //     // Cycle class name to force restart
    //     btn.classList.remove("heart-flying");
    //     void btn.offsetWidth; // force reflow
    //     btn.classList.add("heart-flying");
    //   }, 1000); // repeat every 1 sec
    // });

    // btn.addEventListener("mouseleave", () => {
    //   clearInterval(heartInterval);
    //   btn.classList.remove("heart-flying");
    // });

    const toggleBtn = document.getElementById("toggle-music");
    const musicZone = document.getElementById("music-zone");
  
    if (toggleBtn && musicZone) {
      toggleBtn.addEventListener("click", () => {
        const isVisible = musicZone.style.display === "block";
        musicZone.style.display = isVisible ? "none" : "block";
      });
    }

    const select = document.getElementById("playlist-select");
    const iframe = document.querySelector("#music-zone iframe");

    if (select && iframe) {
      select.addEventListener("change", () => {
        iframe.src = select.value;
      });
    }

    const player = document.getElementById('music');
    player.currentTime = localStorage.getItem('musicTime') || 0;

    setInterval(() => {
      localStorage.setItem('musicTime', player.currentTime);
    }, 1000);
  });
