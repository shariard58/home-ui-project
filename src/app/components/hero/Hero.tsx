import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'

type TextTypes = string

const optionsTexts: TextTypes[] = [
  'Start growing your influence right away—no waiting required!',
  'Create viral TikToks and Reels step by step with easy-to-follow lessons',
  'Use a Personal AI Worker to boost your content ',
  'Learn from expert-led courses designed for aspiring influencers',
]

export default function Hero() {
  return (
    <div className='mt-0 md:mt-6  flex flex-col md:flex-row md:justify-between text-white  px-[6px] md:px-0'>
      <div className='w-full p-0 order-1 md:order-0 '>
        <p className='text-center md:text-start text-[25px] md:text-[35px] font-bold text-white m-0 p-0 leading-tight'>
          Want to Turn Social Media Into a Profitable Career?
        </p>

        <p className='text-center md:text-start text-[25px] md:text-[35px] font-bold text-[#00E7F9] m-0 p-0 leading-tight [text-shadow:0_4px_4px_#FC004E]'>
          Discover your way to success
        </p>
        <p className='text-center md:text-start text-[25px] md:text-[35px] font-bold text-[#00E7F9] m-0 p-0 leading-tight [text-shadow:0_4px_4px_#FC004E]'>
          with Fametonic:
        </p>

        <div className='mt-4 flex flex-col gap-3'>
          {optionsTexts.map((text, index) => (
            <div key={index} className='flex gap-2 md:gap-4'>
              <Image
                src='/images/li-icon.png'
                alt='list-icon'
                width={23}
                height={22}
                className='h-6 w-8'
              />

              <p className='font-semibold text-[16px] font-figs text-white'>{text}</p>
            </div>
          ))}
        </div>

        {/* last section  */}
        <div className='mt-[20px] md:mt-[30px] flex flex-col gap-[20px] md:gap-[30px] pb-8'>
          <div className='w-full md:w-[300px] order-1 md:order-0 mx-auto md:mx-0'>
            <button className='relative bg-[#FC004E] rounded-[10px] h-[40px] w-full shadow-[2px_2px_10px_0px_#00E7F9]'>
              <div className='absolute inset-0 flex items-center justify-center gap-1'>
                <span className='text-[20px] font-bold text-white font-figs'>GET STARTED</span>
                <IoIosArrowForward size={18} color='white' />
              </div>
            </button>

            <p className='text-[12px] text-center mt-[2px] font-figs'>
              1-minute quiz for personalized Insights
            </p>
          </div>

          <div className='order-0 md:order-1'>
            <p className='font-figs text-center md:text-start text-[12px] font-medium text-[#ABABAB]'>{`By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms`}</p>
            <p className='font-figs text-center md:text-start text-[10px] font-medium text-[#ABABAB] mt-2'>
              Fametonic 2025 ©All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      <div className='relative h-[450px] md:h-[590px] w-full order-0 md:order-1'>
        <Image
          src='/images/bg-image.png'
          alt='Background image'
          fill
          sizes='(max-width: 640px) 100vw, 590px'
          className='object-cover'
          priority
        />
      </div>
    </div>
  )
}
