'use client';

import React from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import GoogleMap from './GoogleMap';
import 'react-toastify/dist/ReactToastify.css';
import { TitleText } from './CustomTexts';

async function handleSubmit(event) {
  event.preventDefault();
  const data = {
    name: String(event.target.name.value),
    email: String(event.target.email.value),
    message: String(event.target.message.value),
  };

  const serviceID = process.env.SERVICE_ID;
  const templateID = process.env.TEMPLATE_ID;
  const publicKey = process.env.PUBLIC_KEY;

  console.log(data);
  emailjs.send(serviceID, templateID, data, publicKey).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      event.target.reset();
      document.getElementById('submit').style.backgroundColor = '#25618B';
      toast.success('Message Sent', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    },
    (err) => {
      console.log('FAILED...', err);
      toast.error('Message Not Sent', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    },
  );
}

const ContactForm = () => (
  <div className="text-white bg-black ">
    <TitleText title={<>Contact Us</>} textStyles="text-left md:px-10 px-10" />
    <div className="flex xl:justify-evenly md:px-10 px-10 flex-wrap justify-center">
      <div className="flex-1 text-lg ">
        <div className="flex px-6">
          <img src="https://utfs.io/f/O1Z0nCiJ5QIDNN4Hhvj3qBkA8otKbdQpyPGlSaLsnCF4wej5" alt="" className="w-16" />
          <a href="maito:contact@nirmaanhyperloop.com" className="m-3">
            {' '}
            contact@nirmaanhyperloop.com
          </a>
        </div>
        <div className="flex mt-3 px-6">
          <img src="https://utfs.io/f/O1Z0nCiJ5QIDSz1SmLORq7mkC2DsEa8pM1UvcOTnrFldogLG" alt="" className="w-16 h-16" />

          <a href="tel:+919819240316" style={{ zIndex: 5 }}>
            <div className="m-3">+91 98 1924 0316</div>
            <div className="mx-3 -mt-2">Anjani Kumar Dubey</div>
            <div className="mx-3  text-sm">&#40;Team Leader&#41;</div>
          </a>

          <a href="tel:+917506927365" style={{ zIndex: 5 }}>
            <div className="m-3">+91 75069 27365</div>
            <div className="mx-3 -mt-2 ">J. Narman Bannu</div>
            <div className="mx-3  text-sm">&#40;Team Manager&#41;</div>
          </a>
        </div>
        <div className="flex mt-3 px-6">
          <img src="https://utfs.io/f/O1Z0nCiJ5QIDNOM4AY3j3qBkA8otKbdQpyPGlSaLsnCF4wej" alt="" className="w-16 h-14 " />
          <div className="m-3">
            Thakur College Of Engineering And Technology.A-Block, Thakur
            Educational Campus, Shyamnarayan Thakur Marg, Thakur Village,
            Kandivali(E). Mumbai - 400101.
          </div>
        </div>
        <div
          className="flex justify-center mt-6 w-[400px] md:w-[500px] px-10 mb-5"
          style={{ zIndex: 5 }}
        >
          <GoogleMap />
        </div>
      </div>

      <div className=" flex-1 md:ml-60 mt-10 md:mt-0 glasseffect rounded-3xl h-[500px] mb-5 ">
        <form onSubmit={handleSubmit} className="p-6 w-50">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-3xl mb-4 font-extralight">
              Name
            </label>
            <input
              className="bg-none border-b border-[#DFDFDF] outline-none mb-6"
              type="text"
              minLength={4}
              maxLength={20}
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-3xl mb-4 font-extralight">
              Email
            </label>
            <input
              className="bg-none border-b border-[#DFDFDF] outline-none mb-6"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-3xl font-extralight mb-20">
              Message
            </label>
            <textarea
              className="bg-none border-b border-[#DFDFDF] outline-none"
              name="message"
              id="message"
              rows="2"
              minLength={10}
              placeholder="Enter your message"
              required
            />
          </div>
          <div className="flex justify-center items-center mt-5 ">
            <button
              className=" bg-fuchsia-700 p-2 rounded-3xl text-2xl font-thin mt-5 cursor-pointer"
              type="submit"
              value="Submit"
              id="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  </div>
);

export default ContactForm;
