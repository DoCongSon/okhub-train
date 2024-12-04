import GalleryItem from '@/components/GalleryItem'

const Section5 = () => {
  return (
    <div>
      <div>
        <p data-aos='fade-up' className='text-xs lg:text-base text-primary-70 leading-none'>
          DISCOVER
        </p>
        <h3
          data-aos='fade-up'
          data-aos-delay='100'
          className='text-[1.5rem] lg:text-[3rem] text-primary-70 leading-none mt-3'>
          THE GALLERY
        </h3>
      </div>
      <div className='flex justify-center gap-6 w-full px-4 lg:px-[6.25rem] mx-auto'>
        <GalleryItem image='/images/gallery1.png' title='People' />
        <GalleryItem image='/images/gallery2.png' title='Experience' />
        <GalleryItem image='/images/gallery3.png' title='Experience' />
        <GalleryItem image='/images/gallery4.png' title='Experience' />
      </div>
    </div>
  )
}

export default Section5
