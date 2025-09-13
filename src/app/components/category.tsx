"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Added Pagination module

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import pagination styles

interface ImagePath {
  category: string;
  imagePaths: string[];
  isActive: boolean;
}

export default function Category() {
  const categorys: string[] = [
    "Residential", // Renamed 'Everyday' for clarity
    "Interior Design",
    "Exterior Works",
    "Landscaping", // Renamed 'Outdoor'
    "Renovations",
  ];

  const initialListOfImagePaths: ImagePath[] = [
    {
      category: "Residential",
      imagePaths: [
        "/backgroundIntro.jpg", // Replace with actual relevant images
        "/background1.jpg",
        "/backgroundIntro.jpg",
      ],
      isActive: true,
    },
    {
      category: "Interior Design",
      imagePaths: [
        "/background1.jpg", // Replace with actual relevant images
        "/backgroundIntro.jpg",
        "/backgroundIntro.jpg",
      ],
      isActive: false,
    },
    {
      category: "Exterior Works",
      imagePaths: ["/path/to/exterior1.jpg", "/path/to/exterior2.jpg"],
      isActive: false,
    },
    // Add more categories and image paths
  ];

  const [listOfImgAndCategories, setListOfImgAndCategories] = useState<
    ImagePath[]
  >(initialListOfImagePaths);

  const setActiveCategory = (selectedElement: string) => {
    const updatedListOfImagePaths = listOfImgAndCategories.map((el) => {
      if (el.category === selectedElement) {
        return { ...el, isActive: true };
      } else {
        return { ...el, isActive: false };
      }
    });
    setListOfImgAndCategories(updatedListOfImagePaths);
  };

  const getActiveListOfImagePaths = () => {
    const activeCategory = listOfImgAndCategories.find((el) => el.isActive);
    return activeCategory?.imagePaths || [];
  };

  return (
    <div className="mt-16 w-full">
      {" "}
      {/* Increased top margin */}
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Expertise
      </h2>{" "}
      {/* Stronger heading */}
      <ul className="flex flex-wrap justify-center gap-4 mb-10">
        {" "}
        {/* Centered categories with gap */}
        {categorys.map((el, index) => (
          <li key={index}>
            <button
              className={`py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out
                ${
                  listOfImgAndCategories.find(
                    (category) => category.category === el
                  )?.isActive
                    ? "bg-blue-600 text-white shadow-md" // Highlight active category
                    : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                }`}
              onClick={() => setActiveCategory(el)}
            >
              {el}
            </button>
          </li>
        ))}
      </ul>
      <div className="rounded-xl overflow-hidden shadow-lg">
        {" "}
        {/* Added shadow and rounded corners to the slider */}
        <Swiper
          navigation={true}
          pagination={{ clickable: true }} // Added pagination
          modules={[Navigation, Pagination]}
          spaceBetween={30} // Increased space between slides
          breakpoints={{
            640: {
              slidesPerView: 1, // Only one slide on small screens
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper" // Add a class for potential custom Swiper CSS
        >
          {getActiveListOfImagePaths().map((el, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-72 rounded-lg overflow-hidden group">
                {" "}
                {/* Added group for hover effects */}
                <Image
                  src={el}
                  layout="fill"
                  objectFit="cover"
                  alt={`Project image for ${
                    listOfImgAndCategories.find((c) => c.isActive)?.category ||
                    ""
                  }`}
                  className="transition duration-500 ease-in-out transform group-hover:scale-105" // Zoom on hover
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xl font-semibold">
                    View Project
                  </p>{" "}
                  {/* Call to action on hover */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
