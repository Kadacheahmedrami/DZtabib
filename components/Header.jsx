
import Link from "next/link";


import './hover.css';
import Image from "next/image";


const Header = () => {


  return (
    <div className="h-[88px] py-8 px-[7%] flex justify-center items-center w-full bg-white">
    
        {/* Logo - Preloaded image for faster load */}
        <div   className="gap-2 mr-auto flex justify-center items-center text-[30px] font-bold"> 
        <Image 
          src="/svg/logo.svg" 
          alt="logo" 
          width={60} 
          height={60} 
          priority // Ensures it loads faster (above-the-fold)
        />
              <Image 
      
      src="/png/tabib.png" 
      alt="logo" 
      width={160} 
      height={160} 
      priority // Ensures it loads faster (above-the-fold)
    />
    
        </div>
     

        {/* Desktop Navigation */}
        <div className="hidden mr-auto md:block">
        <ul className="menu-list  ">
          {["Dashboard", "services", "About", "Contact"].map((menuItem, index) => (
            <li key={index} className="menu-item">
              <a href={`pages/${menuItem}`} className="menu-link">
                {menuItem}
              </a>
            </li>
          ))}
        </ul>
        </div>
       





        {/* Desktop Buttons */}
        <div className="hidden flex-row gap-6 lg:flex lg:items-center">
  <a href="/pages/auth/signup">
    <button className="relative h-12 w-40 overflow-hidden border border-[#1376F8] text-[#1376F8] shadow-2xl transition-all   rounded-[10px] duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#1376F8] before:duration-300 before:ease-out hover:text-white hover:shadow-[0_4px_20px_#1376F8] hover:before:h-40 hover:before:w-40 hover:before:opacity-100">
      <span className="relative z-10">Sign Up</span>
    </button>
  </a>
  <a href="/pages/auth/login">
    <button className="relative h-12 w-40 overflow-hidden border border-[#1376F8] text-white hover:text-[#1376F8] rounded-[10px]  shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm bg-[#1376F8]  before:bg-white before:duration-300 before:ease-out  hover:shadow-[0_4px_20px_#1376F8] hover:before:h-40 hover:before:w-40 hover:before:opacity-100">
      <span className="relative z-10">Log In</span>
    </button>
  </a>
</div>



    
     
    
    </div>
  );
};

export default Header;
