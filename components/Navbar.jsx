"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navbarRef = useRef(null);

  const toggleMobileNav = () => setIsOpen(!isOpen);

  const handleMouseEnter = (item) => setHoveredItem(item);
  const handleMouseLeave = () => setHoveredItem(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbarHeight = navbarRef.current?.offsetHeight || 0;
      if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        console.log("should be visible")
        setIsVisible(true);
      } else if (currentScrollY > navbarHeight) {
        console.log("Here")
        // Scrolling down and past the navbar
        setIsVisible(false);
      }
      console.log("pls be here")
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Original desktop navbar */}
      <motion.nav
        ref={navbarRef}
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative md:block hidden transition-transform duration-300 z-[1000] ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        style={{
          zIndex: 5,
        }}
      >
        <div
          className={` mx-auto flex flex-col sm:flex-row justify-between gap-8`}
          style={{ zIndex: 5 }}
        >
          <img
            src="/logo-nobg.png"
            alt="logo"
            className="w-[28px] h-[28px] scale-[250%] object-contain"
          />

          {["HOME", "TEAM", "TIMELINE", "THE POD", "PARTNERS", "CONTACT"].map((item, index) => (
            <h2
              key={index}
              className={`text-2xl leading-[30px] text-white transition-opacity duration-300 ${hoveredItem && hoveredItem !== item ? 'opacity-50' : 'opacity-100'}`}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
              style={{ zIndex: 5 }}
            >
              <Link href={`/${item === "HOME" ? "" : item}`}>{item}</Link>
            </h2>
          ))}
        </div>
      </motion.nav>

      {/* Mobile navigation icon & toggle */}
      <div
        className="md:hidden flex justify-end items-center p-2"
        style={{ zIndex: 5 }}
      >
        <button
          onClick={toggleMobileNav}
          aria-label="Open navigation menu"
          className="w-8 h-8 flex items-center justify-center text-white border border-white rounded-full"
          style={{ zIndex: 5 }}
        >
          <span className="text-3xl">&#9776;</span>
        </button>
      </div>

      {/* Mobile navigation links (only shown when open) */}
      {isOpen && (
        <motion.div
          className="md:hidden flex justify-center"
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          style={{ zIndex: 5 }}
        >
          <div
            className="absolute w-[30%] h-[50%] inset-0 gradient-01"
            style={{ zIndex: 5 }}
          />
          <div
            className="mx-auto my-8 px-8 flex flex-col justify-center space-y-8 text-white text-24px leading-30px"
            style={{ zIndex: 5 }}
          >
            {["HOME", "ABOUT", "BLOG", "TIMELINE", "THE POD", "PARTNERS", "CONTACT"].map((item, index) => (
              <h2
                key={index}
                className={`text-xl leading-[30px] text-white transition-opacity duration-300 ${hoveredItem && hoveredItem !== item ? 'opacity-50' : 'opacity-100'}`}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
                style={{ zIndex: 5 }}
              >
                <Link href={`/${item === "HOME" ? "" : item}`}>{item}</Link>
              </h2>
            ))}
          </div>
        </motion.div>
      )}
      {/* <marquee className="text-white text-xl underline cursor-pointer" onClick={() => window.location.href="https://drive.google.com/file/d/19h42fQqRFqE7XuB-liZHtZ8MhdMHQI8w/"}>Click here to view our Research Paper</marquee> */}
    </>
  );
}

export default Navbar;
