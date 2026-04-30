document.addEventListener("DOMContentLoaded", function () {

  const menu = document.querySelector(".menu");
  const hamburger = document.getElementById("hamburger");

  // 🔴 proteção contra erro silencioso
  if (!menu || !hamburger) {
    console.error("Menu ou hamburger não encontrado");
    return;
  }

  // ✅ toggle menu
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // ✅ fechar menu ao clicar em link
  document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });

  // ✅ botão maps
  function abrirMaps() {
    const confirmar = confirm(
      "Você será direcionado ao Google Maps para visualizar as avaliações da clínica."
    );

    if (confirmar) {
      window.open("https://www.google.com/maps", "_blank");
    }
  }

  window.abrirMaps = abrirMaps;

  // ✅ animação de sections
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));

});
