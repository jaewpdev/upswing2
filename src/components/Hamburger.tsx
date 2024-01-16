export default function HamburgerMenu({
    isOpen,
    setIsOpen,
  }: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) {
    return (
      <div className="flex items-center lg:hidden mr-2">
        <button className="relative group p-2 -mx-2" onClick={() => setIsOpen(!isOpen)}>
          <div className={`flex flex-col justify-between w-[20px] ${isOpen ? "h-[20px]" : "h-[16px]"} transform transition-all duration-300 origin-center overflow-hidden`}>
            <div className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left delay-100 ${isOpen && "translate-y-6 delay-100"}`}></div>
            <div className={`bg-black h-[2px] w-7 rounded transform transition-all duration-300 delay-75 ${isOpen && "translate-y-6"}`}></div>
            <div className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen && "translate-y-6"}`}></div>
  
            <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 ${isOpen && "translate-x-0 w-12"}`}>
              <div className={`absolute bg-black h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${isOpen && "rotate-45"}`}></div>
              <div className={`absolute bg-black h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${isOpen && "-rotate-45"}`}></div>
            </div>
          </div>
        </button>
      </div>
    );
  }
  