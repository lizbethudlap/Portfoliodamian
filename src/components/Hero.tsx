import { ArrowRight } from 'lucide-react';
import imgImage174 from "figma:asset/bf0a242756410f9a60cae0edfb835cc2c241a175.png";

export function Hero() {
  return (
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
          <svg 
            className="block w-full h-full" 
            fill="none" 
            preserveAspectRatio="none" 
            viewBox="0 0 1440 558"
          >
            <defs>
              <linearGradient 
                id="heroGradient" 
                x1="720" 
                x2="720" 
                y1="252" 
                y2="558"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopOpacity="0" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path 
              d="M0 0H1440V558H0V0Z" 
              fill="url(#heroGradient)"
              style={{ color: 'var(--semantic-surface-background)' }}
            />
          </svg>
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-8">
          <div className="max-w-[804px] text-center space-y-4 mb-8">
            <h1 
              className="font-semibold not-italic"
              style={{
                fontFamily: 'var(--semantic-font-heading-secondary)',
                fontSize: 'var(--semantic-font-size-h3)',
                lineHeight: 'var(--primitive-line-height-relaxed)',
                color: 'var(--semantic-text-inverse)',
              }}
            >
              Discover Timeless Elegance with Timezone
            </h1>
            <p 
              className="font-normal not-italic max-w-[616px] mx-auto"
              style={{
                fontFamily: 'var(--semantic-font-body)',
                fontSize: 'var(--semantic-font-size-body)',
                lineHeight: 'var(--primitive-line-height-snug)',
                color: 'var(--semantic-text-inverse)',
              }}
            >
              we believe that every second counts. Our carefully curated collection of luxury and everyday timepieces offers more than just a way to keep time—they reflect your style, precision, and craftsmanship.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-[11px]">
            <button 
              className="flex items-center justify-center gap-[10px] px-5 py-4 overflow-hidden transition-transform hover:scale-105"
              style={{
                backgroundColor: 'var(--semantic-button-primary-bg)',
                color: 'var(--semantic-button-primary-text)',
                borderRadius: 'var(--semantic-radius-button)',
                fontFamily: 'var(--semantic-font-body)',
                fontSize: 'var(--semantic-font-size-body)',
                fontWeight: 'var(--primitive-font-weight-medium)',
              }}
            >
              <span>See my work</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button 
              className="px-[23px] py-[18px] transition-all hover:opacity-80"
              style={{
                backgroundColor: 'var(--semantic-button-secondary-bg)',
                color: 'var(--semantic-button-secondary-text)',
                border: `1px solid var(--semantic-button-secondary-border)`,
                borderRadius: 'var(--semantic-radius-md)',
                fontFamily: 'var(--semantic-font-body)',
                fontSize: 'var(--semantic-font-size-body)',
                fontWeight: 'var(--primitive-font-weight-medium)',
              }}
            >
              Contactame
            </button>
          </div>
        </div>
        
        {/* Large Logo Overlay */}
        <p 
          className="absolute left-[501px] top-[215px] font-semibold not-italic leading-normal z-20"
          style={{
            fontFamily: 'var(--semantic-font-heading-primary)',
            fontSize: 'var(--semantic-font-size-h1)',
            color: 'var(--semantic-text-brand)',
          }}
        >
          Damian Alcala
        </p>
      </div>
    </section>
  );
}