"use client"
import Slider from "react-slick" ;
import Link from "next/link";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Separator } from "@/components/ui/separator";
import { useAppSelector } from "../store/hooks";
import Image from "next/image";
export default function Products(params:any){
      const products = useAppSelector((productslist)=>productslist.product)
      const allproducts = products.filter(product=>product.slug == params.params.myproducts)
      const product1 = allproducts.slice(0,8)
      const product1name = product1.map(item=>item.alt)[0]
      const product2 = allproducts.slice(8)
      const product2name = product2.map(items=>items.alt)[0]
      // console.log(product1name)
      // console.log(product2name)
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
        <div className="bg-slate-300">
  <h1 className="men-heading text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl pt-8 flex justify-center">{`${params.params.myproducts} Collection`}</h1>
      <Separator className="mt-5  bg-black w-full"></Separator>
      <h1 className="text-6xl mt-6 -pb-2  flex justify-center">{`${product1name}`}</h1>
      <Separator className="flex  mx-auto mt-1 bg-black w-40"></Separator>
  <div className="carousel">
      <Slider {...settings}>
        {
                product1.map((items,i)=>(
                  <div key={i} className="mx-auto  w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg box">
                  <Link href ={`/${items.slug}/${items.product_name}`}><Image className="h-60 w-full object-cover object-center" width={200} height={200} src={`${items.src}`} alt={items.alt} />
                  <div className="p-0">
                    <h2 className="text-lg font-medium dark:text-white text-gray-900">{`${items.product_name}`}</h2>
                    <div className=" flex items-center">
                      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${items.original_price-((items.original_price*items.discount)/100)}</p>
                      <p className=" text-base  font-medium text-gray-500 line-through dark:text-gray-300">${items.original_price}</p>
                      <p className="ml-auto text-base font-medium text-green-500">{items.discount}%off</p>
                    </div>
                  </div>
                </Link>
                    </div>
                )) 
              }
      </Slider>
      </div>
      <Separator className="mt-5 bg-black w-full"></Separator>
      <h1 className="text-6xl mt-6 -pb-2  flex justify-center">{`${product2name}`}</h1>
      <Separator className="flex h-[0.5px]  mx-auto mt-1 bg-black w-44"></Separator>
      <div className="carousel">
      <Slider {...settings}>
        {
                product2.map((products,i)=>(
                  <div key={i} className="mx-auto  w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg box">
                  <Link href ={`/${products.slug}/${products.product_name}`}><Image className="h-60 w-full object-cover object-center" height={200} width={200} src={`${products.src}`} alt={products.alt} />
                  <div className="p-0">
                    <h2 className="text-lg font-medium dark:text-white text-gray-900">{`${products.product_name}`}</h2>
                    <div className=" flex items-center">
                      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${products.original_price-((products.original_price*products.discount)/100)}</p>
                      <p className=" text-base  font-medium text-gray-500 line-through dark:text-gray-300">${products.original_price}</p>
                      <p className="ml-auto text-base font-medium text-green-500">{products.discount}%off</p>
                    </div>
                  </div>
                </Link>
                    </div>
                )) 
              }
      </Slider>
      </div>
    </div>
    )
}