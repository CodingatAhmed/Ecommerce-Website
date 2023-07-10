"use client"
import NewsLetter from "@/app/components/newsletter";
import Footer from "@/app/components/footer";
import { Separator } from "@/components/ui/separator";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel from "@/app/components/carousel";
import React from "react";
import Link from "next/link"
import Sidebar from "@/app/components/sidebar";
import Image from "next/image"
import Slider from "react-slick" ;
import bird from "../../../../public/bird.jpg"
import Navbar from "@/app/components/Navbar";
import { Button } from "@/components/ui/button";
import { CarouselProvider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Input } from "@/components/ui/input";
export default function MenCollection(){

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className=" bg-slate-300">
    <h1 className="men-heading text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl pt-8 flex justify-center">Men's Collection</h1>
    <Separator className="mt-5 bg-black w-full"></Separator>
    <div className="carousel">
    <h1 className="text-6xl -mt-10 flex justify-center">Jeans</h1>
    <Slider {...settings}>
    <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg box">
  <Link href ="#"><Image height={200} width={300} className="h-60 w-full object-cover object-center" src={bird} alt="Front of men's Basic Tee in black." />
  <div className="p-0">
    <h2 className="text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <div className=" flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className=" text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
    </div>
    <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg box">
  <Link href ="#"><Image height={200} width={300} className="h-60 w-full object-cover object-center" src={bird} alt="Product Image" />
  <div className="p-0">
    <h2 className=" text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
    </div>
    <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg box">
  <Link href ="#"><Image height={200} width={300} className="h-60 w-full object-cover object-center" src={bird} alt="Product Image" />
  <div className="p-0">
    <h2 className=" text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>

    </div>
    <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg box">
  <Link href ="#"><Image height={200} width={300} className="h-60 w-full object-cover object-center" src={bird} alt="Product Image" />
  <div className="p-0 ">
    <h2 className=" text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
    </div>
    <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg box">
  <Link href ="#"><Image height={200} width={300} className="h-60 w-full object-cover object-center" src={bird} alt="Product Image" />
  <div className="p-0">
    <h2 className=" text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
    </div>
    <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg box">
        
  <Link href ="#"><Image height={200} width={300} className="h-60 w-full object-cover object-center" src={bird} alt="Product Image" />
  <div className="p-0">
    <h2 className=" text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
    </div>
    <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg box">
  <Link href ="#"><Image height={200} width={300} className="h-60 w-full object-cover object-center" src={bird} alt="Product Image" />
  <div className="p-0">
    <h2 className=" text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>

    </div>
    <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg box">
  <Link href ="#"><Image height={200} width={300} className="h-60 w-full object-cover object-center" src={bird} alt="Product Image" />
  <div className="p-0">
    <h2 className=" text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <div className=" flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>

    </div>
    </Slider>
    </div>
    {/* 1st carousel end */}
    {/* 2nd carousel start */}
    <Separator className="h-[0.5px] bg-black w-full"></Separator>
    <div className="carousel">
    <h1 className="text-6xl -mt-10 flex justify-center">Jeans</h1>
    <Slider {...settings}>
    <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg box">
  <Link href ="#"><Image height={200} width={300} className="h-60 w-full object-cover object-center" src={bird} alt="Product Image" />
  <div className="p-0">
    <h2 className="text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <div className=" flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className=" text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
    </div>
    <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg box">
  <Link href ="#"><Image height={200} width={300} className="h-60 w-full object-cover object-center" src={bird} alt="Product Image" />
  <div className="p-0">
    <h2 className=" text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
    </div>
    <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg box">
  <Link href ="#"><Image height={200} width={300} className="h-60 w-full object-cover object-center" src={bird} alt="Product Image" />
  <div className="p-0">
    <h2 className=" text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>

    </div>
    <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg box">
  <Link href ="#"><Image height={200} width={300} className="h-60 w-full object-cover object-center" src={bird} alt="Product Image" />
  <div className="p-0 ">
    <h2 className=" text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
    </div>
    <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg box">
  <Link href ="#"><Image height={200} width={300} className="h-60 w-full object-cover object-center" src={bird} alt="Product Image" />
  <div className="p-0">
    <h2 className=" text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
    </div>
    <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg box">
        
  <Link href ="#"><Image height={200} width={300} className="h-60 w-full object-cover object-center" src={bird} alt="Product Image" />
  <div className="p-0">
    <h2 className=" text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
    </div>
    <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg box">
  <Link href ="#"><Image height={200} width={300} className="h-60 w-full object-cover object-center" src={bird} alt="Product Image" />
  <div className="p-0">
    <h2 className=" text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>

    </div>
    <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg box">
  <Link href ="#"><Image height={200} width={300} className="h-60 w-full object-cover object-center" src={bird} alt="Product Image" />
  <div className="p-0">
    <h2 className=" text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <div className=" flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>

    </div>
    </Slider>
    </div>
    {/* 2nd carousel end */}
    {/* newsletter section and footer section in layout */}
    </div>
        
    )
}