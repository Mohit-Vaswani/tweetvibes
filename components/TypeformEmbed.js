"use client"

import React, { useEffect } from 'react';

const TypeformEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;

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
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(div);
      document.body.removeChild(script);
    };
  }, []);

  return <div />;
};

export default TypeformEmbed;
