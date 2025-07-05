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


    // For Carousel, mute skipped carousel videos
    const evinCarousel = document.getElementById("evinCarousel");
    evinCarousel.addEventListener("slid.bs.carousel", function () {
      // stop previous 'from' slide's video
      // Get all videos inside the carousel
      const videos = evinCarousel.querySelectorAll("video");

      videos.forEach((video) => {
        if (!video.closest(".carousel-item").classList.contains("active")) {
          video.pause();         // Pause non-active videos
          // video.currentTime = 0; // (optional) rewind to start
          video.muted = true;    // Mute non-active videos
        } else {
          video.muted = false;   // (optional) unmute active video
          video.play();      // (optional) auto-play current one
        }
      });
    });
  });
