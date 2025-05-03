import Image from 'next/image'

export default function Header() {
  return (
    <div className='flex justify-between mt-9 max-w-5xl'>
      <Image
        src='/images/logo.png'
        alt='Company Logo'
        width={174}
        height={74}
        sizes='(max-width: 640px) 120px, (max-width: 1024px) 150px, 174px'
        className='w-[120px] h-auto sm:w-[150px] lg:w-[174px]'
      />
      <div className='flex gap-5'>
        <a href='#' className='text-[18px] font-semibold cursor-pointer text-[#A9A9A9]'>
          About us
        </a>
        <a href='#' className='text-[18px] font-semibold cursor-pointer text-[#A9A9A9]'>
          Contact
        </a>
      </div>
    </div>
  )
}
