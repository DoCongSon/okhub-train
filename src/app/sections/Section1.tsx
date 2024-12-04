'use client'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import { useRef } from 'react'
import { gsap } from 'gsap'

const Section1 = () => {
  const textRef = useRef(null)

  useGSAP(() => {
    gsap.from(textRef.current, {
      y: '100%',
      x: '-50%',
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power1.out',
    })
  })

  return (
    <div className='w-full h-[49.3125rem] bg-[url("/images/banner.png")] bg-no-repeat bg-cover pt-[14.81rem] flex flex-col items-center px-4'>
      <div ref={textRef} className='w-[20rem] lg:w-[47.75rem] h-[9.5625rem] relative mx-auto'>
        <p className='text-[1.5rem] lg:text-[4rem] font-normal text-gray-scale-0 absolute top-[0.87rem] left-0'>
          BACKPACK UP
        </p>
        <p className='text-[3.75rem] lg:text-[8rem] font-tomatoes font-normal text-gray-scale-0 left-[6rem] top-[1.5rem] lg:left-[17.87rem] lg:top-[3rem] absolute'>
          and go
        </p>
      </div>
      <div className='mt-[15rem] mb-4 lg:inline-flex flex flex-col lg:flex-row gap-[1.875rem] rounded-[0.75rem] bg-white px-[1.875rem] py-[1.25rem] w-full lg:w-auto'>
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 items-center'>
          <div className='flex flex-col items-start w-full gap-2'>
            <p className='text-[0.875rem] font-normal text-gray-scale-50 leading-5 font-poppins'>TOUR</p>
            <div className='flex w-full lg:w-[16rem] justify-between items-center cursor-pointer'>
              <div className='flex gap-2 items-center'>
                <Image src='/icons/icon-location.svg' alt='location' width={20} height={20} className='w-7 h-7' />
                <p className='font-poppins text-[1rem] font-bold text-gray-scale-80 tracking-[0.005rem]'>
                  HAGIANG LOOP TOUR
                </p>
              </div>
              <div>
                <Image src='/icons/icon-arrow-down.svg' alt='arrow-down' width={20} height={20} className='w-4 h-4' />
              </div>
            </div>
          </div>
          <div className='w-full h-[1px] lg:w-[1px] lg:h-[2.125rem] bg-gray-scale-5' />
          <div className='flex gap-10 items-center w-full'>
            <div className='flex flex-1 flex-col items-start gap-2'>
              <p className='text-[0.875rem] font-normal text-gray-scale-50 leading-5 font-poppins'>SELF - DRIVING</p>
              <div className='flex w-full lg:w-[16rem] justify-between items-center'>
                <div className='flex gap-2 items-center'>
                  <Image src='/icons/icon-man.svg' alt='man' width={20} height={20} className='w-7 h-7' />
                  <p className='font-poppins text-[1rem] font-bold text-gray-scale-80 tracking-[0.005rem]'>2 pax</p>
                </div>
                <div>
                  <Image src='/icons/icon-arrow-top.svg' alt='arrow-top' width={20} height={20} className='w-4 h-4' />
                  <Image src='/icons/icon-arrow-down.svg' alt='arrow-down' width={20} height={20} className='w-4 h-4' />
                </div>
              </div>
            </div>
            <div className='hidden lg:block w-[1px] h-[2.125rem] bg-gray-scale-5' />
            <div className='flex flex-1 flex-col items-start gap-2'>
              <p className='text-[0.875rem] font-normal text-gray-scale-50 leading-5 font-poppins'>PRIVATE DRIVER</p>
              <div className='flex w-full lg:w-[16rem] justify-between items-center'>
                <div className='flex gap-2 items-center'>
                  <Image src='/icons/icon-man.svg' alt='man' width={20} height={20} className='w-7 h-7' />
                  <p className='font-poppins text-[1rem] font-bold text-gray-scale-80 tracking-[0.005rem]'>5 pax</p>
                </div>
                <div>
                  <Image src='/icons/icon-arrow-top.svg' alt='arrow-top' width={20} height={20} className='w-4 h-4' />
                  <Image src='/icons/icon-arrow-down.svg' alt='arrow-down' width={20} height={20} className='w-4 h-4' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className='flex justify-between lg:flex-col items-center lg:justify-center gap-1 px-6 py-3 font-poppins text-gray-scale-0 border border-primary-70 bg-primary-70 rounded-lg'>
          <span className='block text-[1.625rem] font-bold leading-8'>$299</span>
          <span className='block text-[0.875rem] font-bold leading-5'>BOOK NOW</span>
        </button>
      </div>
    </div>
  )
}

export default Section1
