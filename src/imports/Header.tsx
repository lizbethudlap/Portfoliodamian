function Frame() {
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

function Frame1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[10px] items-center left-[1229px] top-[calc(50%-0.23px)]">
      <Button />
      <Button1 />
    </div>
  );
}

export default function Header() {
  return (
    <div className="relative size-full" data-name="Header" style={{ backgroundImage: "linear-gradient(90deg, rgb(198, 207, 255) 0%, rgb(198, 207, 255) 100%), linear-gradient(90deg, rgb(16, 17, 17) 0%, rgb(16, 17, 17) 100%)" }}>
      <p className="absolute font-['Neulis_Cursive:Semi_Bold',sans-serif] leading-[normal] left-[50px] not-italic text-[#001c56] text-[20px] top-[24px]">Damian Alcala</p>
      <Frame />
      <Frame1 />
    </div>
  );
}