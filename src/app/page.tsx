import Header from './components/Header'
import Hero from './components/hero/Hero'
import UpperHeader from './components/UpperHeader'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <UpperHeader />
      <div className='bg-[#010101] flex-1'>
        <div className='md:max-w-6xl mx-auto px-4'>
          <Header />
          <Hero />
        </div>
      </div>
    </div>
  )
}
