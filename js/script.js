// Toggle menu untuk mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const menuOverlay = document.querySelector('.menu-overlay');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});

// Menutup menu saat overlay diklik
menuOverlay.addEventListener('click', () => {
  nav.classList.remove('active');
  document.body.classList.remove('menu-open');
});

// Menutup menu saat link diklik
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
      
      // Tutup menu mobile jika terbuka
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    }
  });
});

// Animasi untuk elemen saat di-scroll
function revealOnScroll() {
  const elements = document.querySelectorAll('.section, .card, .founder-card, .company-card');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.classList.add('visible');
    }
  });
}

// Tambahkan class untuk animasi
window.addEventListener('load', function() {
  document.querySelectorAll('.section, .card, .founder-card, .company-card').forEach(el => {
    el.classList.add('fade-in-element');
  });
  
  // Panggil fungsi saat halaman dimuat
  setTimeout(revealOnScroll, 100);
});

// Event listener untuk scroll
window.addEventListener('scroll', revealOnScroll);

// Perbaikan untuk perangkat sentuh
document.addEventListener('touchstart', function() {}, {passive: true});