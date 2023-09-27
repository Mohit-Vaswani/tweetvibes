import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MainSection from '@/components/MainSection';
import React from 'react';

export default function Home() {
  return (
    <section className='w-10/12 md:w-9/12 mx-auto'>
      <Header/>
      <MainSection/>
      <div className='static bottom-0 left-0 w-full flex justify-center'>
        <Footer />
      </div>
    </section>
  );
}
