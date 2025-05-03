'use client'
import Image from 'next/image'
import { useState } from 'react'
import { FiMail, FiUsers } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='relative flex justify-center items-center  md:justify-between mt-4 md:mt-9 w-full max-w-6xl mx-auto'>
      <Image
        src='/images/logo.png'
        alt='Company Logo'
        width={174}
        height={74}
        sizes='(max-width: 640px) 120px, (max-width: 1024px) 150px, 174px'
        className='w-[120px] h-auto sm:w-[150px] lg:w-[174px]'
      />

      <div className='flex absolute right-4 md:hidden'>
        <GiHamburgerMenu onClick={toggleMenu} color='white' size={24} className='cursor-pointer' />
      </div>

      {isMenuOpen && (
        <div className='absolute top-0 right-0 w-full h-[250px] bg-black rounded-md shadow-lg z-10 md:hidden flex flex-col p-4'>
          <div className='flex justify-end'>
            <IoMdClose size={28} className='cursor-pointer text-white' onClick={toggleMenu} />
          </div>

          <nav className='flex flex-col mt-4 space-y-4 items-start'>
            <a
              href='#'
              className='flex items-center gap-2 text-white font-figs text-[18px] font-semibold hover:text-cyan-300 transition-colors'
            >
              <FiUsers size={20} className='text-white' />
              About us
            </a>
            <a
              href='#'
              className='flex items-center gap-2 text-white font-figs text-[18px] font-semibold hover:text-cyan-300 transition-colors'
            >
              <FiMail size={20} className='text-white' />
              Contact
            </a>
          </nav>
        </div>
      )}

      <div className='md:flex gap-5 hidden '>
        <a href='#' className='font-figs text-[18px] font-semibold cursor-pointer text-[#A9A9A9]'>
          About us
        </a>
        <a href='#' className='font-figs text-[18px] font-semibold cursor-pointer text-[#A9A9A9]'>
          Contact
        </a>
      </div>
    </div>
  )
}
