"use client";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Header() {
  const arr = [
    { link: "/", textLink: "Home" },
    { link: "/contact", textLink: "Contact" },
    { link: "/#about", textLink: "About" },
     { link: "/#Staff", textLink: "Staff" },
  ];
  const classHiddenToggler = () => {
    const barToggler = document.querySelector("#navUl");
    const iconToggler = document.querySelectorAll(".iconTogglerHeader");
    for (let i = 0; i < iconToggler.length; i++) {
      iconToggler[i].classList.toggle("max-md:hidden");
    }
    barToggler?.classList.toggle("max-md:scale-y-0");
    barToggler?.classList.toggle("max-md:scale-y-100");
  };
  return (
    <div className="flex z-40 w-full fixed bg-slate-700 justify-between items-center h-[15%]  text-3xl max-md:p-0 max-md:flex-col">
      <div className="flex w-full justify-between items-center px-4">
        <div className="flex items-center">
          <Image
            src="/adobeProb.png"
            width={140}
            height="0"
             className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto"
            alt=""
          />
        </div>
        <div>
          <FontAwesomeIcon
            onClick={classHiddenToggler}
            icon={faBars}
            style={{
              color: "#ffffff",
              width: "1em",
            }}
            className="md:hidden iconTogglerHeader"
          />
          <FontAwesomeIcon
            onClick={classHiddenToggler}
            icon={faDeleteLeft}
            style={{
              color: "#ffffff",
              width: "1em",
            }}
            className="md:hidden max-md:hidden iconTogglerHeader"
          />
        </div>
      </div>
      <div
        className="max-md:w-full z-30 max-md:origin-top  max-md:scale-y-0 mr-4 duration-700"
        id="navUl"
      >
        <ul
          className="flex max-md:flex-col duration-700 max-md:relative  max-md:h-[100%] max-md:w-full space-x-5 max-md:space-x-0 text-xl"
          // id="navUl"
        >
          <div className="max-md:absolute max-md:inset-0 max-md:bg-gray-950 max-md:bg-opacity-80 max-md:h-[100%]"></div>
          {arr.map(({ link, textLink }, elKey) => {
            return (
              <li
                key={elKey}
                className="md:py-4 w-full max-md:relative md:my-6 text-white"
              >
                <Link
                  onClick={classHiddenToggler}
                  href={link}
                  className="md:py-4  hover:py-2 hover:border-y-2 max-md:py-4 mt-6 sm:mt-0 duration-700 max-md:block  max-md:w-full max-md:text-center  "
                >
                  {textLink}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
