// Modal helpers
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".modal__close");
const okBtn = document.querySelector(".modal__ok");

function openModal() {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

// Cerrar modal con botones / fondo / ESC
closeBtn.addEventListener("click", closeModal);
okBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Form: mostrar modal y limpiar
const form = document.getElementById("reviewForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.reset();
  openModal();
  // autocerrar tras 2.8s
  setTimeout(closeModal, 2800);
});

// (Opcional) Si quieres que al hacer click en un producto,
// se prepare un mensaje y redirija al WhatsApp global,
// puedes descomentar lo siguiente:
/*
document.querySelectorAll('.product').forEach(card=>{
  card.addEventListener('click', ()=>{
    const name = card.querySelector('.product__title')?.textContent?.trim() || 'Producto';
    const msg = encodeURIComponent(`Hola HESED, estoy interesad@ en el: ${name} 🌿`);
    window.open(`https://wa.me/573107764463?text=${msg}`, '_blank');
  });
});
*/
