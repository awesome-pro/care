import React from 'react'
import TrustCard, { TrustCardProps } from './trust-card'

const TrustData: TrustCardProps[] = [
    {
        name: 'John Doe',
        position: 'CEO',
        company: 'Company',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna nec metus.',
        imgSrc: '/images/placeholder.png',
        isSpecial: true
    },
    {
        name: 'John Doe',
        position: 'CEO',
        company: 'Company',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna nec metus.',
        imgSrc: '/images/placeholder.png',
        isSpecial: true
    },
    {
        name: 'John Doe',
        position: 'CEO',
        company: 'Company',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna nec metus.',
        imgSrc: '/images/placeholder.png',
        isSpecial: true
    }
]
    

function Trust() {
  return (
   <section className='w-screen lg:h-screen p-4 grid grid-cols-3 items-center gap-x-3'>
        <div className='w-full h-full flex flex-col'>
            {/* <TrustCard className='w-[]'/>
            <TrustCard /> */}
        </div>
        <div className='w-full h-full'>
            {TrustData.map((data, index) => (
                <TrustCard key={index} {...data}/>
            ))}
        </div>
        <div className='w-full h-full'>
            Test
        </div>
   </section>
  )
}

export default Trust