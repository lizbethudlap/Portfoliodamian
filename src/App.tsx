import { useEffect, useRef, useState } from 'react';
import svgPaths from "./imports/svg-u7f3fcjq8w";
import imgImage174 from "figma:asset/bf0a242756410f9a60cae0edfb835cc2c241a175.png";
import imgImage from "figma:asset/b41af2d594e7368dc00d80779df03ac3ab8765b4.png";
import imgImage1 from "figma:asset/d4310440986ef9a062bcea68e219bea668dd647f.png";
import imgImage2 from "figma:asset/6a347919b5933abf94b589bcf388f5adefab7874.png";
import imgImage3 from "figma:asset/1e61604621d48cacbafa05ea32d5db9b73ca0160.png";
import imgImage4 from "figma:asset/750443cf6b5eb8f8336cea37f0d632b5a249a12d.png";
import imgImage5 from "figma:asset/97578289e25eabcdac2de4f5cc390d1b02fb75c7.png";
import imgImage6 from "figma:asset/c207d6fe4c5634d2ff956f063a45912176be56e5.png";

// Services data
const services = [
  {
    image: imgImage,
    title: 'Banquetes especiales'
  },
  {
    image: imgImage1,
    title: 'Centros de mesa'
  },
  {
    image: imgImage2,
    title: 'Decoracion con flores'
  },
  {
    image: imgImage3,
    title: 'Arcos de Flores'
  },
  {
    image: imgImage4,
    title: 'Arreglos florales'
  }
];

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        const maxSlides = Math.ceil(services.length / 3) - 1;
        return prev >= maxSlides ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Update carousel transform
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = 237;
      const gap = 12;
      const offset = currentSlide * (cardWidth + gap) * 3;
      carouselRef.current.style.transform = `translateX(-${offset}px)`;
    }
  }, [currentSlide]);

  const nextSlide = () => {
    const maxSlides = Math.ceil(services.length / 3) - 1;
    setCurrentSlide(prev => prev >= maxSlides ? 0 : prev + 1);
  };

  const prevSlide = () => {
    const maxSlides = Math.ceil(services.length / 3) - 1;
    setCurrentSlide(prev => prev <= 0 ? maxSlides : prev - 1);
  };

  const numDots = Math.ceil(services.length / 3);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="w-full overflow-hidden relative bg-[var(--color-surface-header)]" style={{ height: 'var(--size-header-height)' }}>
        <div className="relative h-full max-w-[1440px] mx-auto">
          {/* Logo */}
          <p className="absolute left-[50px] top-6 font-semibold not-italic leading-normal text-[var(--color-text-primary)]" 
             style={{ fontFamily: 'var(--font-family-primitive-neulis)', fontSize: 'var(--font-size-primitive-lg)' }}>
            Damian Alcala
          </p>
          
          {/* Navigation */}
          <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-[47px]">
            <a href="#about" className="nav-link">About</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          
          {/* Theme Switcher */}
          <div className="absolute right-[100px] top-1/2 -translate-y-1/2 flex items-center gap-[10px]">
            <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
              {/* Moon Icon (visible in light mode) */}
              <svg className="theme-icon moon-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
              {/* Sun Icon (visible in dark mode) */}
              <svg className="theme-icon sun-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[961px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={imgImage174}
              alt="Hero background" 
              className="absolute w-full h-[113.4%] left-[0.03%] top-[-13.45%] max-w-none object-cover"
            />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-[558px]">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 558">
              <defs>
                <linearGradient id="heroGradient" x1="720" x2="720" y1="252" y2="558" gradientUnits="userSpaceOnUse">
                  <stop stopOpacity="0" />
                  <stop offset="1" stopColor="var(--color-surface-background)" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <path d="M0 0H1440V558H0V0Z" fill="url(#heroGradient)"/>
            </svg>
          </div>
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-8">
            <div className="max-w-[804px] text-center space-y-4 mb-8">
              <h3 className="font-semibold not-italic text-[var(--color-text-inverse)]"
                  style={{ fontFamily: 'var(--font-family-primitive-inter)', fontSize: 'var(--font-size-primitive-xl)', lineHeight: 'var(--line-height-primitive-relaxed)' }}>
                Discover Timeless Elegance with Timezone
              </h3>
              <p className="font-normal not-italic max-w-[616px] mx-auto text-[var(--color-text-inverse)]"
                 style={{ fontSize: 'var(--font-size-primitive-sm)', lineHeight: 'var(--line-height-primitive-snug)' }}>
                we believe that every second counts. Our carefully curated collection of luxury and everyday timepieces offers more than just a way to keep time—they reflect your style, precision, and craftsmanship.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex items-center gap-[11px]">
              <button className="cta-primary">
                <span>See my work</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              
              <button className="cta-secondary">
                Contactame
              </button>
            </div>
          </div>
          
          {/* Large Logo Overlay */}
          <p className="absolute left-[501px] top-[215px] font-semibold not-italic leading-normal z-20 text-[var(--color-text-brand)]"
             style={{ fontFamily: 'var(--font-family-primitive-neulis)', fontSize: 'var(--font-size-primitive-3xl)' }}>
            Damian Alcala
          </p>
        </div>
      </section>

      {/* Brands Section */}
      <section className="w-full overflow-hidden py-[76px] bg-[var(--color-surface-section-primary)]">
        <div className="flex flex-col gap-[21px] items-center">
          <p className="font-normal not-italic text-center w-full whitespace-pre-wrap text-[var(--color-text-secondary)]"
             style={{ fontSize: 'var(--font-size-primitive-md)', lineHeight: 'var(--line-height-primitive-normal)' }}>
            MARCAS CON LAS QUE HE COLABORADO
          </p>
          
          <div className="flex items-center justify-center gap-[48px] h-[49px] w-full text-[var(--color-text-secondary)]">
            <div className="brand-logo">BRAND 1</div>
            <div className="brand-logo">BRAND 2</div>
            <div className="brand-logo">BRAND 3</div>
            <div className="brand-logo">BRAND 4</div>
            <div className="brand-logo">BRAND 5</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full overflow-hidden bg-[var(--color-surface-section-secondary)]">
        <div className="flex flex-col items-center justify-center gap-[49px] px-[100px] py-[61px]">
          {/* Header */}
          <div className="flex items-end justify-between w-full">
            <h2 className="font-semibold not-italic text-[var(--color-text-primary)]"
                style={{ fontFamily: 'var(--font-family-primitive-inter)', fontSize: 'var(--font-size-primitive-2xl)', lineHeight: 'var(--line-height-primitive-loose)' }}>
              Servicios
            </h2>
            
            {/* Navigation Buttons */}
            <div className="flex items-center">
              <button onClick={prevSlide} className="carousel-btn" aria-label="Previous">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button onClick={nextSlide} className="carousel-btn" aria-label="Next">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Services Carousel */}
          <div className="w-full overflow-hidden">
            <div ref={carouselRef} className="flex items-center gap-[12px] transition-transform duration-300">
              {services.map((service, index) => (
                <div key={index} className="service-card" style={{ width: 'var(--size-card-width)' }}>
                  <div className="service-image" style={{ height: 'var(--size-card-image-height)' }}>
                    <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <p className="service-title">{service.title}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Dots */}
          <div className="flex items-center gap-4" style={{ height: 'var(--size-carousel-dot)' }}>
            {Array.from({ length: numDots }, (_, i) => (
              <div 
                key={i}
                className={`carousel-dot ${i === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full overflow-hidden relative bg-[var(--color-surface-section-dark)]">
        <div className="flex flex-col items-start">
          {/* Image 1 */}
          <div className="relative w-full h-[994px]">
            <img 
              src={imgImage5}
              alt="Experience gallery image 1" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Image 2 */}
          <div className="relative w-full h-[783px]">
            <img 
              src={imgImage6}
              alt="Experience gallery image 2" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Text Overlay */}
          <div className="absolute left-[86px] top-[81px] w-[487px] p-5 flex flex-col gap-5 items-start not-italic whitespace-pre-wrap bg-[var(--color-surface-overlay)]"
               style={{ borderRadius: 'var(--radius-primitive-lg)' }}>
            <h2 className="font-semibold h-[52px] w-full text-[var(--color-text-muted)]"
                style={{ fontFamily: 'var(--font-family-primitive-inter)', fontSize: 'var(--font-size-primitive-2xl)', lineHeight: 'var(--line-height-primitive-loose)' }}>
              Experiencia
            </h2>
            <p className="font-normal w-full text-[var(--color-text-muted)]"
               style={{ fontSize: 'var(--font-size-primitive-sm)', lineHeight: 'var(--line-height-primitive-snug)' }}>
              Discover the charm of vintage watches or invest in pre-owned timepieces that stand the test of time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}