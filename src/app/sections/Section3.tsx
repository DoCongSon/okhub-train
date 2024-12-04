'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Button from '@/components/Button'
import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'swiper/css'

const Section3 = () => {
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
    <div className='flex justify-center lg:gap-8 lg:px-[3rem] px-4 w-full'>
      <div className='flex flex-col gap-7'>
        <div>
          <p data-aos='fade-up' className='text-xs lg:text-base text-primary-70 leading-none'>
            START WITH
          </p>
          <h3
            data-aos='fade-up'
            data-aos-delay='100'
            className='text-[1.5rem] lg:text-[3rem] text-primary-70 leading-none mt-3'>
            HA GIANG <br />
            CHEERS TOUR
          </h3>
        </div>
        <div data-aos='fade-left' className='block xl:hidden max-w-[35.4375rem] w-full'>
          <Image src='/images/vietnam.png' width={800} height={600} alt='vietnam' className='w-full object-contain' />
        </div>
        <div data-aos='fade-up' className='hidden md:grid grid-cols-2 gap-4'>
          <div className='w-[21.875rem] h-[6rem] bg-[url("/images/bg-tour.png")] bg-cover bg-no-repeat flex items-center justify-center'>
            <p className='font-poppins font-bold text-[0.875rem] text-primary-5'>SUPPORT LOCAL - SUSTAINABLE TRAVEL</p>
          </div>
          <div className='w-[21.875rem] h-[6rem] bg-[url("/images/bg-tour.png")] bg-cover bg-no-repeat flex items-center justify-center'>
            <p className='font-poppins font-bold text-[0.875rem] text-primary-5'>FREE 100% CANCELLATION</p>
          </div>
          <div className='w-[21.875rem] h-[6rem] bg-[url("/images/bg-tour.png")] bg-cover bg-no-repeat flex items-center justify-center'>
            <p className='font-poppins font-bold text-[0.875rem] text-primary-5'>DAILY DEPARTURES</p>
          </div>
          <div className='w-[21.875rem] h-[6rem] bg-[url("/images/bg-tour.png")] bg-cover bg-no-repeat flex items-center justify-center'>
            <p className='font-poppins font-bold text-[0.875rem] text-primary-5'>NO HAPPY - FULL REFUND</p>
          </div>
        </div>
        <div data-aos='fade-up' className='md:hidden w-[calc(100vw-2rem)]'>
          <Swiper modules={[Autoplay]} slidesPerView={1} centeredSlides={true} loop={true} autoplay={{ delay: 5000 }}>
            <SwiperSlide className='w-[21.875rem]'>
              <div className='w-[21.875rem] h-[6rem] bg-[url("/images/bg-tour.png")] bg-cover bg-no-repeat inline-flex items-center justify-center'>
                <p className='font-poppins font-bold text-[0.875rem] text-primary-5'>
                  SUPPORT LOCAL - SUSTAINABLE TRAVEL
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-[21.875rem]'>
              <div className='w-[21.875rem] h-[6rem] bg-[url("/images/bg-tour.png")] bg-cover bg-no-repeat inline-flex items-center justify-center'>
                <p className='font-poppins font-bold text-[0.875rem] text-primary-5'>FREE 100% CANCELLATION</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-[21.875rem] h-[6rem] bg-[url("/images/bg-tour.png")] bg-cover bg-no-repeat inline-flex items-center justify-center'>
                <p className='font-poppins font-bold text-[0.875rem] text-primary-5'>DAILY DEPARTURES</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-[21.875rem]'>
              <div className='w-[21.875rem] h-[6rem] bg-[url("/images/bg-tour.png")] bg-cover bg-no-repeat inline-flex items-center justify-center'>
                <p className='font-poppins font-bold text-[0.875rem] text-primary-5'>NO HAPPY - FULL REFUND</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div data-aos='fade-up' className='min-w-[20rem] max-w-[43rem]'>
          <p className='text-[0.875rem] text-justify md:text-left font-poppins leading-normal text-gray-scale-50 [&>b]:text-gray-scale-80 [&>b]:font-semibold'>
            The 3 Days Epic Ha giang Loop Tour with easy rider organized by <b>Vietnam Cheers Hostel</b> is a must in
            Vietnam for any traveller. It is considered a highlight of South East Asia.
            <br />
            <br />
            Explore <b>Ma Pi Leng</b>, one of The Big Four Passes in Vietnam, through thousands of conical limestone
            peaks as well as deep and meandering valleys. Party dinner, waterfall and local le at authentic{' '}
            <b>Cheers Du Gia Homestay</b>. will be the unique experience also. This is designed for adventure-seekers —
            those who want to experience the biggest challenge Vietnam has to offer in a safe environment with our
            experienced easy riders.
          </p>
        </div>
        <div className='flex gap-4'>
          <Button>BOOK NOW</Button>
          <Button status='line-default'>READ MORE</Button>
        </div>
      </div>
      <div className='hidden xl:block flex-1 max-w-[35.4375rem]'>
        <Image src='/images/vietnam.png' width={800} height={600} alt='vietnam' className='w-full object-cover' />
      </div>
    </div>
  )
}

export default Section3
