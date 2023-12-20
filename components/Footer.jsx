"use client";
import React from "react";
import { socials } from "../constants";

const Footer = () => (
  <footer className="py-8 relative bg-gradient-to-t from-gray-800 to-transparent">
    <div className="container mx-auto flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-2xl text-white">Nirmaan Hyperloop</h4>
        <p className="font-light text-white">
          © 2023 - 2024 Nirmaan HyperLoop. All rights reserved.
        </p>
      </div>

      <div className="flex gap-4">
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
