"use client"
import Image from "next/image"
import bird from "../../../../public/bird.jpg"
import { useRouter } from "next/router"
  import { useState } from "react"
  import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  import { DetailsSection } from "@/components/DetailsSection"
  import { Navbar } from "@/components/myNavbar"
  import { Slider } from "@/components/Slider"
  import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
  export default function ProductDetail(params:any){
    const notify = () => 
  toast.success("Product Added!", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
    let product = useAppSelector(products=>products.product)
    let rendered_product = product.filter(item=>item.product_name == params.params.ProductDetail)
    const [cartItem,setCartItem] = useState({
      id: rendered_product[0].id,
            src: rendered_product[0].src,
            alt: rendered_product[0].alt,
            product_name: rendered_product[0].product_name,
            original_price: rendered_product[0].original_price,
            discount: rendered_product[0].discount,
            slug: rendered_product[0].slug
    })
    // originalprice,discountedprice,discount,productname
    const [cartCounter, setCartCounter] = useState(1);
    // console.log(params)
    return (
      <div className="bg-yellow-100 md:mx-auto md:px-4">
        {/* TODO: Slide funcional */}
        <div className="flex flex-col md:flex-row md:px-0 md:gap-6 md:py-20 items-center md:justify-center lg:px-14 lg:gap-16">
          <Slider/>
          <DetailsSection 
          originalprice={cartItem.original_price}
           productname={cartItem.product_name}
           discount={cartItem.discount}
           discountedprice={cartItem.original_price-((cartItem.original_price*cartItem.discount)/100)} cartCounter={cartCounter} setCartCounter={setCartCounter}/>
        </div>
      </div>
    )
  }
  