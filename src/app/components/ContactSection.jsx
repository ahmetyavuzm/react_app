import React from 'react'

import SocialButton from './SocialButton'
import { socialLinks } from '../utils'

import InputBox from './InputBox'
import TextArea from './TextArea'



const ContactSection = () => {
  return (
    <section id="contact-section" className="flex flex-col items-center justify-center mt-8">
    <div className='flex flex-col items-center justify-start md:items-start md:justify-around md:flex-row w-full h-full '>
        <div className='flex flex-col justify-center md:items-start items-center  w-[220px] sm:w-[300px] lg:w-[500px] text-center md:text-start  '>
            <h1 className='font-semibold text-md lg:text-2xl'>{`Let's Connect`}</h1>
            <p className='text-darktext text-sm lg:text-lg'>{`I'm currently looking for new opportunities, my inbox is always open. whether you have a question or just want to say hi, I'll try my best to get back to you!`}</p>

            <ul className="flex items-center justify-start mt-2 ">
              {socialLinks.map((social, index) => (
                <li key={index} className="mx-2 md:mx-0 md:mr-4 w-7 h-7 text-md lg:text-xl lg:w-10 lg:h-10">
                  <SocialButton
                    link={social.link}
                    icon={social.icon}
                    colors={social.colors}
                  />
                </li>
              ))}
            </ul>
            
        </div>

        <div className='w-10/12 h-full mt-8 sm:w-[300px] lg:w-[400px] md:mt-0'>
            <div className='mb-2 lg:mb-8'>
                <h1 className='text-md lg:text-2xl bg-black font-semibold text-gray-200'>Your email</h1>
                <InputBox className='text-sm lg:text-lg' type="email" placeholder='jacobs@example.com' validationRegex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/} />
            </div>
            <div className='mb-2 lg:mb-8'>
                <h1 className='text-md lg:text-2xl font-semibold text-gray-200'>Subject</h1>
                <InputBox className='text-sm md:text-lg' type="text" placeholder='Just saying hi' />
            </div>
            <div className='mb-2 lg:mb-8'>
                <h1 className='text-md lg:text-2xl font-semibold text-gray-200'>Message</h1>
                <TextArea className='text-sm lg:text-lg' rows="7" placeholder="Let's talk about..." />
            </div>
        </div>
    </div>
    </section>
  )
}

export default ContactSection