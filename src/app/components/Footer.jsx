import React from 'react'

const Footer = ({content}) => {

  return (
    <footer className=' flex items-center justify-center bg-background text-xs px-8 py-2 mt-10 text-darktext text-center md:text-start '>
        <div className='flex flex-col items-center justify-center w-[250px] sm:w-[350px] md:w-auto'>

        <div className="flex justify-center items-center flex-col md:flex-row md:justify-around h-1/2 ">
            <div className="footer-left m-2 w-full md:w-auto">
                <h3>{content["describe"]["name"]}</h3>
                <div className='w-full bg-darktext h-[1px]'></div>
                <p>{content["describe"]["description"]}</p>
            </div>
            
            <div className="m-2 w-full md:w-auto">
                <h3>{content["contact"]["title"]}</h3>
                <div className='w-full bg-darktext h-[1px]'></div>
                <p >E-mail: {content["contact"]["email"]}</p>
            </div>
        </div>

        <div className="footer-bottom mt-1">
            <p>{content["copy-right"]}</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer