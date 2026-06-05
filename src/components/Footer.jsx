import React from 'react'
import assets from '../assets/websites-Assets/assets/assets'

const Footer = ({ theme }) => {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
  {/*  right Footer content goes here */}
  <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>

<div className='space-y-5 text-sm text-gray-800 dark:text-gray-300'> 
<img src={ theme === 'dark' ? assets.logo_dark : assets.logo} alt="Logo" className='w-32 sm:w-44' />
<p className='max-w-md'>From strategy to execution, we craft digital solutions that move your business forward.</p>

<ul className='flex gap-8'>
   
<li><a href="#hero" className='hover:text-primary'>Home</a></li>
<li><a href="#services" className='hover:text-primary'>Services</a></li>
<li><a href="#our-work" className='hover:text-primary'>Our Work</a></li>
<li><a href="#contact-us" className='hover:text-primary'>Contact Us</a></li>

</ul>
</div>
 {/*  left Footertop content goes here */}
<div className='text-gray-600 dark:text-gray-400'>
  <h3 className='font-semibold'>Subscribe to our newsletter</h3>
  <p>
    The latest news, articles and resources sent to your inbox weekly
  </p>
<div className='flex gap-2 text-sm'>
  <input type="email" placeholder='Enter your email' className='p-3 rounded-lg outline-none text-gray-800 dark:text-gray-900 w-full sm:w-auto' />
  <button className='bg-primary text-white px-6 py-3 rounded-full hover:scale-105 transition-all'>Subscribe</button>


</div>
</div>
</div>
      
      <hr className='my-6 border-gray-300 dark:border-gray-600' />
      {/*   Footer bottom content goes here */}

     <div className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
      <p>Copyright © 2026 aditify. All rights reserved.</p>

      <div className='flex items-center justify-center gap-4'>
      <img src={assets.facebook_icon} alt="Facebook" className='w-5 h-5 cursor-pointer' />
      <img src={assets.twitter_icon} alt="Twitter" className='w-5 h-5 cursor-pointer' />
       <img src={assets.instagram_icon} alt="instagram" className='w-5 h-5 cursor-pointer' />
      <img src={assets.linkedin_icon} alt="LinkedIn" className='w-5 h-5 cursor-pointer' />


      </div>

      </div>
    </div>
  )
}

export default Footer
