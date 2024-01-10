"use client";
import React from "react";
import { socials } from "../constants";

const Footer = () => (
  <footer className="py-8 relative bg-gradient-to-t from-gray-800 to-transparent">
    <div className="container mx-auto flex flex-col gap-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h4 className="font-bold text-2xl text-white mb-4 sm:mb-0">
          Nirmaan Hyperloop
        </h4>
        <p className="font-light text-white text-center sm:text-left">
          © 2023 - 2024 Nirmaan HyperLoop. All rights reserved.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={social.url}
              alt={social.name}
              className="w-6 h-6 object-contain cursor-pointer"
            />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
