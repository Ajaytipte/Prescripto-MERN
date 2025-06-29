import React from 'react'
import { assets } from '../assets/assets'
import { Clock, MapPin, HeartPulse } from 'lucide-react'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div className='text-xl my-8 text-center'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row gap-8 mb-20'>

        {/* Card 1 */}
        <div className='group border rounded-2xl shadow-md px-8 md:px-12 py-10 sm:py-16 flex flex-col items-center gap-5 text-[15px] text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer hover:scale-105'>
          <Clock size={36} className='text-primary group-hover:text-white transition-all duration-300' />
          <b className='text-lg'>EFFICIENCY</b>
          <p className='text-center'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        {/* Card 2 */}
        <div className='group border rounded-2xl shadow-md px-8 md:px-12 py-10 sm:py-16 flex flex-col items-center gap-5 text-[15px] text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer hover:scale-105'>
          <MapPin size={36} className='text-primary group-hover:text-white transition-all duration-300' />
          <b className='text-lg'>CONVENIENCE</b>
          <p className='text-center'>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        {/* Card 3 */}
        <div className='group border rounded-2xl shadow-md px-8 md:px-12 py-10 sm:py-16 flex flex-col items-center gap-5 text-[15px] text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer hover:scale-105'>
          <HeartPulse size={36} className='text-primary group-hover:text-white transition-all duration-300' />
          <b className='text-lg'>PERSONALIZATION</b>
          <p className='text-center'>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>

      </div>

    </div>
  )
}

export default About
