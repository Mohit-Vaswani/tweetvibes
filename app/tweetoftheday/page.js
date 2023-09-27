"use client"

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import { Tweet } from 'react-tweet';
import React, { useState, useEffect } from 'react';
import Confetti from 'react-dom-confetti';

const Page = () => {
  const [confettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    // Automatically start the confetti animation when the component mounts
    setConfettiActive(true);

    // Stop the confetti animation after 5 seconds
    const timeoutId = setTimeout(() => {
      setConfettiActive(false);
    }, 10000); // 5000 milliseconds (5 seconds)

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 600, // Increase the number of confetti elements
    decay: 0.95,
  };

  return (
    <main className='w-9/12 mx-auto'>
      <Header />
      <Confetti active={confettiActive} config={confettiConfig} />
      <div className='tweet-list flex justify-center items-center'>
        <div
          className="tweet relative goldenTweet"
        >
          <Image
            src={
              'data:image/svg+xml,' +
              encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffaf02dc" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>'
              )
            }
            alt="bird"
            width={20}
            height={20}
            className="bird absolute top-0 left-0 z-10 m-3 ml-5"
          />
          <Tweet id="1706709030788276250" />
        </div>
      </div>
      <div className='fixed bottom-0 left-0 w-full flex justify-center'>
        <Footer />
      </div>

    </main>
  );
};

export default Page;


