import Image from 'next/image'

export default function UpperHeader() {
  return (
    <div className='py-2 bg-gradient-to-r from-[#FC004E] to-[#00e7f9] font-figs flex justify-center items-center px-8 md:px-0 sticky top-0 z-40'>
      <div className='flex gap-1'>
        <Image
          src='/images/rocket-icon.png'
          alt='Rocket icon'
          width={23}
          height={22}
          className='h-3 w-3 md:h-8 md:w-8'
        />
        <p className='text-[16px] md:text-[22px] font-bold text-[#00e7f9 '>
          FRESH BEGINNINGS SALE:
          <span className='text-[14px] md:text-[22px] font-bold text-white'>
            Extra 25% OFF, Limited Spots - start your journey today!
          </span>
        </p>
      </div>
    </div>
  )
}
