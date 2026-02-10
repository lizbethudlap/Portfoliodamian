import { ChevronLeft, ChevronRight } from 'lucide-react';
import imgImage from "figma:asset/b41af2d594e7368dc00d80779df03ac3ab8765b4.png";
import imgImage1 from "figma:asset/d4310440986ef9a062bcea68e219bea668dd647f.png";
import imgImage2 from "figma:asset/6a347919b5933abf94b589bcf388f5adefab7874.png";
import imgImage3 from "figma:asset/1e61604621d48cacbafa05ea32d5db9b73ca0160.png";
import imgImage4 from "figma:asset/750443cf6b5eb8f8336cea37f0d632b5a249a12d.png";

const services = [
  { image: imgImage, title: 'Banquetes especiales' },
  { image: imgImage1, title: 'Centros de mesa' },
  { image: imgImage2, title: 'Decoracion con flores' },
  { image: imgImage3, title: 'Arcos de Flores' },
  { image: imgImage4, title: 'Arcos de Flores' },
];

interface ServiceCardProps {
  image: string;
  title: string;
}

function ServiceCard({ image, title }: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-[19px] items-center shrink-0" style={{ width: 'var(--semantic-layout-card-width)' }}>
      <div 
        className="relative w-full rounded-[20px] overflow-hidden"
        style={{ height: 'var(--semantic-layout-card-image-height)' }}
      >
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <p 
        className="font-medium not-italic text-center w-full whitespace-pre-wrap"
        style={{
          fontFamily: 'var(--semantic-font-body)',
          fontSize: 'var(--semantic-font-size-body)',
          lineHeight: 'var(--primitive-line-height-tight)',
          color: 'var(--semantic-text-primary)',
        }}
      >
        {title}
      </p>
    </div>
  );
}

function CarouselDots() {
  return (
    <div className="flex items-center gap-4 h-[13px]">
      <div 
        className="w-[13px] h-[13px] rounded-full"
        style={{ backgroundColor: 'var(--semantic-state-inactive)' }}
      />
      <div 
        className="w-[13px] h-[13px] rounded-full"
        style={{ backgroundColor: 'var(--semantic-state-inactive)' }}
      />
      <div 
        className="w-[13px] h-[13px] rounded-full"
        style={{ backgroundColor: 'var(--semantic-state-active)' }}
      />
      <div 
        className="w-[13px] h-[13px] rounded-full"
        style={{ backgroundColor: 'var(--semantic-state-inactive)' }}
      />
    </div>
  );
}

export function Services() {
  return (
    <section 
      className="w-full overflow-hidden"
      style={{
        backgroundColor: 'var(--semantic-surface-section-secondary)',
      }}
    >
      <div className="flex flex-col items-center justify-center gap-[49px] px-[100px] py-[61px]">
        {/* Header */}
        <div className="flex items-end justify-between w-full">
          <h2 
            className="font-semibold not-italic"
            style={{
              fontFamily: 'var(--semantic-font-heading-secondary)',
              fontSize: 'var(--semantic-font-size-h2)',
              lineHeight: 'var(--primitive-line-height-loose)',
              color: 'var(--semantic-text-primary)',
            }}
          >
            Servicios
          </h2>
          
          {/* Navigation Buttons */}
          <div className="flex items-center">
            <button 
              className="flex items-center justify-center px-[23px] py-[18px] rounded-[9.38px] transition-colors hover:bg-white/10"
              aria-label="Previous"
            >
              <ChevronLeft 
                className="w-[21.105px] h-[21.105px]"
                style={{ color: 'var(--semantic-button-icon)' }}
              />
            </button>
            <button 
              className="flex items-center justify-center px-[23px] py-[18px] rounded-[9.38px] transition-colors hover:bg-white/10"
              aria-label="Next"
            >
              <ChevronRight 
                className="w-[21.105px] h-[21.105px]"
                style={{ color: 'var(--semantic-button-icon)' }}
              />
            </button>
          </div>
        </div>
        
        {/* Services Carousel */}
        <div className="w-full overflow-hidden">
          <div className="flex items-center gap-[12px]">
            {services.map((service, index) => (
              <ServiceCard key={index} image={service.image} title={service.title} />
            ))}
          </div>
        </div>
        
        {/* Carousel Dots */}
        <CarouselDots />
      </div>
    </section>
  );
}
