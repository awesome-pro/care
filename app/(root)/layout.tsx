import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'


interface RootLayoutProps{
    children: React.ReactNode
}

function RootLayout(
    {children}: RootLayoutProps
) {
  return (
    <section className='max-w-screen min-h-screen flex flex-col items-center justify-between'>
        <Navbar/>
        {children}
        <Footer/>
    </section>
  )
}

export default RootLayout