// insights.jsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "../styles";
import { slideIn, staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const Insights = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("posts.json");
        const data = await response.json();

        // Parse the date string to create Date objects
        const postsWithDateObjects = data.map((post) => ({
          ...post,
          date: new Date(post.date),
        }));

        // Sort posts by date in descending order
        const sortedPosts = postsWithDateObjects.sort(
          (a, b) => b.date - a.date
        );

        // Get the latest 3 posts
        const latestPosts = sortedPosts.slice(0, 3);

        setPosts(latestPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <motion.section
      className={`${styles.yPaddings} sm:pl-2.5 pl-1.5`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TypingText title="|Our Posts" />
      <TitleText title={<>Some of our Recent Posts</>} />
      <br></br>
      <div
        className={`${styles.innerWidth} mx-auto flex flex-col justify-center items-center`}
      >
        {posts.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <motion.div
            variants={slideIn("right", "tween", 0.8, 1)}
            className="flex flex-wrap justify-center items-center"
          >
            {posts.map((post, index) => (
              <motion.div
                key={index}
                variants={slideIn("up", "tween", 0.8, 1)}
                className="w-full sm:w-1/2 md:w-1/3 p-4 mx-auto"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={`/images/${post.image}`}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />

                  <div className="px-6 py-4 bg-white">
                    <div className="font-bold text-xl mb-2">{post.title}</div>
                    <p className="text-gray-700 text-base">{post.caption}</p>
                    <p className="text-gray-500 text-base mt-2">
                      <span className="font-bold">Posted by:</span>{" "}
                      {post.username}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Insights;
