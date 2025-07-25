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
            <p>An eCommerce app is a user-friendly platform that enables customers  to shop online anytime, anywhere. It offers features like product browsing, secure payments, order tracking, and personalized recommendations. Designed for convenience and speed, the app enhances the shopping experience with intuitive navigation, fast checkouts, and responsive customer support.
</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>To deliver an exceptional online shopping experience by offering high-quality products, unbeatable value, and outstanding customer service. We aim to make shopping easy, enjoyable, and accessible for everyone, everywhere.</p>
           </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Ensures every product meets high standards for durability, comfort, and performance. We carefully inspect materials and craftsmanship to deliver only the best, so you can shop with confidence</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p  className='text-gray-600'>Enjoy ultimate convenience with our seamless shopping experience—easy navigation, quick checkout, multiple payment options, and fast delivery. Shop anytime, anywhere, with just a few taps on your device.
</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p  className='text-gray-600'>We pride ourselves on exceptional customer service—friendly support, quick responses, and hassle-free returns. Our dedicated team is here to ensure your shopping experience is smooth, satisfying, and stress-free.
</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About
