// Smooth fade-in animation for elements
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".left-panel, .feature-item");

  elements.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "all 0.6s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, i * 200);
  });
});

// Optional: click icon alert
document.querySelectorAll(".icon").forEach(icon => {
  icon.addEventListener("click", () => {
    alert("You clicked an icon!");
  });
});

