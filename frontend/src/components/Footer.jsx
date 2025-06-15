import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Logo + Description */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="Prescripto Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:text-blue-600 hover:underline transition-all cursor-pointer'>Home</li>
            <li className='hover:text-blue-600 hover:underline transition-all cursor-pointer'>About us</li>
            <li className='hover:text-blue-600 hover:underline transition-all cursor-pointer'>Delivery</li>
            <li className='hover:text-blue-600 hover:underline transition-all cursor-pointer'>Privacy policy</li>
          </ul>
        </div>

        {/* Contact Links */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:text-blue-600 hover:underline transition-all cursor-pointer'>+1-212-456-7890</li>
            <li className='hover:text-blue-600 hover:underline transition-all cursor-pointer'>prescripto001@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center text-gray-500'>
          Copyright 2025 @ Prescripto.com - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
