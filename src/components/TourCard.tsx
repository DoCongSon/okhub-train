'use client'
import Image from 'next/image'
import React from 'react'
import Button from './Button'

type TourCardProps = {
  thumbnail: string
  title: string
  pickup: string
  groupSize: string
  transport: string
  selfDrivingPrice: number
  localDrivePrice: number
}

const TourCard = (props: TourCardProps) => {
  return (
    <div className='inline-flex flex-col p-3 lg:p-4 gap-3 lg:gap-5 rounded-2xl lg:rounded-3xl shadow-tour-card bg-white'>
      <div className='w-full max-w-[37.8125rem] rounded-xl lg:rounded-2xl relative overflow-hidden'>
        <div className='w-full h-full bg-gradient-to-b from-transparent from-55% to-black absolute top-0 left-0' />
        <Image src={props.thumbnail} alt={props.title} width={600} height={400} className='' />
        <div className='absolute bottom-4 left-[1.44rem] flex flex-col lg:flex-row gap-2 lg:gap-10'>
          <div className='flex gap-2 items-end'>
            <h3 className='font-poppins text-white text-xl font-bold leading-6 lg:text-[2.125rem] lg:leading-10'>
              ${props.selfDrivingPrice}
            </h3>
            <div className='flex flex-col gap-1'>
              <p className='font-poppins font-semibold text-[0.8125rem] lg:text-[0.875rem] text-gray-scale-5 leading-[1.125rem] lg:font-bold lg:leading-5'>
                SELF - DRIVING
              </p>
              <div className='w-full h-[1px] lg:h-0.5 bg-gray-scale-0' />
            </div>
          </div>
          <div className='flex gap-2 items-end'>
            <h3 className='font-poppins text-white text-xl font-bold leading-6 lg:text-[2.125rem] lg:leading-10'>
              ${props.localDrivePrice}
            </h3>
            <div className='flex flex-col gap-1'>
              <p className='font-poppins font-semibold text-[0.8125rem] lg:text-[0.875rem] text-gray-scale-5 leading-[1.125rem] lg:font-bold lg:leading-5'>
                LOCAL - DRIVE
              </p>
              <div className='w-full h-[1px] lg:h-0.5 bg-gray-scale-0' />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className='font-poppins font-bold text-gray-scale-80 text-sm leading-5 lg:text-xl lg:leading-6 lg:font-semibold'>
          {props.title}
        </h2>
        <div className='flex flex-col gap-2 mt-2 lg:mt-3'>
          <div className='flex items-start gap-1'>
            <div className='flex items-center gap-[0.38rem]'>
              <Image src='/icons/icon-pickup.svg' alt='pick-up' width={20} height={20} className='w-4 h-4' />
              <p className='font-poppins text-primary-70 font-semibold text-[0.8125rem] lg:text-[0.875rem] leading-[1.125rem] lg:leading-[1.315rem]'>
                Pick up:
              </p>
            </div>
            <p className='font-poppins text-gray-scale-40 text-[0.8125rem] lg:text-[0.875rem] leading-[1.125rem] lg:leading-[1.315rem]'>
              {props.pickup}
            </p>
          </div>
          <div className='flex items-start gap-1'>
            <div className='flex items-center gap-[0.38rem]'>
              <Image src='/icons/icon-man.svg' alt='pick-up' width={20} height={20} className='w-4 h-4' />
              <p className='font-poppins text-primary-70 font-semibold text-[0.8125rem] lg:text-[0.875rem] leading-[1.125rem] lg:leading-[1.315rem]'>
                Group size:
              </p>
            </div>
            <p className='font-poppins text-gray-scale-40 text-[0.8125rem] lg:text-[0.875rem] leading-[1.125rem] lg:leading-[1.315rem]'>
              {props.groupSize}
            </p>
          </div>
          <div className='flex items-start gap-1'>
            <div className='flex items-center gap-[0.38rem]'>
              <Image src='/icons/icon-transport.svg' alt='pick-up' width={20} height={20} className='w-4 h-4' />
              <p className='font-poppins text-primary-70 font-semibold text-[0.8125rem] lg:text-[0.875rem] leading-[1.125rem] lg:leading-[1.315rem]'>
                Transport:
              </p>
            </div>
            <p className='flex-1 font-poppins text-gray-scale-40 text-[0.8125rem] lg:text-[0.875rem] leading-[1.125rem] lg:leading-[1.315rem]'>
              {props.transport}
            </p>
          </div>
        </div>
      </div>
      <div className='flex gap-3'>
        <Button>BOOK NOW</Button>
        <Button status='line-default'>TRAVEL DETAILS</Button>
      </div>
    </div>
  )
}

export default TourCard
