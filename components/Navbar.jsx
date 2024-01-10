"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Link from "next/link";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative bg-black`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex flex-col sm:flex-row justify-between gap-8 bg-black`}
    >
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />

      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        HOME
      </h2>

      <h2
        className="font-extrabold text-[24px] leading-[30px] text-white"
        style={{ zIndex: 5 }}
      >
        <Link href="/About">ABOUT</Link>
      </h2>

      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        TIMELINE
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
        <Link href="/Partners" style={{ zIndex: 3 }}>
          PARTNERS
        </Link>
      </h2>
      <h2
        className="font-extrabold text-[24px] leading-[30px] text-white"
        style={{ zIndex: 5 }}
      >
        <Link href="/Contact" style={{ zIndex: 4 }}>
          CONTACT
        </Link>
      </h2>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
    <br></br>
  </motion.nav>
);

export default Navbar;
