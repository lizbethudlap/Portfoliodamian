import imgImage5 from "figma:asset/97578289e25eabcdac2de4f5cc390d1b02fb75c7.png";
import imgImage6 from "figma:asset/c207d6fe4c5634d2ff956f063a45912176be56e5.png";

export function Gallery() {
  return (
    <section 
      className="w-full overflow-hidden relative"
      style={{
        backgroundColor: 'var(--semantic-surface-section-dark)',
      }}
    >
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
        <div 
          className="absolute left-[86px] top-[81px] w-[487px] p-5 flex flex-col gap-5 items-start not-italic whitespace-pre-wrap rounded-[16px]"
          style={{
            backgroundColor: 'var(--semantic-surface-overlay)',
          }}
        >
          <h2 
            className="font-semibold h-[52px] w-full"
            style={{
              fontFamily: 'var(--semantic-font-heading-secondary)',
              fontSize: 'var(--semantic-font-size-h2)',
              lineHeight: 'var(--primitive-line-height-loose)',
              color: 'var(--semantic-text-muted)',
            }}
          >
            Experiencia
          </h2>
          <p 
            className="font-normal w-full"
            style={{
              fontFamily: 'var(--semantic-font-body)',
              fontSize: 'var(--semantic-font-size-body)',
              lineHeight: 'var(--primitive-line-height-snug)',
              color: 'var(--semantic-text-muted)',
            }}
          >
            Discover the charm of vintage watches or invest in pre-owned timepieces that stand the test of time.
          </p>
        </div>
      </div>
    </section>
  );
}
