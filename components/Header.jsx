"use client"

import { FiSend } from "react-icons/fi";
import Image from "next/image";
import "./custom.css";
import Link from "next/link";
import { useState } from 'react';

const Header = () => {
  const [typeformLoaded, setTypeformLoaded] = useState(false);

  const openTypeform = () => {
    if (!typeformLoaded) {
      const script = document.createElement('script');
      script.src = '//embed.typeform.com/next/embed.js';
      script.async = true;

      script.onload = () => {
        setTypeformLoaded(true);
      };

      document.body.appendChild(script);
    }

    const div = document.createElement('div');
    div.dataset.tfWidget = 'VqoxcLxc';
    div.dataset.tfOpacity = '100';
    div.dataset.tfInlineOnMobile = true;
    div.dataset.tfIframeProps = 'title=Tweet Tagging Form';
    div.dataset.tfTransitiveSearchParams = true;
    div.dataset.tfAutoFocus = true;
    div.dataset.tfMedium = 'snippet';
    div.dataset.tfFullScreen = true;

    document.body.appendChild(div);
  };

  return (
    <header className="py-10 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl sm:text-4xl flex items-end gap-3 logoFont">TweetVibes
          <span>
            <Image
              src={
                'data:image/svg+xml,' +
                encodeURIComponent(
                  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#00acee" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224-.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>'
                )
              }
              alt="bird"
              width={30}
              height={30}
              className="bird"
            />
          </span>
        </h1>
      </Link>
      <ul className="flex gap-5 items-center">
        <Link href="/tweetoftheday" className="hidden sm:block text-xl text-violet-600">
          Tweet of the day 🥳
        </Link>
        <button className="btnSubmit flex items-center gap-2 font-medium" onClick={openTypeform}>
          <span className="hidden sm:block">Submit Tweet</span> <span className="p-1 sm:p-0"> <FiSend /> </span>
        </button>
      </ul>
    </header>
  );
};

export default Header;
