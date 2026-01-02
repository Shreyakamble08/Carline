const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";

  menuBtn.children[0].style.transform =
    menuBtn.classList.contains("active") ? "rotate(45deg) translate(5px,5px)" : "none";
  menuBtn.children[1].style.opacity =
    menuBtn.classList.contains("active") ? "0" : "1";
  menuBtn.children[2].style.transform =
    menuBtn.classList.contains("active") ? "rotate(-45deg) translate(6px,-6px)" : "none";
});

/* Mobile dropdown toggle */
document.querySelectorAll(".mobile-dropdown-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const parent = btn.parentElement;
    const menu = btn.nextElementSibling;

    parent.classList.toggle("open");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });
});
