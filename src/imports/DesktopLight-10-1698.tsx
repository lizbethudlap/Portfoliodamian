import svgPaths from "./svg-u7f3fcjq8w";
import imgImage174 from "figma:asset/bf0a242756410f9a60cae0edfb835cc2c241a175.png";
import imgImage from "figma:asset/b41af2d594e7368dc00d80779df03ac3ab8765b4.png";
import imgImage1 from "figma:asset/d4310440986ef9a062bcea68e219bea668dd647f.png";
import imgImage2 from "figma:asset/6a347919b5933abf94b589bcf388f5adefab7874.png";
import imgImage3 from "figma:asset/1e61604621d48cacbafa05ea32d5db9b73ca0160.png";
import imgImage4 from "figma:asset/750443cf6b5eb8f8336cea37f0d632b5a249a12d.png";
import imgImage5 from "figma:asset/97578289e25eabcdac2de4f5cc390d1b02fb75c7.png";
import imgImage6 from "figma:asset/c207d6fe4c5634d2ff956f063a45912176be56e5.png";

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[47px] items-center leading-[24px] left-1/2 not-italic text-[#001c56] text-[16px] top-[calc(50%+0.5px)]">
      <p className="relative shrink-0">About</p>
      <p className="relative shrink-0">Gallery</p>
      <p className="relative shrink-0">Contact</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[20px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#004cc6] text-[16px] text-center w-[18px]">
        <p className="leading-none whitespace-pre-wrap">moon</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[20px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#004cc6] text-[16px] text-center w-[18px]">
        <p className="leading-none whitespace-pre-wrap">sun</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[10px] items-center left-[1229px] top-[calc(50%-0.23px)]">
      <Button />
      <Button1 />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[66px] overflow-clip relative shrink-0 w-[1440px]" data-name="Header" style={{ backgroundImage: "linear-gradient(90deg, rgb(198, 207, 255) 0%, rgb(198, 207, 255) 100%), linear-gradient(90deg, rgb(16, 17, 17) 0%, rgb(16, 17, 17) 100%)" }}>
      <p className="absolute font-['Neulis_Cursive:Semi_Bold',sans-serif] leading-[normal] left-[50px] not-italic text-[#001c56] text-[20px] top-[24px]">Damian Alcala</p>
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-center ml-0 mt-0 not-italic relative row-1 text-center text-white w-[804px] whitespace-pre-wrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] min-w-full relative shrink-0 text-[30px] w-[min-content]">Discover Timeless Elegance with Timezone</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-[616px]">we believe that every second counts. Our carefully curated collection of luxury and everyday timepieces offers more than just a way to keep time—they reflect your style, precision, and craftsmanship.</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#df0] content-stretch flex gap-[10px] items-center justify-center leading-[0] not-italic overflow-clip px-[20px] py-[16px] relative rounded-[8px] shrink-0 text-[16px] text-black whitespace-nowrap" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0">
        <p className="leading-none">See my work</p>
      </div>
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center relative shrink-0">
        <p className="leading-none">arrow-right</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[9.38px] shrink-0" data-name="Button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[23px] py-[18px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ccdb2a] text-[16px] w-full">
          <p className="leading-none whitespace-pre-wrap">Contactame</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccdb2a] border-solid inset-0 pointer-events-none rounded-[9.38px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="col-1 content-stretch flex gap-[11px] items-center ml-[245.5px] mt-[214px] relative row-1">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[318px] mt-[239px] relative row-1">
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function Hero() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="Hero">
      <div className="col-1 h-[961px] ml-0 mt-0 relative row-1 w-[1453px]" data-name="image 174">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[113.4%] left-[0.03%] max-w-none top-[-13.45%] w-full" src={imgImage174} />
        </div>
      </div>
      <div className="col-1 h-[558px] ml-0 mt-[417px] relative row-1 w-[1440px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 558">
          <path d="M0 0H1440V558H0V0Z" fill="url(#paint0_linear_1_1819)" id="Rectangle 1016" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1819" x1="720" x2="720" y1="252" y2="558">
              <stop stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group />
      <p className="col-1 font-['Neulis_Cursive:Semi_Bold',sans-serif] leading-[normal] ml-[501px] mt-[149px] not-italic relative row-1 text-[#df0] text-[56px]">Damian Alcala</p>
    </div>
  );
}

function Simplification() {
  return (
    <div className="h-[42px] relative shrink-0 w-[79px]" data-name="Simplification">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 42">
        <g clipPath="url(#clip0_1_1887)" id="Simplification">
          <path d={svgPaths.pe610b00} fill="var(--fill-0, #00103C)" id="Vector" />
          <path d={svgPaths.p203b8700} fill="var(--fill-0, #00103C)" id="Vector_2" />
          <path d={svgPaths.p3c7b46f0} fill="var(--fill-0, #00103C)" id="Vector_3" />
          <path d={svgPaths.p5cf1280} fill="var(--fill-0, #00103C)" id="Vector_4" />
          <path d={svgPaths.p402af00} fill="var(--fill-0, #00103C)" id="Vector_5" />
          <path d={svgPaths.p2069a580} fill="var(--fill-0, #00103C)" id="Vector_6" />
          <path d={svgPaths.p2a109580} fill="var(--fill-0, #00103C)" id="Vector_7" />
        </g>
        <defs>
          <clipPath id="clip0_1_1887">
            <rect fill="white" height="42" width="79" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[45.431px] relative shrink-0 w-[84.257px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.2565 45.4306">
        <g id="Group 98">
          <path d={svgPaths.p2e505f80} fill="var(--fill-0, #00103C)" id="Vector" />
          <path d={svgPaths.p29d48200} fill="var(--fill-0, #00103C)" id="Vector_2" />
          <path d={svgPaths.p37f6b300} fill="var(--fill-0, #00103C)" id="Vector_3" />
          <path d={svgPaths.p282a2900} fill="var(--fill-0, #00103C)" id="Vector_4" />
          <path d={svgPaths.p9d1e000} fill="var(--fill-0, #00103C)" id="Vector_5" />
          <path d={svgPaths.p38b01c80} fill="var(--fill-0, #00103C)" id="Vector_6" />
          <path d={svgPaths.p3773b900} fill="var(--fill-0, #00103C)" id="Vector_7" />
          <path d={svgPaths.p3c344300} fill="var(--fill-0, #00103C)" id="Vector_8" />
          <path d={svgPaths.p2bfc2c00} fill="var(--fill-0, #00103C)" id="Vector_9" />
          <path d={svgPaths.p12546000} fill="var(--fill-0, #00103C)" id="Vector_10" />
          <path d={svgPaths.p1d7b770} fill="var(--fill-0, #00103C)" id="Vector_11" />
          <path d={svgPaths.p103a1900} fill="var(--fill-0, #00103C)" id="Vector_12" />
          <path d={svgPaths.p3eef9100} fill="var(--fill-0, #00103C)" id="Vector_13" />
          <path d={svgPaths.p236fc900} fill="var(--fill-0, #00103C)" id="Vector_14" />
          <path d={svgPaths.p9dab600} fill="var(--fill-0, #00103C)" id="Vector_15" />
          <path d={svgPaths.p2da9bef0} fill="var(--fill-0, #00103C)" id="Vector_16" />
          <path d={svgPaths.pd717e80} fill="var(--fill-0, #00103C)" id="Vector_17" />
          <path d={svgPaths.p1d4a6930} fill="var(--fill-0, #00103C)" id="Vector_18" />
          <path d={svgPaths.p2aa688b0} fill="var(--fill-0, #00103C)" id="Vector_19" />
        </g>
      </svg>
    </div>
  );
}

function Simplification1() {
  return (
    <div className="h-[44px] relative shrink-0 w-[78px]" data-name="Simplification">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 44">
        <g clipPath="url(#clip0_1_1827)" id="Simplification">
          <path d={svgPaths.p18207600} fill="var(--fill-0, #00103C)" id="Vector" />
          <path d={svgPaths.p3ea14300} fill="var(--fill-0, #00103C)" id="Vector_2" />
          <path d={svgPaths.p121c5a00} fill="var(--fill-0, #00103C)" id="Vector_3" />
          <path d={svgPaths.p147c5a00} fill="var(--fill-0, #00103C)" id="Vector_4" />
          <path d={svgPaths.p3fae2100} fill="var(--fill-0, #00103C)" id="Vector_5" />
          <path d={svgPaths.p3745d100} fill="var(--fill-0, #00103C)" id="Vector_6" />
        </g>
        <defs>
          <clipPath id="clip0_1_1827">
            <rect fill="white" height="44" width="78" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[45.047px] relative shrink-0 w-[112.682px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112.682 45.0467">
        <g id="Group 97">
          <path d={svgPaths.p2ff3aa00} fill="var(--fill-0, #00103C)" id="Vector" />
          <path d={svgPaths.p73805f0} fill="var(--fill-0, #00103C)" id="Vector_2" />
          <path d={svgPaths.p3ba00980} fill="var(--fill-0, #00103C)" id="Vector_3" />
          <path d={svgPaths.p8742b80} fill="var(--fill-0, #00103C)" id="Vector_4" />
          <path d={svgPaths.p9489600} fill="var(--fill-0, #00103C)" id="Vector_5" />
          <path d={svgPaths.p1063d2f0} fill="var(--fill-0, #00103C)" id="Vector_6" />
          <path d={svgPaths.p9d4d700} fill="var(--fill-0, #00103C)" id="Vector_7" />
          <path d={svgPaths.p253e0e00} fill="var(--fill-0, #00103C)" id="Vector_8" />
          <path d={svgPaths.pb23fa00} fill="var(--fill-0, #00103C)" id="Vector_9" />
          <path d={svgPaths.pba0dd80} fill="var(--fill-0, #00103C)" id="Vector_10" />
          <path d={svgPaths.p19c3d580} fill="var(--fill-0, #00103C)" id="Vector_11" />
          <path d={svgPaths.p38629c00} fill="var(--fill-0, #00103C)" id="Vector_12" />
          <path d={svgPaths.p1eaae100} fill="var(--fill-0, #00103C)" id="Vector_13" />
          <path d={svgPaths.p3b2c5e00} fill="var(--fill-0, #00103C)" id="Vector_14" />
          <path d={svgPaths.pba96ef0} fill="var(--fill-0, #00103C)" id="Vector_15" />
          <path d={svgPaths.p10640280} fill="var(--fill-0, #00103C)" id="Vector_16" />
          <path d={svgPaths.p1197f100} fill="var(--fill-0, #00103C)" id="Vector_17" />
          <path d={svgPaths.p9b9e340} fill="var(--fill-0, #00103C)" id="Vector_18" />
          <path d={svgPaths.p315f1f40} fill="var(--fill-0, #00103C)" id="Vector_19" />
          <path d={svgPaths.p136fd800} fill="var(--fill-0, #00103C)" id="Vector_20" />
          <path d={svgPaths.p21f84b00} fill="var(--fill-0, #00103C)" id="Vector_21" />
          <path d={svgPaths.p587b7f2} fill="var(--fill-0, #00103C)" id="Vector_22" />
          <path d={svgPaths.p3e08980} fill="var(--fill-0, #00103C)" id="Vector_23" />
          <path d={svgPaths.p186cb180} fill="var(--fill-0, #00103C)" id="Vector_24" />
          <path d={svgPaths.p3aa25840} fill="var(--fill-0, #00103C)" id="Vector_25" />
          <path d={svgPaths.p2110fcb0} fill="var(--fill-0, #00103C)" id="Vector_26" />
          <path d={svgPaths.p3e457e00} fill="var(--fill-0, #00103C)" id="Vector_27" />
          <path d={svgPaths.p3e9a1a80} fill="var(--fill-0, #00103C)" id="Vector_28" />
          <path d={svgPaths.p23e69140} fill="var(--fill-0, #00103C)" id="Vector_29" />
          <path d={svgPaths.p207d4500} fill="var(--fill-0, #00103C)" id="Vector_30" />
          <path d={svgPaths.p2761bc00} fill="var(--fill-0, #00103C)" id="Vector_31" />
          <path d={svgPaths.p3fb86440} fill="var(--fill-0, #00103C)" id="Vector_32" />
          <path d={svgPaths.p38355480} fill="var(--fill-0, #00103C)" id="Vector_33" />
          <path d={svgPaths.p32fbe680} fill="var(--fill-0, #00103C)" id="Vector_34" />
          <path d={svgPaths.p2e5cf400} fill="var(--fill-0, #00103C)" id="Vector_35" />
          <path d={svgPaths.p481e500} fill="var(--fill-0, #00103C)" id="Vector_36" />
          <path d={svgPaths.p15f13600} fill="var(--fill-0, #00103C)" id="Vector_37" />
          <path d={svgPaths.p160c6800} fill="var(--fill-0, #00103C)" id="Vector_38" />
          <path d={svgPaths.pedf0740} fill="var(--fill-0, #00103C)" id="Vector_39" />
          <path d={svgPaths.p20e5de40} fill="var(--fill-0, #00103C)" id="Vector_40" />
          <path d={svgPaths.p3ceeef40} fill="var(--fill-0, #00103C)" id="Vector_41" />
          <path d={svgPaths.p1c9b7900} fill="var(--fill-0, #00103C)" id="Vector_42" />
          <path d={svgPaths.p5dd6d00} fill="var(--fill-0, #00103C)" id="Vector_43" />
          <path d={svgPaths.p3256d180} fill="var(--fill-0, #00103C)" id="Vector_44" />
          <path d={svgPaths.p6565500} fill="var(--fill-0, #00103C)" id="Vector_45" />
          <path d={svgPaths.p1aec8700} fill="var(--fill-0, #00103C)" id="Vector_46" />
          <path d={svgPaths.p7c79700} fill="var(--fill-0, #00103C)" id="Vector_47" />
          <path d={svgPaths.p1149eb60} fill="var(--fill-0, #00103C)" id="Vector_48" />
          <path d={svgPaths.p1604dd80} fill="var(--fill-0, #00103C)" id="Vector_49" />
          <path d={svgPaths.p95cf780} fill="var(--fill-0, #00103C)" id="Vector_50" />
        </g>
      </svg>
    </div>
  );
}

function Simplification2() {
  return (
    <div className="h-[49px] relative shrink-0 w-[93px]" data-name="Simplification">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93 49">
        <g clipPath="url(#clip0_1_1896)" id="Simplification">
          <path d={svgPaths.p3ae70300} fill="var(--fill-0, #00103C)" id="Vector" />
          <path d={svgPaths.pc41a5f0} fill="var(--fill-0, #00103C)" id="Vector_2" />
          <path d={svgPaths.p24fd2e00} fill="var(--fill-0, #00103C)" id="Vector_3" />
          <path d={svgPaths.p1dc7da00} fill="var(--fill-0, #00103C)" id="Vector_4" />
          <path d={svgPaths.p3256380} fill="var(--fill-0, #00103C)" id="Vector_5" />
          <path d={svgPaths.p20bce280} fill="var(--fill-0, #00103C)" id="Vector_6" />
        </g>
        <defs>
          <clipPath id="clip0_1_1896">
            <rect fill="white" height="49" width="93" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logos() {
  return (
    <div className="content-stretch flex gap-[48px] h-[49px] items-center justify-center relative shrink-0 w-full" data-name="logos">
      <Simplification />
      <Group2 />
      <Simplification1 />
      <Group1 />
      <Simplification2 />
    </div>
  );
}

function Marcas() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col gap-[21px] items-start overflow-clip py-[76px] relative shrink-0 w-full" data-name="Marcas">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#00103c] text-[18px] text-center w-full whitespace-pre-wrap">MARCAS CON LAS QUE HE COLABORADO</p>
      <Logos />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[23px] py-[18px] relative rounded-[9.38px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#004cc6] text-[20px] text-center w-[21.105px]">
        <p className="leading-none whitespace-pre-wrap">arrow-circle-left</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[23px] py-[18px] relative rounded-[9.38px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#004cc6] text-[20px] text-center w-[21.105px]">
        <p className="leading-none whitespace-pre-wrap">arrow-circle-right</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[56px] not-italic relative shrink-0 text-[#001c56] text-[48px]">Servicios</p>
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-center relative shrink-0 w-[237px]">
      <div className="h-[275px] relative rounded-[20px] shrink-0 w-full" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage} />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.109] not-italic relative shrink-0 text-[#001c56] text-[16px] text-center w-full whitespace-pre-wrap">Banquetes especiales</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-center relative shrink-0 w-[237px]">
      <div className="h-[275px] relative rounded-[20px] shrink-0 w-full" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage1} />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.109] not-italic relative shrink-0 text-[#001c56] text-[16px] text-center w-full whitespace-pre-wrap">Centros de mesa</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-center relative shrink-0 w-[237px]">
      <div className="h-[275px] relative rounded-[20px] shrink-0 w-full" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage2} />
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.109] not-italic relative shrink-0 text-[#001c56] text-[16px] text-center w-full whitespace-pre-wrap">Decoracion con flores</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-center relative shrink-0 w-[237px]">
      <div className="h-[275px] relative rounded-[20px] shrink-0 w-full" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[135.55%] left-[-1.9%] max-w-none top-[-18.45%] w-[104.85%]" src={imgImage3} />
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.109] not-italic relative shrink-0 text-[#001c56] text-[16px] text-center w-full whitespace-pre-wrap">Arcos de Flores</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-center relative shrink-0 w-[237px]">
      <div className="h-[275px] relative rounded-[20px] shrink-0 w-full" data-name="image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[135.55%] left-[-1.9%] max-w-none top-[-32.22%] w-[104.85%]" src={imgImage4} />
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.109] not-italic relative shrink-0 text-[#001c56] text-[16px] text-center w-full whitespace-pre-wrap">Arcos de Flores</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame14 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[13px] relative shrink-0 w-[106.6px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.6 13.0001">
        <g id="Frame 1618872251">
          <circle cx="6.5" cy="6.50014" fill="var(--fill-0, #101111)" id="Ellipse 17" r="6.5" />
          <circle cx="37.7" cy="6.5" fill="var(--fill-0, #101111)" id="Ellipse 18" r="6.5" />
          <circle cx="68.9" cy="6.5" fill="var(--fill-0, #283833)" id="Ellipse 19" r="6.5" />
          <circle cx="100.1" cy="6.5" fill="var(--fill-0, #101111)" id="Ellipse 20" r="6.5" />
        </g>
      </svg>
    </div>
  );
}

function Servicios() {
  return (
    <div className="bg-[#c6cfff] relative shrink-0 w-full" data-name="Servicios">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[49px] items-center justify-center px-[100px] py-[61px] relative w-full">
          <Frame13 />
          <Frame12 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.3)] content-stretch flex flex-col gap-[20px] items-start left-[86px] not-italic p-[20px] rounded-[16px] text-[rgba(255,255,255,0.9)] top-[81px] w-[487px] whitespace-pre-wrap" data-name="text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[52px] leading-[56px] relative shrink-0 text-[48px] w-full">{`Experiencia `}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-full">Discover the charm of vintage watches or invest in pre-owned timepieces that stand the test of time.</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[48px] relative shrink-0 w-[896px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-[448.28px] not-italic text-[#101111] text-[38px] text-center top-[0.5px] tracking-[0.3516px]">{`Let's talk about your event !`}</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#df0] content-stretch flex gap-[10px] items-center justify-center leading-[0] not-italic overflow-clip px-[20px] py-[16px] relative rounded-[8px] shrink-0 text-[16px] text-black whitespace-nowrap" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0">
        <p className="leading-none">Contact me</p>
      </div>
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center relative shrink-0">
        <p className="leading-none">arrow-right</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0">
      <Button6 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="h-[57px] relative shrink-0 w-[896px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[46px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Frame />
      <Footer1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#c6cfff] relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[20px] py-[100px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Gallery">
      <div className="h-[994px] relative shrink-0 w-full" data-name="image-1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
      <div className="h-[783px] relative shrink-0 w-full" data-name="image2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <Text />
      <Footer />
    </div>
  );
}

export default function DesktopLight() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Desktop - Light" style={{ backgroundImage: "linear-gradient(90deg, rgb(198, 207, 255) 0%, rgb(198, 207, 255) 100%), linear-gradient(90deg, rgb(1, 6, 27) 0%, rgb(1, 6, 27) 100%)" }}>
      <Header />
      <Hero />
      <Marcas />
      <Servicios />
      <Gallery />
    </div>
  );
}