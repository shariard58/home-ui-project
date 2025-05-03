import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Header() {
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
        <GiHamburgerMenu color='white' size={24} className='cursor-pointer' />
      </div>
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
