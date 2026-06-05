import React from 'react'
import Tittle from './Title'
import assets from '../assets/websites-Assets/assets/assets'
import { toast } from 'react-hot-toast'


const ContactUS = () => {

const onSubmit = async(event) => {
 event.preventDefault();
   
    const formData = new FormData(event.target);

    formData.append("access_key", "4f9de9ca-e11f-46d5-822c-cd42fb652cd5");
    //yeh access key hai jise web3forms par form create karne ke baad milega. Isse aapko apne form ke liye replace karna hoga web3forms par mila access key se.

    try{
      
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

console.log("Web3Forms Response:", data);

if (data.success) {
  toast.success("Form submitted successfully!");
  event.target.reset();
} else {
  toast.error(data.message || "Form submission failed.");
}

    }
    catch(error){
  // console.log("Error:", error);
  toast.error("An error occurred. Please try again.");
}

}
  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
      <Tittle title='Reach Out to Us'
        desc='Have questions or want to learn more? Get in touch with us!'/>

        <form onSubmit={onSubmit} className='grid grid-cols-2 sm:gap-5 max-w-2xl w-full'>

      <div>
<p className='mb-2 text-sm font-medium'>Your Name</p>
<div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
  <img src={assets.person_icon} alt="Person" />
  <input  name="name"type="text" placeholder="Enter your name" className="w-full p-3 text-sm outline-none" />
</div>
      </div>

<div>
<p className='mb-2 text-sm font-medium'>Email id</p>
<div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
  
  <img src={assets.email_icon} alt="" />
  <input name="email" type="email" placeholder="Enter your email" className="w-full p-3 text-sm outline-none" required />
</div>
      </div>

<div className="col-span-2">
  <p className="mb-2 text-sm font-medium">Your Message</p>

  <textarea
   name="message" 
    rows="8"
    placeholder="Type your message here"
    className="w-full p-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 outline-none resize-none h-32"
   required></textarea>
</div>

<button
  type="submit"
  className="col-span-2 mt-4 w-max flex items-center gap-2 bg-primary text-white px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all"
>
  Submit
  <img
    src={assets.arrow_icon}
    alt="Arrow"
    className="w-4 h-4"
  />
</button>
      </form>
    </div>
  )
}

export default ContactUS
