import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox';


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
         <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
           <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
           <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p> Anyone is a modern eCommerce shopping application designed to provide users with a fast, secure, and intuitive online shopping experience. From browsing products to managing carts and completing orders, ShopEase delivers a seamless interface for both users and administrators.</p>
           <p> Anyone is a full-featured eCommerce web application built to bring a fast, personalized, and user-friendly shopping experience to your fingertips. Designed for modern consumers, ShopEase offers everything from product discovery to secure checkout, all wrapped in a sleek and responsive interface.</p>
           <b className='text-gray-800'>Our Mission</b>
           <p> our mission is to simplify and modernize the online shopping experience by building a fast, secure, and user-centric platform. We aim to empower both shoppers and sellers by providing a seamless, intuitive interface backed by powerful technology.</p>
           </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Quality assurance is a core part of the ShopEase development process. The application has been carefully tested to ensure reliability, performance, and user satisfaction across devices and use cases.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p  className='text-gray-600'> Easy Navigation Clean layout and intuitive product categorization help users find what they need quickly.Real-time cart management lets users add or remove items with a single click.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p  className='text-gray-600'>At Anyone, customer satisfaction is a top priority. The app is designed to not only offer a seamless shopping experience but also to ensure that users feel supported every step of the way.</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About
