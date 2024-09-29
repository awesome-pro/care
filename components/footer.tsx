import Link from 'next/link';
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoSlack } from "react-icons/io5";


interface FooterLink{
    title: string
    href: string
}

const footerLinks: FooterLink[] = [
    {title: 'About', href: '/about'},
    {title: 'Privacy', href: '/privacy'},
    {title: 'Contact', href: '/contact'},
]

function Footer() {
  return (
    <footer className='w-screen bg-primary/10 text-primary/50 flex items-center justify-between lg:p-4 text-sm'>
        <div className='text-primary/80'>
            © 2023 Caresept Inc. All rights reserved.
        </div>
        <div className='flex items-center text-black/40 lg:gap-5'>
            {footerLinks.map((link, index) => (
                <Link key={index} href={link.href} className='hover:text-black/80'>
                    {link.title}
                </Link>
            ))}
        </div>
        <div className='flex items-center justify-center'>
            <Link href='https://www.linkedin.com/company/'>
                <FaLinkedin className='text-xl mx-2 hover:text-primary/90'/>
            </Link>
            <Link href='https://twitter.com/'>
                <FaTwitter className='text-xl mx-2 hover:text-primary/90'/>
            </Link>
            <Link href='https://slack.com/'>
                <IoLogoSlack className='text-xl mx-2 hover:text-primary/90'/>
            </Link>
        </div>
    </footer>
  )
}

export default Footer