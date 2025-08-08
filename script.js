// basic interactions
document.getElementById('year').textContent = new Date().getFullYear();

// download CV (example - replace url)
document.getElementById('downloadCV').addEventListener('click', () => {
  window.open('https://drive.google.com/file/d/1LTYi6kPEfVUq7kPzcsoqkbaglLKJ18oL/view?usp=sharing', '_blank');
});

// contact form handling (simple)
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){ alert('من فضلك املأ الحقول'); return; }
  // هنا تقدر تربط مع API أو Firebase - حالياً رسالة بسيطة:
  alert('تم إرسال الرسالة — شكرًا يا ' + name + ' 🤝');
  e.target.reset();
});

// dark / light toggle
const btn = document.getElementById('modeToggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  btn.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

// smooth nav
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',(e)=>{
    e.preventDefault();
    const id = a.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  });
});
