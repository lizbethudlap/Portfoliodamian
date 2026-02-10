import { useEffect, useRef, useState } from 'react';
import imgImage174 from "./assets/bf0a242756410f9a60cae0edfb835cc2c241a175.png";
import imgImage from "./assets/b41af2d594e7368dc00d80779df03ac3ab8765b4.png";
import imgImage1 from "./assets/d4310440986ef9a062bcea68e219bea668dd647f.png";
import imgImage2 from "./assets/6a347919b5933abf94b589bcf388f5adefab7874.png";
import imgImage3 from "./assets/1e61604621d48cacbafa05ea32d5db9b73ca0160.png";
import imgImage4 from "./assets/750443cf6b5eb8f8336cea37f0d632b5a249a12d.png";
import imgImage5 from "./assets/97578289e25eabcdac2de4f5cc390d1b02fb75c7.png";
import imgImage6 from "./assets/c207d6fe4c5634d2ff956f063a45912176be56e5.png";
import { translations } from './content/translations';

// Services data (we will use the titles from translations later)
const servicesData = [
  { image: imgImage, key: 4 }, // Special Banquets / Banquetes Especiales
  { image: imgImage1, key: 3 }, // Hospitality Design / Diseño Hospitalidad
  { image: imgImage2, key: 2 }, // Live Productions / Producciones en Vivo
  { image: imgImage3, key: 1 }, // Corporate Experiences / Experiencias Corporativas
  { image: imgImage4, key: 0 }, // Luxury Weddings / Bodas de Lujo
];

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const t = translations[lang];

  // Initialize theme and lang on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
    const savedLang = localStorage.getItem('lang') as 'es' | 'en' | null;
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Toggle language
  const toggleLang = () => {
    const newLang = lang === 'es' ? 'en' : 'es';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        const maxSlides = Math.ceil(servicesData.length / 3) - 1;
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
    const maxSlides = Math.ceil(servicesData.length / 3) - 1;
    setCurrentSlide(prev => prev >= maxSlides ? 0 : prev + 1);
  };

  const prevSlide = () => {
    const maxSlides = Math.ceil(servicesData.length / 3) - 1;
    setCurrentSlide(prev => prev <= 0 ? maxSlides : prev - 1);
  };

  const numDots = Math.ceil(servicesData.length / 3);

  return (
    <div className="min-h-screen bg-[var(--color-surface-background)] transition-colors duration-300 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-surface-header)]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300" style={{ height: 'var(--size-header-height)' }}>
        <div className="relative h-full max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-[50px]">
          {/* Logo */}
          <div className="font-semibold not-italic leading-normal text-[var(--color-text-primary)] z-50 relative"
            style={{ fontFamily: 'var(--font-family-primitive-neulis)', fontSize: 'var(--font-size-primitive-lg)' }}>
            <a href="#" onClick={closeMenu}>{t.hero.name}</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-[47px]">
            <a href="#about" className="nav-link text-sm uppercase tracking-wider font-medium hover:text-[var(--color-text-brand)] transition-colors">{t.nav.about}</a>
            <a href="#gallery" className="nav-link text-sm uppercase tracking-wider font-medium hover:text-[var(--color-text-brand)] transition-colors">{t.nav.gallery}</a>
            <a href="#contact" className="nav-link text-sm uppercase tracking-wider font-medium hover:text-[var(--color-text-brand)] transition-colors">{t.nav.contact}</a>
          </nav>

          {/* Controls (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={toggleLang} className="theme-toggle-btn flex items-center gap-2 text-[var(--color-text-primary)] hover:opacity-80 transition-opacity" aria-label="Toggle language">
              <span className="text-sm font-medium uppercase">{lang === 'es' ? '🇺🇸 EN' : '🇲🇽 ES'}</span>
            </button>

            <button onClick={toggleTheme} className="theme-toggle-btn p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Toggle theme">
              {theme === 'light' ? (
                <svg className="theme-icon w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg className="theme-icon w-5 h-5 text-yellow-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 text-[var(--color-text-primary)]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[var(--color-surface-background)] z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 translated-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <nav className="flex flex-col items-center gap-8 mb-12">
            <a href="#about" onClick={closeMenu} className="text-2xl font-medium text-[var(--color-text-primary)] hover:text-[var(--color-text-brand)] uppercase tracking-widest">{t.nav.about}</a>
            <a href="#gallery" onClick={closeMenu} className="text-2xl font-medium text-[var(--color-text-primary)] hover:text-[var(--color-text-brand)] uppercase tracking-widest">{t.nav.gallery}</a>
            <a href="#contact" onClick={closeMenu} className="text-2xl font-medium text-[var(--color-text-primary)] hover:text-[var(--color-text-brand)] uppercase tracking-widest">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-8">
            <button onClick={toggleLang} className="flex items-center gap-2 text-[var(--color-text-primary)] text-lg font-medium border border-[var(--color-text-primary)]/20 px-4 py-2 rounded-full">
              <span>{lang === 'es' ? '🇺🇸 EN' : '🇲🇽 ES'}</span>
            </button>
            <button onClick={toggleTheme} className="p-3 rounded-full border border-[var(--color-text-primary)]/20 text-[var(--color-text-primary)]">
              {theme === 'light' ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden mt-[var(--size-header-height)]">
        <div className="relative w-full min-h-[calc(100vh-var(--size-header-height))] md:h-[961px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src={imgImage174}
              alt="Hero background"
              className="absolute w-full h-[120%] md:h-[113.4%] left-0 top-[-10%] md:top-[-13.45%] object-cover object-center"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[558px]">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 558">
              <defs>
                <linearGradient id="heroGradient" x1="720" x2="720" y1="252" y2="558" gradientUnits="userSpaceOnUse">
                  <stop stopOpacity="0" />
                  <stop offset="1" stopColor="var(--color-surface-background)" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <path d="M0 0H1440V558H0V0Z" fill="url(#heroGradient)" />
            </svg>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 md:px-8 text-center pt-[100px] md:pt-[150px]">
            <div className="max-w-[804px] space-y-4 mb-8">
              <h3 className="font-semibold text-[var(--color-text-inverse)] tracking-tight"
                style={{ fontFamily: 'var(--font-family-primitive-inter)', fontSize: 'var(--font-size-primitive-xl)', lineHeight: 'var(--line-height-primitive-relaxed)' }}>
                {t.hero.tagline}
              </h3>
              <p className="font-normal max-w-[616px] mx-auto text-[var(--color-text-inverse)] opacity-90"
                style={{ fontSize: 'var(--font-size-primitive-sm)', lineHeight: 'var(--line-height-primitive-snug)' }}>
                {t.hero.description}
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[11px] w-full md:w-auto px-4 md:px-0">
              <button className="cta-primary w-full md:w-auto justify-center">
                <span>{t.hero.ctaPrimary}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <button className="cta-secondary w-full md:w-auto justify-center">
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>
          <p className="absolute left-1/2 -translate-x-1/2 top-[150px] md:top-[215px] font-semibold leading-normal z-20 text-[var(--color-text-brand)] whitespace-nowrap opacity-20 md:opacity-100 pointer-events-none select-none"
            style={{ fontFamily: 'var(--font-family-primitive-neulis)', fontSize: 'var(--font-size-primitive-3xl)' }}>
            {t.hero.name}
          </p>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="w-full bg-[var(--color-surface-background)] py-[80px] md:py-[120px] px-6 md:px-8">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden shadow-2xl order-2 md:order-1">
            <img src={imgImage5} alt="Damian Alcalá" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="space-y-6 md:space-y-8 order-1 md:order-2">
            <h2 className="text-[var(--color-text-primary)] font-semibold"
              style={{ fontFamily: 'var(--font-family-primitive-inter)', fontSize: 'var(--font-size-primitive-2xl)', lineHeight: 'var(--line-height-primitive-loose)' }}>
              {t.about.title}
            </h2>
            <p className="text-[var(--color-text-primary)] opacity-80"
              style={{ fontSize: 'var(--font-size-primitive-md)', lineHeight: 'var(--line-height-primitive-relaxed)' }}>
              {t.about.content}
            </p>
            <div className="flex gap-4 items-center">
              <div className="h-[1px] w-8 md:w-12 bg-[var(--color-brand-primary)]"></div>
              <span className="text-[var(--color-brand-primary)] font-medium uppercase tracking-widest text-xs">Premium Experience Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full overflow-hidden bg-[var(--color-surface-section-secondary)]">
        <div className="flex flex-col items-center justify-center gap-[30px] md:gap-[49px] px-6 md:px-[100px] py-[60px] md:py-[61px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
            <h2 className="font-semibold text-[var(--color-text-primary)]"
              style={{ fontFamily: 'var(--font-family-primitive-inter)', fontSize: 'var(--font-size-primitive-2xl)', lineHeight: 'var(--line-height-primitive-loose)' }}>
              {t.services.title}
            </h2>
            <div className="flex items-center self-end md:self-auto gap-2">
              <button onClick={prevSlide} className="carousel-btn w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-surface-background)] transition-colors" aria-label="Previous">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button onClick={nextSlide} className="carousel-btn w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-surface-background)] transition-colors" aria-label="Next">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing">
            <div ref={carouselRef} className="flex items-center gap-[12px] transition-transform duration-300 touch-pan-x">
              {servicesData.map((service, index) => (
                <div key={index} className="service-card flex-shrink-0 relative group rounded-[16px] overflow-hidden" style={{ width: 'var(--size-card-width)' }}>
                  <div className="service-image overflow-hidden" style={{ height: 'var(--size-card-image-height)' }}>
                    <img src={service.image} alt={t.services.items[service.key].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                  </div>
                  <p className="service-title absolute bottom-0 left-0 right-0 p-4 text-white font-medium z-10 bg-gradient-to-t from-black/80 to-transparent">{t.services.items[service.key].title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4" style={{ height: 'var(--size-carousel-dot)' }}>
            {Array.from({ length: numDots }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${i === currentSlide ? 'bg-[var(--color-text-primary)] w-6' : 'bg-[var(--color-text-primary)]/30 hover:bg-[var(--color-text-primary)]/50'}`}
                onClick={() => setCurrentSlide(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="w-full overflow-hidden py-[50px] md:py-[76px] bg-[var(--color-surface-section-primary)] px-6">
        <div className="flex flex-col gap-[21px] items-center text-center">
          <p className="font-normal text-center w-full max-w-2xl mx-auto whitespace-pre-wrap text-[var(--color-text-secondary)]"
            style={{ fontSize: 'var(--font-size-primitive-md)', lineHeight: 'var(--line-height-primitive-normal)' }}>
            {t.experience.subtitle}
          </p>
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 md:gap-[48px] w-full text-[var(--color-text-secondary)] mt-4">
            <div className="brand-logo text-xl md:text-2xl font-bold opacity-50 hover:opacity-100 transition-opacity">BRAND 1</div>
            <div className="brand-logo text-xl md:text-2xl font-bold opacity-50 hover:opacity-100 transition-opacity">BRAND 2</div>
            <div className="brand-logo text-xl md:text-2xl font-bold opacity-50 hover:opacity-100 transition-opacity">BRAND 3</div>
            <div className="brand-logo text-xl md:text-2xl font-bold opacity-50 hover:opacity-100 transition-opacity">BRAND 4</div>
            <div className="brand-logo text-xl md:text-2xl font-bold opacity-50 hover:opacity-100 transition-opacity">BRAND 5</div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="w-full overflow-hidden relative bg-[var(--color-surface-section-dark)]">
        <div className="flex flex-col items-start pt-[60px] md:pt-[200px] relative">
          <div className="relative w-full h-[500px] md:h-[994px]">
            <img src={imgImage5} alt="Gallery 1" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="relative w-full h-[400px] md:h-[783px]">
            <img src={imgImage6} alt="Gallery 2" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="absolute left-6 md:left-[86px] top-[40px] md:top-[81px] w-[calc(100%-48px)] md:w-[580px] p-6 md:p-8 flex flex-col gap-4 md:gap-5 items-start bg-[var(--color-surface-overlay)]/90 backdrop-blur-md rounded-[16px] md:rounded-[var(--radius-primitive-lg)] shadow-2xl border border-white/10 z-10">
            <h2 className="font-semibold text-[var(--color-text-muted)]"
              style={{ fontFamily: 'var(--font-family-primitive-inter)', fontSize: 'var(--font-size-primitive-2xl)', lineHeight: 'var(--line-height-primitive-loose)' }}>
              {t.gallery.title}
            </h2>
            <p className="font-normal w-full text-[var(--color-text-muted)]"
              style={{ fontSize: 'var(--font-size-primitive-md)', lineHeight: 'var(--line-height-primitive-relaxed)' }}>
              {t.gallery.description}
            </p>
          </div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <section id="contact" className="bg-[#c6cfff] dark:bg-[#1a1b2e] flex flex-col items-center px-[20px] py-[60px] md:py-[100px] relative w-full transition-colors duration-300">
        <div className="max-w-[896px] w-full flex flex-col gap-[30px] md:gap-[46px] items-center text-center">
          <h2 className="font-bold text-[#101111] dark:text-white text-3xl md:text-5xl"
            style={{ lineHeight: '1.2' }}>
            {t.footer.title}
          </h2>
          <button className="bg-[#df0] text-black px-8 py-4 rounded-full font-medium flex items-center gap-3 hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
            <span className="text-lg">{t.footer.cta}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <div className="border-t border-black/10 dark:border-white/10 w-full pt-8 mt-8">
            <p className="text-sm opacity-60 text-black dark:text-white">
              © {new Date().getFullYear()} {t.hero.name}. {t.hero.tagline}.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}