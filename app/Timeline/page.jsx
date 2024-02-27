"use client";
// import "./App.css";
// import { ReactComponent as WorkIcon } from "./work.svg";
// import { ReactComponent as SchoolIcon } from "./school.svg";

import timelineElements from "../../data/timelineElements";
import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StarsCanvas from "../../components/Starscanvas";

function page() {
  // Uncomment or define workIconStyles and schoolIconStyles if needed
  // let workIconStyles = { background: "#06D6A0" };
  // let schoolIconStyles = { background: "#f9c74f" };

  console.log(timelineElements);

  return (
    <div className="bg-black">
      <StarsCanvas />
      <Navbar />
      <div className="text-5xl flex justify-center font-semibold items-center pb-10 pt-5 text-white">
        <div className="bg-purple-500 w-20 h-3"></div>
        <div className="px-3">TIMELINE</div>

        <div className="bg-purple-500 w-20 h-3"></div>
      </div>
      <div className="px-8">
        <VerticalTimeline lineColor={"#b9e4ed"}>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton = element.buttonText !== undefined;
            // let backgroundColor = (element.key % 2 === 0) ? "#94659c" : "#b9e4ed";
            return (
              <VerticalTimelineElement
                contentStyle={{
                  backgroundColor: element.id % 2 === 0 ? "#0797b8" : "#94659c",
                }}
                key={element.key}
                date={element.date}
                contentArrowStyle={{
                  borderRight: `7px solid  ${
                    element.id % 2 === 0 ? "#0797b8" : "#94659c"
                  }`,
                }}
                textClassName="text-white text-2xl"
                dateClassName="date text-white "
                iconStyle={{ background: "#47335B" }}
                icon={<img src="/stamp.png" alt="stamp" />}
              >
                {/* Title */}
                <h3
                  className="vertical-timeline-element-title "
                  style={{ color: "#3cfa02" }}
                >
                  {element.title}
                </h3>

                {/* location */}
                <h4
                  className="vertical-timeline-element-subtitle "
                  style={{ color: isWorkIcon ? "#06D6A0" : "#f9c74f" }}
                >
                  {element.location}
                </h4>

                {/* Description */}
                <p id="description">{element.description}</p>
                {showButton && (
                  <a
                    href={element.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`button 
                  }`}
                  >
                    {element.buttonText}
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
          <VerticalTimelineElement
            dateClassName="date text-white  text-4xl"
            iconStyle={{ background: "#47335B" }}
            icon={<img src="/star.png" alt="star" />}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
    </div>
  );
}

export default page;
