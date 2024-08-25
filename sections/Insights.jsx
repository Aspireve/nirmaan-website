'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards';

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('posts.json');
        const data = await response.json();

        // Parse dates and sort posts
        const sortedPosts = data
          .map((post) => ({ ...post, date: new Date(post.date) }))
          .sort((a, b) => b.date - a.date)
          .slice(0, 3);

        setPosts(sortedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return posts;
};

const Insights = () => {
  const posts = usePosts();

  return (
    <>
      <section className={`${styles.paddings} relative z-10 py-0`}>
        <TypingText title="| Our Posts" />
        <TitleText title={<>Some of our Recent Posts</>} />
      </section>
      <div className="relative overflow-hidden rounded-md flex flex-col items-center justify-center dark:bg-grid-white/[0.05] antialiased">
        <InfiniteMovingCards items={posts} direction="right" speed="normal" />
      </div>

      <Link href="/Blog" className="flex justify-center mt-4">
        <TypingText title="View all our posts" />
      </Link>
    </>
  );
};

export default Insights;
