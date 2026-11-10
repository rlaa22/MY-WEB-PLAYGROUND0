const mode = document.getElementById("mode");
mode.addEventListener("click", () => {
  document.body.classList.toggle("light");
  mode.textContent = document.body.classList.contains("light") ? "☾" : "◐";
});
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Expand learning flash cards with keyboard and pointer support.
document.querySelectorAll('.learn-card[role="button"]').forEach(card => {
  const toggle = () => {
    const open = card.getAttribute('aria-expanded') === 'true';
    card.setAttribute('aria-expanded', String(!open));
    const content = card.querySelector('.flash-content');
    if (content) content.hidden = open;
  };
  card.addEventListener('click', event => {
    if (event.target.closest('a, button')) return;
    toggle();
  });
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggle(); }
  });
});

document.querySelectorAll('.details-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const extra = button.closest('.project-info').querySelector('.project-extra');
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    extra.hidden = open;
    button.textContent = open ? 'التفاصيل ↓' : 'إخفاء التفاصيل ↑';
  });
});
