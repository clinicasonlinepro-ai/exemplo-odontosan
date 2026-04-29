// MENU HAMBÚRGUER
function toggleMenu() {
  document.querySelector('.menu').classList.toggle('active');
}

// FECHAR MENU AO CLICAR EM UM LINK
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('active');
  });
});

// ANIMAÇÃO AO SCROLL (APARECER SUAVE)
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});

// POPUP GOOGLE MAPS (PROFISSIONAL)
function abrirMaps() {
  const confirmar = confirm(
    "Você será direcionado ao Google Maps para visualizar as avaliações da clínica."
  );

  if (confirmar) {
    window.open("https://www.google.com/maps", "_blank");
  }
}