import Image from 'next/image'
import React from 'react'

type GalleryItemProps = {
  image: string
  title: string
}

const GalleryItem = (props: GalleryItemProps) => {
  return (
    <div className='max-w-[19.3125rem] max-h-[26.75rem] md:max-w-[20.75rem] md:max-h-[28.75rem] rounded-xl md:rounded-2xl relative group overflow-hidden'>
      <Image
        src={props.image}
        alt='gallery'
        className='w-full h-full object-cover duration-300 transform group-hover:scale-110'
        width={300}
        height={500}
      />
      <div className='w-[11rem] h-[11rem] hidden md:flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:bg-[#CDE82B]/60 group-hover:backdrop-blur-[3px] transition-all duration-300'>
        <Image
          src='/images/gallery-round.svg'
          alt='round'
          width={200}
          height={200}
          className='absolute w-full h-full top-0 left-0 group-hover:opacity-0 transition-all duration-300'
        />
        <h3 className='text-gray-scale-0 font-semibold font-poppins text-xl leading-6'>{props.title}</h3>
      </div>
    </div>
  )
}

export default GalleryItem
