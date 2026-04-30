document.addEventListener("DOMContentLoaded", function () {

  const menu = document.querySelector(".menu");
  const hamburger = document.getElementById("hamburger");

  // proteção
  if (!menu || !hamburger) {
    console.error("Menu ou hamburger não encontrado");
    return;
  }

  // ✅ abrir/fechar menu
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // ✅ scroll suave + fechar menu
  document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", function (e) {

      const targetId = this.getAttribute("href");

      // só aplica scroll suave em links internos
      if (targetId.startsWith("#")) {
        e.preventDefault();

        const target = document.querySelector(targetId);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }

      // fecha menu no mobile
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

  // ✅ animação das sections
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
