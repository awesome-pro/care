import Hero from '@/components/hero';
import Trust from '@/components/trust';
import React from 'react';

export default function Home() {
  return (
   <section className='w-screen min-h-screen flex flex-col items-center justify-between'>
      <Hero />
      <Trust />
   </section>
  );
}
