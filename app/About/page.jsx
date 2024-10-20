'use client';

import { motion } from 'framer-motion';
import { Footer } from '../../components';
import {
  teamMentors,
  teamLeads,
  teamManager,
  teamSoftware,
  teamElectronics,
  teamMechanical,
  teamPropulsion,
  teamSoftwareLead,
  teamElectronicsLead,
  teamMechanicalLead,
  teamPropulsionLead,
  teamCreativesLead,
  teamCreatives,
  teamLeadstwo,
  teamPrev,
} from '../../constants';
import TeamMember from '../../components/Teammember';
import { Button } from '../../components/ui/moving-border';
import { StickyScroll } from '../../components/ui/sticky-scroll';

const content = [
  {
    arr: teamMentors,
    content: (
      <div className="text-left h-full w-full flex items-center justify-center text-6xl font-bold text-white">
        Meet Our Mentors
      </div>
    ),
  },
  {
    arr: teamPrev,
    content: (
      <div className="text-left h-full w-full flex items-center justify-center text-6xl font-bold text-white">
        Our Past Stars
      </div>
    ),
  },
  {
    arr: teamLeads,
    content: (
      <div className="text-left h-full w-full flex items-center justify-center text-6xl font-bold text-white">
        Meet The Leads
      </div>
    ),
  },
  {
    arr: teamPrev,
    content: (
      <div className="text-left h-full w-full flex items-center justify-center text-6xl font-bold text-white">
        Sense And Control
      </div>
    ),
  },
  {
    arr: teamPrev,
    content: (
      <div className="text-left h-full w-full flex items-center justify-center text-6xl font-bold text-white">
        Propulsion And Levitation
      </div>
    ),
  },
  {
    arr: teamPrev,
    content: (
      <div className="text-left h-full w-full flex items-center justify-center text-6xl font-bold text-white">
        Mechanical And Brakes
      </div>
    ),
  },
  {
    arr: teamPrev,
    content: (
      <div className="text-left h-full w-full flex items-center justify-center text-6xl font-bold text-white">
        Research And Development
      </div>
    ),
  },
  {
    arr: teamPrev,
    content: (
      <div className="text-left h-full w-full flex items-center justify-center text-6xl font-bold text-white">
        Business And Outreach
      </div>
    ),
  },
];

const Page = () => (
  <>
    {/* About section */}
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className=" text-white py-4 md:py-16 lg:py-20 max-w-7xl mx-auto"
    >
      <div
        className="container mx-auto sm:w-full text-center"
        style={{ zIndex: 5 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center mx-auto"
          style={{ zIndex: 5 }}
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg md:w-1/2 lg:w-1/3 mb-4 md:mb-0 mr-4 ml-4 overflow-hidden"
            style={{ zIndex: 5 }}
          >
            <img
              src="/teamabout.avif"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-full hover:scale-110 transition-all duration-1000"
              style={{ zIndex: 5 }}
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 lg:w-1/2 md:ml-8 sm:mr-4"
            style={{ zIndex: 5 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              About Us
            </h2>
            <p className="text-base md:text-lg leading-relaxed pb-5">
              We are a team of aspiring engineers, pioneers, and dreamers. We
              aim to bring world-class technology and leading advancements to
              indigenous levels. Inspired by world leaders and thinkers, we
              intend to showcase our Talent on the global stage. We aim to
              compete in the competition to bring this concept of travel to
              reality as soon as possible.
            </p>

            <Button
              duration={2000}
              borderRadius="25rem"
              className="bg-white text-black font-bold py-2 px-6 rounded-full text-xl transition duration-300 ease-in-out transform border-2 hover:bg-transparent hover:text-white hover:shadow-lg"
            >
              Our Team
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
    <StickyScroll content={content} />

    {/* Team section */}
    {/* <div className="bg-black" id="team">
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-semibold mb-8 text-white text-center">
          Our Mentors
        </h2>
        <div className="flex flex-wrap -mx-4 mb-6 justify-center">
          {teamMentors.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>

        <h2 className="text-3xl font-semibold mb-8 text-white text-center">
          Previous Members
        </h2>
        <div className="flex flex-wrap -mx-4 mb-6 justify-center">
          {teamPrev.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>

        <h2 className="text-3xl font-semibold mb-8 text-white text-center">
          Our Leads
        </h2>
        <div className="flex flex-wrap -mx-4 mb-6 justify-center">
          {teamLeads.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>

        <div className="flex flex-wrap -mx-4 mb-6 justify-center">
          {teamManager.map((member, index) => (
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

    {/* <h2 className="text-3xl font-semibold mb-8 text-white text-center">
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
    </div> */}
    {/* <Footer /> */}
  </>
);

export default Page;
