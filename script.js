
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#register-form');
  const msg = document.querySelector('#form-msg');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    msg.innerHTML = `Teşekkürler, ${data.name || "veli"}! Başvurunuz alındı. Size e‑posta ile dönüş yapacağız.`;
    msg.style.display = 'block';
    form.reset();
  });
});
