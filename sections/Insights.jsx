// insights.jsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const Insights = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/posts.json");
        const data = await response.json();
        setPosts(data);
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
        <motion.div
          variants={slideIn("right", "tween", 0.8, 1)} // Increased duration to 0.4 seconds
          className="flex flex-wrap justify-center items-center"
        >
          {posts.slice(0, 3).map((post, index) => (
            <motion.div
              key={index}
              variants={slideIn("up", "tween", 0.8, 1)} // Increased duration to 0.4 seconds
              className="w-full sm:w-1/2 md:w-1/3 p-4 mx-auto" // Added mx-auto to center horizontally
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
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Insights;
