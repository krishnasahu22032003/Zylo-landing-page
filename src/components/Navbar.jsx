
import React, { useRef, useState,useEffect } from 'react'
import {useWindowScroll} from 'react-use';
import gsap  from 'gsap';
const navItems = ["Neural", "Timeline", "Features", "Simulation", "Transmission"];
const Navbar = () => {
      const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
    const { y: currentScrollY } = useWindowScroll();
      const [isaudioPlaying,setisaudioPlaying]=useState(false)
    const [isindicatorActive,setisindicatorActive]=useState(false)
    const navContainerRef=useRef(null)
    const audioelementref=useRef(null)

      useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
     
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);
    useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div ref={navContainerRef} className='fixed inset-x-0 h-16 border-none sm:inset-x-6 duration-700 top-4 z-50 transition-all' >
        <header className='absolute top-1/2 w-full -translate-y-1/2 ' >
        <nav className='flex size-full p-4 items-center justify-between' > 
<div className='flex gap-7 items-center' >
    <a href="#home">   <img src="/images/logo.png" alt="logo"  className='w-25 h-25 '  /></a>
 
</div>
<div className='flex h-full items-center' >
    <div className='hidden md:block' >
{navItems.map((item, index) => (
    <a
    
      key={index}
      href={`#${item.toLowerCase()}`}
      className="nav-hover-btn"
    >
      {item}
    </a>
))}
    </div>
</div>
        </nav>
        </header>
  
    </div>
  )
}

export default Navbar
