import React, { useState } from 'react'

// Assets (images, icons, logos) ko import kiya gaya hai
import assets from '../assets/websites-Assets/assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'

/*
  Navbar Component

  Props:
  - theme      => current theme (light ya dark)
  - setTheme   => theme change karne ke liye function
*/
const Navbar = ({ theme, setTheme }) => {

  /*
    Sidebar open/close state

    false = sidebar band
    true  = sidebar open
  */
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (

    /*
      Main Navbar Container

      flex                 => items ko horizontal line me rakhta hai
      justify-between      => logo left aur baaki content right side
      items-center         => vertically center align

      px-*                 => left-right padding responsive way me
      py-4                 => top-bottom padding

      sticky top-0         => scroll karne par navbar top par chipka rahega
      z-20                 => navbar dusre elements ke upar rahega

      backdrop-blur-xl     => background blur effect

      bg-white/50          => light mode background
      dark:bg-gray-900/70  => dark mode background

      font-medium          => medium font weight
    */
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>

      {/*
        Theme ke according logo change hoga

        Agar theme dark hai:
        -> logo_dark show hoga

        Warna:
        -> normal logo show hoga
      */}
      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        className='w-32 sm:w-40'
        alt='Logo'
      />

      {/*
        Navigation Menu

        Desktop:
        - Horizontal menu

        Mobile:
        - Sidebar menu
        - sidebarOpen true hone par open hoga
        - false hone par width 0 ho jayegi
      */}
      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${
          !sidebarOpen
            ? 'max-sm:w-0 overflow-hidden'
            : 'max-sm:w-60 max-sm:pl-10'
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >

        {/*
          Close Button

          Mobile sidebar ko band karega
        */}
        <img
          src={assets.close_icon}
          alt='Close Menu'
          className='w-5 absolute right-4 top-4 sm:hidden cursor-pointer'
          onClick={() => setSidebarOpen(false)}
        />

        {/*
          Navigation Links

          # = page top
          #service = service section
          #our-work = our work section
          #contact-us = contact section
        */}
        <a  onClick={()=>setSidebarOpen(false)} href='#' className='sm:hover:border-b'>
          Home
        </a>

        <a  onClick={()=>setSidebarOpen(false)}href='#services' className='sm:hover:border-b'>
          Services
        </a>

        <a  onClick={()=>setSidebarOpen(false)}href='#our-work' className='sm:hover:border-b'>
          Our Work
        </a>

        <a  onClick={()=>setSidebarOpen(false)}href='#contact-us' className='sm:hover:border-b'>
          Contact Us
        </a>
      </div>

      {/*
        Right Side Controls

        - Mobile menu button
        - Contact button
      */}
      <div className='flex items-center gap-2 sm:gap-4'>

        {/*
          Menu Icon

          Sirf mobile me dikhega

          Click:
          sidebarOpen = true
        */}

        <ThemeToggleBtn theme={theme} setTheme={setTheme}/>
        <img
          src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
          alt='Menu'
          onClick={() => setSidebarOpen(true)}
          className='w-8 sm:hidden cursor-pointer'
        />

        {/*
          Connect Button

          Desktop par visible
          Mobile par hidden
        */}
        <a
          href='#contact-us'
          className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all'
        >
          Connect

          <img
            src={assets.arrow_icon}
            width={14}
            alt='Arrow'
          />
        </a>

      </div>
    </div>
  )
}

export default Navbar