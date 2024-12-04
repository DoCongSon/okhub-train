'use client'

import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import useScreen from '@/hooks/useScreen'
gsap.registerPlugin(ScrollTrigger)

const Section2 = () => {
  const { size } = useScreen()

  useGSAP(() => {
    gsap.to('.video', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        once: true,
      },
    })
  })

  useGSAP(() => {
    gsap.to('.img-left', {
      left: '-15rem',
      position: 'absolute',
      width: '29.8125rem',
      opacity: 0,
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        once: true,
      },
    })

    gsap.to('.img-right', {
      position: 'absolute',
      right: '-15rem',
      opacity: 0,
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        once: true,
      },
    })

    gsap.to('.title-container', {
      top: `${size > 1024 ? `3.33rem` : '1.5rem'}`,
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        once: true,
      },
    })

    gsap.to('.text1', {
      color: '#FFF',
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        once: true,
      },
    })

    gsap.to('.text2', {
      color: '#FFF',
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        once: true,
      },
    })

    gsap.to('.text3', {
      color: '#FFf',
      fontSize: `${size > 1024 ? `2.44307rem` : '1.5rem'}`,
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        once: true,
      },
    })

    gsap.to('.control-video', {
      opacity: 1,
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        once: true,
      },
    })
  })

  return (
    <div className='w-full flex relative trigger'>
      <div className='img-left absolute top-0 -left-[5rem] flex flex-col items-start gap-[1.65rem]'>
        <div className='w-[15.5625rem] h-[15.5625rem] rounded-2xl relative'>
          <Image
            src='/images/ha-giang-4.png'
            alt='ha-giang-4'
            width={250}
            height={250}
            className='w-full h-full rounded-2xl'
          />
          <div className='w-full h-full bg-white/40 absolute top-0 left-0 rounded-2xl' />
        </div>
        <div className='w-[23.25rem] h-[23.25rem] rounded-2xl relative'>
          <Image
            src='/images/ha-giang-3.png'
            alt='ha-giang-3'
            width={250}
            height={250}
            className='w-full h-full rounded-2xl'
          />
          <div className='w-full h-full bg-white/40 absolute top-0 left-0 rounded-2xl' />
        </div>
      </div>

      <div className='flex flex-col items-center mx-auto'>
        <div className='absolute flex flex-col items-center title-container top-0'>
          <p className='text-xs lg:text-base text-primary-70 text1'>WELCOME TO</p>
          <p className='text-[1.5rem] lg:text-[3rem] leading-none text-primary-70 mt-2 lg:mt-3 text2'>HA GIANG LOOP</p>
          <p className='text-[#FFD772] font-tomatoes text-[7.95744rem] tracking-[0.07956rem] mt-4 lg:mt-[3rem] text3'>
            Vietnam
          </p>
        </div>
        <video
          className='w-[53rem] h-[29.8125rem] rounded-2xl object-cover mx-auto video'
          autoPlay
          preload='none'
          muted
          playsInline
          loop>
          <source src='/videos/demo.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <div className='absolute top-0 left-0 w-full h-full opacity-0 control-video'>
          <div className='flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 p-4 lg:p-[5.2rem]'>
            <Image
              src='/icons/icon-dot-arrow.svg'
              alt='ha-giang-5'
              width={50}
              height={50}
              className='w-[1.8rem] h-auto transform rotate-180'
            />
            <Image
              src='/icons/icon-dot-arrow.svg'
              alt='ha-giang-5'
              width={50}
              height={50}
              className='w-[1.8rem] h-auto'
            />
          </div>
          <div className='inline-flex flex-col md:flex-row gap-3 md:gap-[2.08rem] bottom-[1.46rem] absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2'>
            <div className='flex md:flex-col gap-2 items-center md:justify-center'>
              <Image
                src='/icons/icon-award.svg'
                alt='ha-giang-5'
                width={100}
                height={100}
                className='w-[2.5rem] h-[2.5rem] '
              />
              <div className='flex flex-col md:items-center'>
                <h4 className='text-[1rem] font-bold font-poppins text-gray-scale-0 leading-5'>Top #1</h4>
                <p className='text-[0.75em] font-poppins text-gray-scale-0'>Epic loop in Vietnam</p>
              </div>
            </div>
            <div className='flex md:flex-col items-center md:justify-center gap-2'>
              <Image
                src='/icons/icon-tour-map.svg'
                alt='ha-giang-5'
                width={100}
                height={100}
                className='w-[2.5rem] h-[2.5rem] '
              />
              <div className='flex flex-col md:items-center'>
                <h4 className='text-[1rem] font-bold font-poppins text-gray-scale-0 leading-5'>300 km</h4>
                <p className='text-[0.75rem] font-poppins text-gray-scale-0'>North of Hanoi</p>
              </div>
            </div>
            <div className='flex md:flex-col items-center md:justify-center gap-2'>
              <Image
                src='/icons/icon-bus.svg'
                alt='ha-giang-5'
                width={100}
                height={100}
                className='w-[2.5rem] h-[2.5rem] '
              />
              <div className='flex flex-col md:items-center'>
                <h4 className='text-[1rem] font-bold font-poppins text-gray-scale-0 leading-5'>8 hours</h4>
                <p className='text-[0.75rem] font-poppins text-gray-scale-0'>Bus drive</p>
              </div>
            </div>
          </div>
          <div className='w-[2.08333rem] h-[2.08333rem] p-[0.2rem] rounded-full border-white border-2 absolute bottom-5 lg:bottom-[3.13rem] right-4 lg:right-[5.21rem]'>
            <Image src='/icons/icon-sound.svg' alt='ha-giang-5' width={50} height={50} className='w-full h-full' />
          </div>
        </div>
      </div>

      <div className='img-right absolute top-0 -right-[3.5rem] flex flex-col items-end gap-[1.65rem]'>
        <div className='w-[23.25rem] h-[23.25rem] rounded-2xl relative'>
          <Image
            src='/images/ha-giang-1.png'
            alt='ha-giang-1'
            width={250}
            height={250}
            className='w-full h-full rounded-2xl'
          />
          <div className='w-full h-full bg-white/40 absolute top-0 left-0 rounded-2xl' />
        </div>
        <div className='w-[15.5625rem] h-[15.5625rem] rounded-2xl relative'>
          <Image
            src='/images/ha-giang-2.png'
            alt='ha-giang-2'
            width={250}
            height={250}
            className='w-full h-full rounded-2xl'
          />
          <div className='w-full h-full bg-white/40 absolute top-0 left-0 rounded-2xl' />
        </div>
      </div>
    </div>
  )
}

export default Section2
