import Image from 'next/image'

type TextTypes = string

const optionsTexts: TextTypes[] = [
  'Start growing your influence right away—no waiting required!',
  'Create viral TikToks and Reels step by step with easy-to-follow lessons',
  'Use a Personal AI Worker to boost your content ',
  'Learn from expert-led courses designed for aspiring influencers',
]

export default function Hero() {
  return (
    <div className='mt-6 flex justify-between text-white'>
      <div className='w-full border border-white p-0'>
        <p className='text-[35px] font-bold text-white m-0 p-0 leading-tight'>
          Want to Turn Social Media Into a
        </p>
        <p className='text-[35px] font-bold text-white m-0 p-0 leading-tight'>Profitable Career?</p>
        <p className='text-[35px] font-bold text-[#00E7F9] m-0 p-0 leading-tight [text-shadow:0_4px_4px_#FC004E]'>
          Discover your way to success
        </p>
        <p className='text-[35px] font-bold text-[#00E7F9] m-0 p-0 leading-tight [text-shadow:0_4px_4px_#FC004E]'>
          with Fametonic:
        </p>

        <div className='mt-4 flex flex-col gap-3'>
          {optionsTexts.map((text, index) => (
            <div key={index} className='flex gap-4'>
              <Image
                src='/images/li-icon.png'
                alt='list-icon'
                width={23}
                height={22}
                className='h-3 w-3 md:h-6 md:w-6'
              />

              <p className='font-semibold text-[16px] text-white'>{text}</p>
            </div>
          ))}
        </div>

        <div className='mt-[30px]'>
          <button className='bg-[#FC004E] rounded-[10px] h-[40px] w-[300px] shadow-[2px_2px_10px_0px_#00E7F9] flex items-center'>
            <span className='text-[20px] font-bold text-white'>GET STARTED</span>
            <span className='text-[20px] font-bold text-white ml-[2px]'> &gt;</span>
          </button>
        </div>
      </div>
      <div className='relative h-[590px] w-full'>
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
