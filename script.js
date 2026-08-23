document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll("nav a").forEach(a => a.removeAttribute("aria-current"));
    if (link.closest("nav")) link.setAttribute("aria-current", "page");
  });
});
