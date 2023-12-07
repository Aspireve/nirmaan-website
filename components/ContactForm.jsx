"use client"
import React, { useState } from "react";
import GoogleMap from "./Googlemap";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


async function handleSubmit(event) {
    event.preventDefault();
    const data = {
        name: String(event.target.name.value),
        email:String(event.target.email.value),
        message: String(event.target.message.value),
    }
    
    serviceID = process.env.SERVICE_ID;
    templateID = process.env.TEMPLATE_ID;
    publicKey = process.env.PUBLIC_KEY;


    console.log(data);
    emailjs.send(serviceID,templateID,data,publicKey)
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text);
     event.target.reset();
     document.getElementById("submit").style.backgroundColor = "#25618B";
     toast.success('Message Sent', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      }); 

	}, (err) => {
	   console.log('FAILED...', err);
     toast.error('Message Not Sent', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
	});
    
}

function ContactForm(){

  return(
    <>    
    <div className="text-white bg-[#1A232E]">
      <div className="pt-10 px-6 text-6xl md:p-10 md:text-7xl mb-6 md:mb-0">Contact us</div>
      <div className="flex justify-evenly md:px-10 px-6 flex-wrap">
        <div className="flex-1 text-lg">
            <div className="flex"><img src="/email-48.png" alt="" className="w-16" /><a href="maito:contact@nirmaanhyperloop.com" className="m-3"> contact@nirmaanhyperloop.com</a></div>
            <div className="flex mt-3"><img src="/phone-48.png" alt="" className="w-16 "/><a href="tel:+123456789"><div className="m-3">+123 456 789</div></a></div>
           <div className="flex mt-3"><img src="/location-40.png" alt="" className="w-16 h-14 "/><div className="m-3">Thakur College Of Engineering And Technology.A-Block, Thakur
          Educational Campus, Shyamnarayan Thakur Marg, Thakur Village,
          Kandivali(E). Mumbai - 400101.</div></div>
          <div className="flex justify-center mt-6 w-[400px] md:w-[500px] px-10 mb-5"><GoogleMap/></div>
        </div>


        <div className=" flex-1 md:ml-60 mt-10 md:mt-0 glasseffect rounded-3xl h-[500px] mb-5 ">
        <form onSubmit={handleSubmit} className="p-6 w-50" >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-3xl mb-4 font-extralight" >Name</label>
              <input className="bg-none border-b border-[#DFDFDF] outline-none mb-6"
               type="text"
               minLength={4}
               maxLength={20} 
               placeholder="Enter your name" 
                name="name"
               required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-3xl mb-4 font-extralight">Email</label>
              <input className="bg-none border-b border-[#DFDFDF] outline-none mb-6"
              id="email"
               type="email" 
               email="email"
               placeholder="Enter your email"
                 
               required/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-3xl font-extralight mb-20">Message</label>
              <textarea className="bg-none border-b border-[#DFDFDF] outline-none"
               name="message" 
               id="message"
               rows="2" 
               message="message"
               minLength={10}
               placeholder="Enter your message" 
               required>
               </textarea>
            </div>
            <div className="flex justify-center items-center mt-5 ">
            <button className=" bg-fuchsia-700 p-2 rounded-3xl text-2xl font-thin mt-5 cursor-pointer"
             type="submit" 
             value="Submit" 
             id="submit"
             
             >Submit</button>
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
              >
              </ToastContainer>
        </div>
      </div>
      </div>
        </>
    )
}

export default ContactForm;