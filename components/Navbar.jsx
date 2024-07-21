"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileNav = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Original desktop navbar (unchanged) */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative md:block hidden`}
        style={{
          zIndex: 5,
        }}
      >
        {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
        <div
          className={`</span>{styles.innerWidth} mx-auto flex flex-col sm:flex-row justify-between gap-8`}
          style={{ zIndex: 5 }}
        >
          <img
            // src="/search.svg"
            src="/logo-nobg.png"
            alt="search"
            className="w-[28px] h-[28px] object-contain"
          />

          <h2
            className="text-2xl leading-[30px] text-white z-20"
            style={{ zIndex: 5 }}
          >
            <Link href="/">HOME</Link>
          </h2>

          <h2
            className="text-2xl leading-[30px] text-white"
            style={{ zIndex: 5 }}
          >
            <Link href="/About">TEAM</Link>
          </h2>

          <h2
            className="text-2xl leading-[30px] text-white z-20"
            style={{ zIndex: 5 }}
          >
            <Link href="/Timeline">TIMELINE</Link>
          </h2>
          <h2
            className="text-2xl leading-[30px] text-white"
            style={{ zIndex: 5 }}
          >
            <Link href="/Pod">THE POD</Link>
          </h2>
          <h2
            className="text-2xl leading-[30px] text-white"
            style={{ zIndex: 5 }}
          >
            <Link href="https://drive.google.com/file/d/19h42fQqRFqE7XuB-liZHtZ8MhdMHQI8w/edit">
              RESEARCH
            </Link>
          </h2>
          <h2
            className="text-2xl leading-[30px] text-white"
            style={{ zIndex: 5 }}
          >
            <Link href="/Partners" style={{ zIndex: 5 }}>
              PARTNERS
            </Link>
          </h2>
          <h2
            className="text-2xl leading-[30px] text-white"
            style={{ zIndex: 5 }}
          >
            <Link href="/Contact" style={{ zIndex: 5 }}>
              CONTACT
            </Link>
          </h2>
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
            <h2
              className="text-2xl leading-[30px] text-white z-20"
              style={{ zIndex: 5 }}
            >
              <Link href="/">HOME</Link>
            </h2>

            <h2
              className="text-2xl leading-[30px] text-white"
              style={{ zIndex: 5 }}
            >
              <Link href="/About" style={{ zIndex: 5 }}>
                ABOUT
              </Link>
            </h2>

            <h2
              className="text-2xl leading-[30px] text-white"
              style={{ zIndex: 5 }}
            >
              <Link href="/Blog" style={{ zIndex: 5 }}>
                BLOG
              </Link>
            </h2>

            <h2
              className="text-2xl leading-[30px] text-white z-20"
              style={{ zIndex: 5 }}
            >
              <Link href="/Timeline">TIMELINE</Link>
            </h2>
            <h2
              className="text-2xl leading-[30px] text-white"
              style={{ zIndex: 5 }}
            >
              <Link href="/Pod">THE POD</Link>
            </h2>
            <h2
              className="text-2xl leading-[30px] text-white"
              style={{ zIndex: 5 }}
            >
              <Link href="/Partners" style={{ zIndex: 5 }}>
                PARTNERS
              </Link>
            </h2>
            <h2
              className="text-2xl leading-[30px] text-white"
              style={{ zIndex: 5 }}
            >
              <Link href="/Contact" style={{ zIndex: 5 }}>
                CONTACT
              </Link>
            </h2>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
