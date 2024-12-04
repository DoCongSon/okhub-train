'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
  const [showHeader, setShowHeader] = useState(true)
  const [showMenu, setShowMenu] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY) {
        setShowHeader(true) // Scroll up
      } else {
        setShowHeader(false) // Scroll down
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <header
      className={`hidden md:block fixed w-full px-6 z-10 top-6 transform transition-all duration-300 ${
        showHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
      <div className='mx-auto h-24 max-w-[87.5rem] px-[1.87rem] rounded-2xl bg-gray-scale-0 shadow-[0_0_2rem_0_rgba(0,0,0,0.4)] flex justify-between items-center'>
        <Image className='w-[4rem]' src='/logo.svg' alt='logo' width={80} height={80} />
        <nav className='hidden lg:block gap-10 items-center'>
          <ul className='flex gap-10 items-center'>
            {navItems.map((item) => (
              <li
                key={item.name}
                className='text-gray-scale-80 hover:text-primary-50 group flex flex-col items-center gap-0.5 transition-all relative'>
                <Link className='group-hover:animate-navbar-hover' href={item.url}>
                  {item.name}
                </Link>
                <div className='w-2 h-2 rounded-full bg-primary-50 group-hover:block opacity-0 group-hover:opacity-100 absolute bottom-0 left-1/2 transform -translate-x-1/2' />
              </li>
            ))}
          </ul>
        </nav>
        <div className='gap-2 hidden lg:flex'>
          <Link href='/#' className='flex items-center justify-center w-7 h-7 bg-primary-70 rounded-full'>
            <Image src='/icons/icon-facebook.svg' alt='fb' width={20} height={20} />
          </Link>
          <Link href='/#' className='flex items-center justify-center w-7 h-7 bg-primary-70 rounded-full'>
            <Image src='/icons/icon-youtube.svg' alt='fb' width={20} height={20} />
          </Link>
        </div>
        <Image
          src='/icons/icon-menu.svg'
          alt='menu'
          width={100}
          height={100}
          className='w-[2rem] lg:hidden cursor-pointer'
          onClick={() => setShowMenu(true)}
        />
        <div
          className={`lg:hidden absolute top-[-1.5rem] left-0 bg-white w-screen h-screen transform transition-all duration-300 ${
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
      </div>
    </header>
  )
}

export default Header
