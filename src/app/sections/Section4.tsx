'use client'

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import TourCard from '@/components/TourCard'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'swiper/css'

const Section4 = () => {
  const [slideActive, setSlideActive] = useState(0)
  const swiper = useRef<SwiperRef | null>(null)

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 0,
      easing: 'ease',
      anchorPlacement: 'top-center',
    })
    AOS.refresh()
  }, [])

  return (
    <div className='relative w-full pb-4'>
      <p data-aos='fade-up' className='text-gray-scale-0 text-center text-xs lg:text-base mt-[2.12rem] lg:mt-[3.75rem]'>
        OUR
      </p>
      <p
        data-aos='fade-up'
        data-aos-delay='100'
        className='text-gray-scale-0 text-center text-[1.5rem] lg:text-[3rem] leading-[1.75rem] lg:leading-[3.6rem] lg:mt-4 mt-2'>
        GREAT TRIPS
      </p>
      <div className='md:hidden mt-[1.44rem] gap-3 px-6 flex justify-center'>
        <div
          onClick={() => {
            swiper.current?.swiper.slideTo(0)
          }}
          className={`inline-flex items-center justify-center px-5 py-3 gap-2 rounded-lg shadow-[0_4px_16px_0_rgba(0,0,0,0.06)] ${
            slideActive == 0 ? 'bg-primary-10' : 'bg-white'
          }`}>
          <Image src='/icons/icon-bike.svg' alt='icon' width={24} height={24} className='w-5 h-5' />
          <p className='font-poppins text-sm leading-5 font-semibold text-primary-80'>3 DAYS TOUR</p>
        </div>
        <div
          onClick={() => {
            swiper.current?.swiper.slideTo(1)
          }}
          className={`inline-flex items-center justify-center px-5 py-3 gap-2 rounded-lg shadow-[0_4px_16px_0_rgba(0,0,0,0.06)] ${
            slideActive == 1 ? 'bg-primary-10' : 'bg-white'
          }`}>
          <Image src='/icons/icon-bike.svg' alt='icon' width={24} height={24} className='w-5 h-5' />
          <p className='font-poppins text-sm leading-5 font-semibold text-primary-80'>4 DAYS TOUR</p>
        </div>
      </div>
      <div data-aos='zoom-in-up' className='md:hidden mt-6 px-6'>
        <Swiper
          ref={swiper}
          onSlideChange={(swiper) => {
            setSlideActive(swiper.activeIndex)
          }}
          slidesPerView={1}
          centeredSlides={true}>
          <SwiperSlide>
            <TourCard
              thumbnail='/images/card-1.png'
              groupSize='7 - 9 pax'
              pickup='Hanoi , Sapa, or Ha Giang'
              title='HA GIANG LOOP TOUR (3D3N)'
              transport='Sleeper bus & Motorbike with Local easy rider'
              selfDrivingPrice={169}
              localDrivePrice={199}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TourCard
              thumbnail='/images/card-2.png'
              groupSize='7 - 9 pax'
              pickup='Hanoi , Sapa, or Ha Giang'
              title='EPIC MOTORBIKE TOUR (4D4N)'
              transport='Sleeper bus & Motorbike with Local easy rider'
              selfDrivingPrice={169}
              localDrivePrice={199}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div data-aos='zoom-in-up' className='hidden md:flex gap-6 justify-center mt-[1.88rem] px-6'>
        <TourCard
          thumbnail='/images/card-1.png'
          groupSize='7 - 9 pax'
          pickup='Hanoi , Sapa, or Ha Giang'
          title='HA GIANG LOOP TOUR (3D3N)'
          transport='Sleeper bus & Motorbike with Local easy rider'
          selfDrivingPrice={169}
          localDrivePrice={199}
        />
        <TourCard
          thumbnail='/images/card-2.png'
          groupSize='7 - 9 pax'
          pickup='Hanoi, Sapa, or Ha Giang'
          title='EPIC MOTORBIKE TOUR (4D4N)'
          transport='Sleeper bus & Motorbike with Local easy rider'
          selfDrivingPrice={169}
          localDrivePrice={199}
        />
      </div>
      <div className='w-full absolute top-0 -z-10'>
        <Image src='/images/bg-section-4.png' alt='shape' width={800} height={300} className='w-full' />
        <div className='absolute top-0 bg-gradient-to-b from-transparent via-white/75 from-60% to-white w-full h-full' />
      </div>
    </div>
  )
}

export default Section4
