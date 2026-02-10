// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  }
  updateThemeButton(savedTheme);
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  const theme = isDark ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  updateThemeButton(theme);
}

function updateThemeButton(theme) {
  const moonIcon = document.querySelector('.moon-icon');
  const sunIcon = document.querySelector('.sun-icon');
  
  if (theme === 'dark') {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  } else {
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
  }
}

// Services Carousel
const services = [
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=237&h=275&fit=crop',
    title: 'Banquetes especiales'
  },
  {
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=237&h=275&fit=crop',
    title: 'Centros de mesa'
  },
  {
    image: 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=237&h=275&fit=crop',
    title: 'Decoracion con flores'
  },
  {
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=237&h=275&fit=crop',
    title: 'Arcos de Flores'
  },
  {
    image: 'https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=237&h=275&fit=crop',
    title: 'Arreglos florales'
  }
];

let currentSlide = 0;

function createServiceCard(service) {
  return `
    <div class="service-card" style="width: var(--size-card-width)">
      <div class="service-image" style="height: var(--size-card-image-height)">
        <img src="${service.image}" alt="${service.title}" class="absolute inset-0 w-full h-full object-cover">
      </div>
      <p class="service-title">${service.title}</p>
    </div>
  `;
}

function renderCarousel() {
  const carousel = document.getElementById('services-carousel');
  carousel.innerHTML = services.map(service => createServiceCard(service)).join('');
}

function createDots() {
  const dotsContainer = document.getElementById('carousel-dots');
  const numDots = Math.ceil(services.length / 3);
  
  dotsContainer.innerHTML = Array.from({ length: numDots }, (_, i) => {
    const isActive = i === currentSlide ? 'active' : '';
    return `<div class="carousel-dot ${isActive}" data-index="${i}"></div>`;
  }).join('');
  
  // Add click handlers to dots
  document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateCarousel();
    });
  });
}

function updateCarousel() {
  const carousel = document.getElementById('services-carousel');
  const cardWidth = 237; // var(--size-card-width)
  const gap = 12;
  const offset = currentSlide * (cardWidth + gap) * 3;
  carousel.style.transform = `translateX(-${offset}px)`;
  
  // Update dots
  document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function nextSlide() {
  const maxSlides = Math.ceil(services.length / 3) - 1;
  currentSlide = currentSlide >= maxSlides ? 0 : currentSlide + 1;
  updateCarousel();
}

function prevSlide() {
  const maxSlides = Math.ceil(services.length / 3) - 1;
  currentSlide = currentSlide <= 0 ? maxSlides : currentSlide - 1;
  updateCarousel();
}

// Smooth scroll for navigation links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme
  initTheme();
  
  // Theme toggle button
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Initialize carousel
  renderCarousel();
  createDots();
  
  // Carousel navigation
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  
  // Initialize smooth scroll
  initSmoothScroll();
  
  // Auto-advance carousel every 5 seconds
  setInterval(nextSlide, 5000);
});
