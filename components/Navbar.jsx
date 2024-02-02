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
        style={{ zIndex: 5 }}
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div
          className={`</span>{styles.innerWidth} mx-auto flex flex-col sm:flex-row justify-between gap-8`}
          style={{ zIndex: 5 }}
        >
          <img
            src="/search.svg"
            alt="search"
            className="w-[24px] h-[24px] object-contain"
          />

          <h2
            className="font-extrabold text-[24px] leading-[30px] text-white z-20"
            style={{ zIndex: 5 }}
          >
            <Link href="/">HOME</Link>
          </h2>

          <h2
            className="font-extrabold text-[24px] leading-[30px] text-white"
            style={{ zIndex: 5 }}
          >
            <Link href="/About">ABOUT</Link>
          </h2>

          <h2
            className="font-extrabold text-[24px] leading-[30px] text-white z-20"
            style={{ zIndex: 5 }}
          >
            <Link href="/Timeline">TIMELINE</Link>
          </h2>
          <h2
            className="font-extrabold text-[24px] leading-[30px] text-white"
            style={{ zIndex: 5 }}
          >
            <Link href="/Pod">THE POD</Link>
          </h2>
          <h2
            className="font-extrabold text-[24px] leading-[30px] text-white"
            style={{ zIndex: 5 }}
          >
            <Link href="/Partners" style={{ zIndex: 5 }}>
              PARTNERS
            </Link>
          </h2>
          <h2
            className="font-extrabold text-[24px] leading-[30px] text-white"
            style={{ zIndex: 5 }}
          >
            <Link href="/Contact" style={{ zIndex: 5 }}>
              CONTACT
            </Link>
          </h2>
        </div>
      </motion.nav>

      {/* Mobile navigation icon & toggle */}
      <div className="md:hidden flex justify-end items-center p-2">
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
        >
          <div className="absolute w-[30%] h-[50%] inset-0 gradient-01" />
          <div
            className="mx-auto my-8 px-8 flex flex-col justify-center space-y-8 text-white text-24px leading-30px"
            style={{ zIndex: 5 }}
          >
            <Link
              href="/"
              onClick={toggleMobileNav}
              style={{ zIndex: 5 }}
              className="font-semibold text-[20px] leading-[30px] text-white"
            >
              HOME
            </Link>

            <Link
              href="/About"
              onClick={toggleMobileNav}
              style={{ zIndex: 5 }}
              className="font-semibold text-[20px] leading-[30px] text-white"
            >
              ABOUT
            </Link>

            <Link
              href="/Timeline"
              onClick={toggleMobileNav}
              style={{ zIndex: 5 }}
              className="font-semibold text-[20px] leading-[30px] text-white"
            >
              TIMELINE
            </Link>
            <Link
              href="/Pod"
              onClick={toggleMobileNav}
              style={{ zIndex: 5 }}
              className="font-semibold text-[20px] leading-[30px] text-white"
            >
              THE POD
            </Link>
            <Link
              href="/Partners"
              onClick={toggleMobileNav}
              style={{ zIndex: 5 }}
              className="font-semibold text-[20px] leading-[30px] text-white"
            >
              PARTNERS
            </Link>
            <Link
              href="/Contact"
              onClick={toggleMobileNav}
              style={{ zIndex: 5 }}
              className="font-semibold text-[20px] leading-[30px] text-white "
            >
              CONTACT
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
