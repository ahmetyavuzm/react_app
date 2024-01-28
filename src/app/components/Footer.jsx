import React from 'react'

const Footer = () => {
  return (
    <footer className=' flex items-center justify-center bg-background text-xs px-8 py-2 mt-10 text-darktext text-center md:text-start '>
        <div className='flex flex-col items-center justify-center w-[250px] sm:w-[350px] md:w-auto'>

        <div class="flex justify-center items-center flex-col md:flex-row md:justify-around h-1/2 ">
            <div class="footer-left m-2 w-full md:w-auto">
                <h3>Ahmet Yavuz Mutlu</h3>
                <div className='w-full bg-darktext h-[1px]'></div>
                <p>Tech Enthusiast and Problem Solver on a mission to make a positive impact through coding.</p>
            </div>
            
            <div class="m-2 w-full md:w-auto">
                <h3>Contact Info</h3>
                <div className='w-full bg-darktext h-[1px]'></div>
                <p >Email: ahmetyavuzm@gmail.com</p>
            </div>
        </div>

        <div class="footer-bottom mt-1">
            <p>&copy; 2024 My Portfolio. All rights reserved. | Designed by Ahmet Yavuz Mutlu</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer