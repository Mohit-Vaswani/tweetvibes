"use client"

import React, { useEffect, useState } from 'react';
import { Tweet } from 'react-tweet';
import Image from 'next/image';
import { createClient } from '@supabase/supabase-js';
import { tags } from '@/data';
import {AiOutlineFire, AiOutlineHeart, AiOutlineCode} from "react-icons/ai"
import {MdAttachMoney, MdWorkOutline} from "react-icons/md"
import {BiBrain} from "react-icons/bi"
import {BsEmojiSmile} from "react-icons/bs"

const MainSection = () => {
  const [tweets, setTweets] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTags, setActiveTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

  const fetchTweets = async () => {
    const supabase = createClient(supabaseUrl, supabaseApiKey);
    const { data, error } = await supabase.from('tweets').select('*');

    if (error) {
      console.error('Error fetching tweet data:', error);
    } else {
      setTweets(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  const toggleTag = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags([tag]);
    }
  };

  const filteredTweets =
    selectedCategory === 'All'
      ? tweets
      : tweets.filter((tweet) => activeTags.some((tag) => tweet.tags.includes(tag)));

  return (
    <section className="tweetContainer h-full mb-20">
      <div className="tab-buttons flex gap-5 pb-10 text-xl items-center">
        <div className="pb-1 sm:pb-0 flex gap-5 text-xl overflow-x-auto">
          {tags.map((tag) => (
            <button
              key={tag.id}
              className={`tagsBtn ${
                activeTags.includes(tag.tagName) ? `border-sky-400` : 'border-black'
              }`}
              onClick={() => toggleTag(tag.tagName)}
            >
              <span>{tag.iconName}</span>
              {tag.tagName}
            </button>
          ))}
        </div>
      </div>
      <div className="tweet-list grid grid-cols-1 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          filteredTweets.map((tweet) => (
            <div
              key={tweet.id}
              className={`tweet relative flex ${
                activeTags.length > 0 && !activeTags.some((tag) => tweet.tags.includes(tag))
                  ? 'hidden'
                  : ''
              }`}
            >
              <Image
                src={
                  'data:image/svg+xml,' +
                  encodeURIComponent(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#00acee" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>'
                  )
                }
                alt="bird"
                width={20}
                height={20}
                className="bird absolute top-0 left-0 z-10 m-3 ml-5"
              />
              <Tweet id={tweet.tweetid} />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default MainSection;
