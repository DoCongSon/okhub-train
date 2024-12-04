'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const HeaderMobile = () => {
  const [showBottomNav, setShowBottomNav] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBottomNav(true)
      } else {
        setShowBottomNav(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navBottomItems = [
    {
      name: 'Home',
      url: '/',
      icon: '/icons/icon-home.svg',
    },
    {
      name: 'Tour',
      url: '/tour',
      icon: '/icons/icon-motor.svg',
    },
    {
      name: 'Whatsapp',
      url: 'https://wa.me/6281234567890',
      icon: '/icons/icon-whatsapp2.svg',
    },
    {
      name: 'Book Now',
      url: 'mailto:abc@gmail.com',
      icon: '/icons/icon-mail.svg',
    },
    {
      name: 'Menu',
      icon: '/icons/icon-menu.svg',
    },
  ]

  const navItems = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About Us',
      url: '/about',
    },
    {
      name: 'Tour',
      url: '/tour',
    },
    {
      name: 'Destinations',
      url: '/destinations',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
    {
      name: 'FAQ',
      url: '/faq',
    },
    {
      name: 'Contact',
      url: '/contact',
    },
    {
      name: 'Vietnam cheers hostel',
      url: '/vietnam-cheers-hostel',
    },
  ]

  return (
    <>
      <header className='md:hidden absolute w-full px-4 top-6 flex justify-between items-center'>
        <Image className='w-[4rem]' src='/logo.svg' alt='logo' width={80} height={80} />
        <Image
          src='/icons/icon-menu.svg'
          alt='menu'
          width={100}
          height={100}
          className='w-[2rem] lg:hidden cursor-pointer'
          onClick={() => setShowMenu(true)}
        />
      </header>
      <div
        className={`md:hidden flex justify-between items-center fixed w-screen h-[3.5rem] px-4 py-3 bg-white z-10 bottom-0 transform transition-all duration-300 ${
          showBottomNav ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
        {navBottomItems.map((item, index) => {
          if (item.url)
            return (
              <Link href={item.url} key={index} className='flex flex-col items-center gap-[0.12rem] w-[3.25rem]'>
                <Image src={item.icon} width={24} height={24} alt={item.name} className='w-[0.87rem]' />
                <span className='text-[0.625rem] leading-4 text-primary-70 font-poppins font-medium'>{item.name}</span>
              </Link>
            )
          else
            return (
              <button
                onClick={() => setShowMenu(true)}
                key={index}
                className='flex flex-col items-center gap-[0.12rem] w-[3.25rem]'>
                <Image src={item.icon} width={24} height={24} alt={item.name} className='w-[0.87rem]' />
                <span className='text-[0.625rem] leading-4 text-primary-70 font-poppins font-medium'>{item.name}</span>
              </button>
            )
        })}
      </div>
      <div
        className={`lg:hidden fixed z-20 top-0 left-0 bg-white w-screen h-screen transform transition-all duration-300 ${
          showMenu ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
        <Image
          src='/icons/icon-close.svg'
          alt='close'
          width={100}
          height={100}
          className='w-8 h-8 absolute top-[1.56rem] right-[1rem] cursor-pointer'
          onClick={() => setShowMenu(false)}
        />
        <ul className='flex flex-col items-center gap-6 mt-[2rem]'>
          {navItems.map((item) => (
            <li key={item.name} className=''>
              <Link className='text-[1.25rem] leading-none text-gray-scale-80' href={item.url}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className='gap-[0.8rem] flex items-center justify-center mt-5'>
          <Link href='/#' className='flex items-center justify-center w-7 h-7 bg-primary-70 rounded-full'>
            <Image src='/icons/icon-facebook.svg' alt='fb' width={20} height={20} />
          </Link>
          <Link href='/#' className='flex items-center justify-center w-7 h-7 bg-primary-70 rounded-full'>
            <Image src='/icons/icon-youtube.svg' alt='fb' width={20} height={20} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default HeaderMobile
