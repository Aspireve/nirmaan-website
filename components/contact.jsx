import React from 'react';
import { TitleText, TypingText } from './CustomTexts';
import { Input } from './ui/input';
import { Textarea } from './ui/testarea';

const Contact = () => (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-40">
    <div className="absolute w-1/2 top-0 right-0 bg-black  from-black to-transparent shadow-2xl shadow-[#333] rounded-lg p-8 text-[#aaa] overflow-y-auto h-full scrollbar-hide">
      <button
        type="button"
        className="absolute top-10 right-10 text-white text-4xl"
        aria-label="Close"
      >
        &times;
      </button>
      <TitleText
        title="Contact Us"
        className="text-2xl md:text-3xl font-bold mb-6 text-black"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="py-2 text-sm md:text-lg">
            Name
          </label>
          <Input
            type="text"
            id="name"
            placeholder="Your name"
            className="p-3 text-white rounded-lg transition-all duration-300"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="py-2 text-sm md:text-lg">
            Email
          </label>
          <Input
            type="email"
            id="email"
            placeholder="someone@mail.com"
            className="p-3 text-white rounded-lg transition-all duration-300"
          />
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="message" className="py-2 text-sm md:text-lg">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Type your message here"
          className="w-full h-32 p-3 text-white rounded-lg transition-all duration-300"
        />
      </div>
      <div className="mt-10">
        {/* <TypingText title="Our Details" /> */}
        <div className="flex flex-col md:flex-row gap-10 mt-6">
          <iframe
            title="Google Map to TCET"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7457230581153!2d72.87203067466831!3d19.206305347869947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1724773422421!5m2!1sen!2sin"
            className="w-full md:w-1/2 h-64 rounded-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-white text-sm md:text-lg">
                Phone: +91 932666 7946
              </p>
              <p>Anjanikumar Dubey (Captain)</p>
            </div>
            <div>
              <p className="text-white text-sm md:text-lg">
                Phone: +91 932666 7946
              </p>
              <p>J. Narman Bannu (Manager)</p>
            </div>
            <p className="text-white text-sm md:text-lg">
              Email: contact@nirmaanhyperloop.com
            </p>
            <p className="text-white text-sm md:text-lg">
              Address: TCET, A-Block, Gate No 5, Thakur Educational Campus,
              Thakur Rd, Thakur Village, Kandivali East, Mumbai, Maharashtra
              400101
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
