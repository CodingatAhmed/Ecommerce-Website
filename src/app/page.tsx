"use client"
import Sidebar from "./components/sidebar";
// import "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import Slider from "react-slick" ;
import Script from "next/script";
import Navbar from "../app/components/Navbar"
import Head from "next/head";

import {Separator} from "../components/ui/separator"
import Image from "next/image";
import Link from "next/link";
import "../app/men-products.json"
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label'
import Footer from './components/footer'
import NewsLetter from './components/newsletter'
import { Button } from "@/components/ui/button"
import bird from "../../public/bird.jpg"
import pic from "../../public/cart-fill.svg"
import user from "../../public/person-fill.svg"
import fashion from "../../public/0dda5c50-f0d8-4add-aece-326cbaa98919.jpg"
import * as React from "react"
import Carousel from './components/carousel'
import { createContext } from "vm";
export default function Home() {
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
    <div className='bg-transparent'>
      {/* making navbar */}
 {/* navbar ends here */}
 {/* offer page starts */}
<div className='mynav flex items-center justify-around h-max'>
  <ul className='mb-30 ml-10 flex-col'>
    <li className='offer mb-6 font-light font-mono text-gray-600 text-xl' >Spring/Summer Collection-In Stores Now</li>
    <li className='intext text-6xl'>Get up to 30% Off</li>
    <li className='intext text-6xl'>On New Arrivals</li>
    <li className='text-xl'><Button className= 'my-5 hover:rounded-sm w-44 text-white bg-black hover:bg-gray-200 hover:text-black rounded-sm' variant="default">Shop Now</Button>
</li>
  </ul>
  <Image className='fashion-img' src={fashion} width={400} height={100} alt="fashion picture">
    </Image></div> 
{/* offer page ends here */}
{/* collection with carousels start */}
<div className='  bg-slate-300'>
<h1 className="men-heading text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl pt-10 flex justify-center">Our New Arrivals Collection</h1>
    <Separator className="mt-5 bg-black w-full"></Separator>
    <div className="carousel">
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
    <h2 className="text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <div className=" flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className=" text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>

    </div>
    </Slider>
    </div>
    <h1 className="men-heading text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl mt-8 flex justify-center">Our Most Popular Collection</h1>
    <Separator className="mt-5 h-[0.5px] bg-black w-full"></Separator>
    <div className="carousel">
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
    <h2 className="text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <div className=" flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className=" text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>

    </div>
    </Slider>
    </div>
  </div>
  {/* collection with carousels end */}
  {/* newsletter and footer section start */}
  
    </div>
  )
}
