'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import navlinks from '../constants/navlinks.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navbarRef = useRef(null);

  const toggleMobileNav = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleMouseEnter = useCallback((item) => setHoveredItem(item), []);
  const handleMouseLeave = useCallback(() => setHoveredItem(null), []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbarHeight = navbarRef.current?.offsetHeight || 0;
      setIsVisible(
        currentScrollY < lastScrollY.current || currentScrollY <= navbarHeight,
      );
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = useMemo(
    () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      navlinks.map((item, index) => (
        <h2
          key={index}
          className={`text-lg leading-[30px] font-bold text-white transition-opacity duration-300 lg:text-2xl ${
            hoveredItem && hoveredItem !== item.name
              ? 'opacity-25'
              : 'opacity-100'
          } ${!hoveredItem && 'opacity-65'}`}
          onMouseEnter={() => handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          <Link href={`${item.route}`}>{item.name}</Link>
        </h2>
      )),
    [hoveredItem, handleMouseEnter, handleMouseLeave],
  );

  return (
    <>
      <motion.nav
        ref={navbarRef}
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${
          styles.xPaddings
        } py-8 relative md:block hidden transition-transform duration-300 z-[1000] ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ zIndex: 5 }}
      >
        <div className="mx-auto flex flex-col sm:flex-row justify-between gap-8">
          <Image
            height={28}
            width={28}
            className="scale-[250%] object-contain"
            src="/logo-nobg.png"
          />
          {navItems}
        </div>
      </motion.nav>

      <div className="relative md:hidden flex justify-end items-center p-8 cursor-pointer z-50">
        <button
          type="button"
          onClick={toggleMobileNav}
          aria-label="Open navigation menu"
          className="w-8 h-8 flex items-center justify-center text-white rounded-full"
        >
          {isOpen ? (
            <span className="text-4xl">&times;</span>
          ) : (
            <span className="text-4xl">&#9776;</span>
          )}
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden flex justify-center z-50"
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          style={{ zIndex: 5 }}
        >
          <div className="absolute w-[30%] h-[50%] inset-0 gradient-01" />
          <div className="mx-auto my-8 px-8 flex flex-col justify-center space-y-8 text-white text-24px leading-30px">
            {navlinks.map((item, index) => (
              <h2
                key={index}
                className={`text-2xl text-center leading-[30px] font-bold text-white transition-opacity duration-300 ${
                  hoveredItem && hoveredItem !== item.name
                    ? 'opacity-50'
                    : 'opacity-100'
                }`}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={`/${item.route}`}>{item.name}</Link>
              </h2>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
