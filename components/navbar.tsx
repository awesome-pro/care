import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
  

const navLinks = [
    {
        name: 'About',
        href: '/'
    },
    {
        name: 'Pricing',
        href: '/pricing'
    },
    {
        name: 'Services',
        href: '/services'
    }
]

function Navbar() {
  return (
    <nav className='w-full max-h-[7vh] flex items-center z-50 justify-between pr-2 bg-white/10 dark:bg-black/10 backdrop-blur-sm  fixed top-0'>
        <Link className='flex items-center justify-start ' href={'/'}>
            <Image src='/logo3.svg' alt='logo' width={200} height={100} className='-ml-8'/>
            <span className='text-3xl font-bold text-primary -ml-24'>Caresept</span>
        </Link>
        <div className='flex items-center gap-5'>
            {navLinks.map((link, index) => (
                <Link key={index} href={link.href} className=''>
                    <Button className='hover:text-primary/90' variant={'ghost'}>{link.name}</Button>
                </Link>
            ))}
        </div>
        <div className='flex items-center gap-2'>
            <Button className='' variant={'ghost'}>Sign In</Button>
            <Button className='font-semibold relative group'>Get Started
            </Button>
        </div>
    </nav>
  )
}

export default Navbar