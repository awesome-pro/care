import React from 'react'
import { Button } from './ui/button'
import HeroVideoDialog from './ui/hero-video-dialog'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { Card } from './ui/card'

function Hero() {
  return (
    <section className='w-screen flex flex-col items-center justify-center min-h-[80vh]'>
        <h1 className='text-5xl font-semibold lg:mt-28 lg:mb-16'>
            1 stop solution for all your <span className='text-primary'>Client Needs</span>
        </h1>
        <div className='flex items-center gap-20 justify-center'>
            <Button className='font-semibold relative group'>
                Get Started
                <span className='ml-1 transition-opacity duration-200 opacity-0 group-hover:opacity-100'>
                    <ChevronDown size={18} className='-rotate-90'/>
                </span>
            </Button>
            
                <HeroVideoDialog
                    className=" max-w-[90%] md:max-w-[70%] lg:max-w-[40%]"
                    animationStyle="top-in-bottom-out"
                    videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                    thumbnailAlt="Hero Video"
                />
        </div>
    </section>
  )
}

export default Hero