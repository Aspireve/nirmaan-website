"use client";

import { Footer, Navbar } from "../../components";
import { motion } from "framer-motion";
import {
  teamMentors,
  teamLeads,
  teamSoftware,
  teamElectronics,
  teamMechanical,
  teamBattery,
  teamPropulsion,
  teamSoftwareLead,
  teamElectronicsLead,
  teamBatteryLead,
  teamMechanicalLead,
  teamPropulsionLead,
  teamCreativesLead,
  teamCreatives,
  teamLeadstwo,
} from "../../constants";
import TeamMember from "../../components/Teammember";
import StarsCanvas from "../../components/Starscanvas";

const page = () => {
  return (
    <section className="w-screen h-full bg-black">
      <StarsCanvas />
      <Navbar />

      {/*About section*/}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="bg-black text-white py-4 md:py-16 lg:py-20"
      >
        <div
          className="container mx-auto sm:w-full text-center"
          style={{ zIndex: 5 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center"
            style={{ zIndex: 5 }}
          >
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 lg:w-1/3 mb-4 md:mb-0 mr-4 ml-4"
              style={{ zIndex: 5 }}
            >
              <img
                src="/teamabout.avif"
                alt="About Us"
                className="rounded-lg shadow-lg w-full h-full"
                style={{ zIndex: 5 }}
              />
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 lg:w-2/3 md:ml-8 sm:mr-4"
              style={{ zIndex: 5 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
                About Us
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                We are a team of aspiring engineers, pioneers, and dreamers. We
                aim to bring world-class technology and leading advancements to
                indigenous levels. Inspired by world leaders and thinkers, we
                intend to showcase our Talent on the global stage. We aim to
                compete in the competition to bring this concept of travel to
                reality as soon as possible.
              </p>

              <button
                className="bg-white text-black rounded-full px-6 py-3 font-semibold hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 mt-5 z-10"
                style={{ zIndex: 5 }}
              >
                <a href="#team">Meet Our Team</a>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/*Team section*/}
      <div className="bg-black" id="team">
        <div className="container mx-auto py-16">
          <h2 className="text-3xl font-semibold mb-8 text-white text-center">
            Our Leads
          </h2>
          <div className="flex flex-wrap -mx-4 mb-6 justify-center">
            {teamLeads.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>

          <div className="flex flex-wrap -mx-4 mb-6 justify-center">
            {teamLeadstwo.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>

          {/* <h2 className="text-3xl font-semibold mb-8 text-white text-center">
            Our Mentors
          </h2>
          <div className="flex flex-wrap -mx-4 mb-6">
            {teamMentors.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div> */}

          <h2 className="text-3xl font-semibold mb-8 text-white text-center">
            Software
          </h2>
          <div className="flex flex-wrap -mx-4 mb-6 justify-center">
            {teamSoftwareLead.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
          <div className="flex flex-wrap -mx-4 mb-6">
            {teamSoftware.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>

          <h2 className="text-3xl font-semibold mb-8 text-white text-center">
            Electronics
          </h2>
          <div className="flex flex-wrap -mx-4 mb-6 justify-center">
            {teamElectronicsLead.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
          <div className="flex flex-wrap -mx-4 mb-6">
            {teamElectronics.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>

          <h2 className="text-3xl font-semibold mb-8 text-white text-center">
            Propulsion
          </h2>
          <div className="flex flex-wrap -mx-4 mb-6 justify-center">
            {teamPropulsionLead.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
          <div className="flex flex-wrap -mx-4 mb-6">
            {teamPropulsion.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>

          {/* <h2 className="text-3xl font-semibold mb-8 text-white text-center">
            Battery
          </h2>
          <div className="flex flex-wrap -mx-4 mb-6 justify-center">
            {teamBatteryLead.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
          <div className="flex flex-wrap -mx-4 mb-6">
            {teamBattery.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div> */}

          <h2 className="text-3xl font-semibold mb-8 text-white text-center">
            Mechanical
          </h2>
          <div className="flex flex-wrap -mx-4 mb-6 justify-center">
            {teamMechanicalLead.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
          <div className="flex flex-wrap -mx-4">
            {teamMechanical.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>

          <h2 className="text-3xl font-semibold mb-8 text-white text-center">
            Creatives
          </h2>
          <div className="flex flex-wrap -mx-4 mb-6 justify-center">
            {teamCreativesLead.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
          <div className="flex flex-wrap -mx-4">
            {teamCreatives.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
