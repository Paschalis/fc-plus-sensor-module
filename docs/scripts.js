// Add functionality for videos, if needed
document.addEventListener("DOMContentLoaded", () => {
    const video1 = document.getElementById("video1");
    const video2 = document.getElementById("video2");
  
    // Example: Log a message when a video starts playing
    video1.addEventListener("play", () => {
      console.log("Video 1 is playing");
    });
  
    video2.addEventListener("play", () => {
      console.log("Video 2 is playing");
    });
  });
  