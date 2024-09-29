import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface TrustCardProps{
    isSpecial: boolean
    name: string
    position: string
    company: string
    quote: string,
    imgSrc: string,
    className?: string
}

function TrustCard(
    {isSpecial, name, position, company, quote, imgSrc, className}: TrustCardProps
) {
  return (
    <div className='p-0'>
       {isSpecial ? (
         <Card className={cn(
                'p-4 w-full',
                className
         )}>
           <CardHeader>
                <CardTitle>
                    {company}
                </CardTitle>
           </CardHeader>
           <CardContent>
               {quote}
            </CardContent>
            <CardFooter className='flex items-center justify-between px-4'>
                <div className='flex flex-col items-center justify-between'>
                    <CardTitle>
                        {name}
                    </CardTitle>
                    <CardHeader>
                        {position}
                    </CardHeader>
                </div>
                <Image src={imgSrc} alt={name} width={50} height={50} className='rounded-full'/>
            </CardFooter>
         </Card>
       ) : (
        <Card className={cn(
                'p-4 w-full',
                className
        )}>
            <CardContent className=''>
                {quote}
            </CardContent>
            <CardFooter className='flex items-center justify-between px-4'>
                <div className='flex flex-col items-center justify-between'>
                    <CardTitle>
                        {name}
                    </CardTitle>
                    <CardHeader>
                        {position}
                    </CardHeader>
                </div>
                <Image src={imgSrc} alt={name} width={50} height={50} className='rounded-full'/>
            </CardFooter>
        </Card>
       )}
    </div>
  )
}

export default TrustCard