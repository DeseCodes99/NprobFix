"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faRoad,
  faRug,
  faScrewdriverWrench,
  faKitchenSet,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Popular() {
  const popularInRegionArr = [
    { iconStr: faHouse, text: "Additions & Remodels" },
    { iconStr: faRug, text: "Carpet Installation" }, // More descriptive
    { iconStr: faRoad, text: "Driveways & Patios" },
    { iconStr: faScrewdriverWrench, text: "Carpentry Services" },
    { iconStr: faKitchenSet, text: "Kitchen Renovations" },
    { iconStr: faRoad, text: "Concrete Works" }, // Example: changed to another relevant service
    { iconStr: faScrewdriverWrench, text: "Deck & Pergola Building" },
    { iconStr: faKitchenSet, text: "Bathroom Remodeling" },
    { iconStr: faHouse, text: "Commercial Fit-outs" },
    { iconStr: faRoad, text: "Excavation Services" },
    { iconStr: faScrewdriverWrench, text: "Tiling & Flooring" },
    { iconStr: faKitchenSet, text: "Waterproofing" },
  ];

  const popularOpinionToggler = () => {
    const popularOpinionSelector = document.querySelector("#popularOpinionDiv");
    const arrowSelector = document.querySelector(".arrowToggler");
    arrowSelector?.classList.toggle("rotate-180");
    popularOpinionSelector?.classList.toggle("hidden"); // Simple toggle hidden/visible
  };

  return (
    <div className="mb-16">
      {" "}
      {/* Increased bottom margin */}
      <div
        className="flex items-center gap-4 py-6 cursor-pointer justify-center" // Centered heading
        onClick={popularOpinionToggler}
      >
        <h2 className="text-3xl font-bold">Popular Services in Sydney</h2>{" "}
        {/* Stronger heading */}
        <FontAwesomeIcon
          icon={faArrowCircleDown}
          className="w-8 h-8 text-blue-600 arrowToggler transition-transform duration-500" // Styled arrow
        />
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-700 ease-in-out" // Better grid responsiveness and transition
        id="popularOpinionDiv"
      >
        {popularInRegionArr.map(({ iconStr, text }, key) => {
          return (
            <a
              key={key}
              href="#"
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 transition duration-300 ease-in-out transform hover:-translate-y-1" // Card-like design with hover effects
            >
              <FontAwesomeIcon
                icon={iconStr}
                className="w-12 h-12 text-blue-600 mb-4"
              />{" "}
              <p className="text-lg font-semibold text-center">{text}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
