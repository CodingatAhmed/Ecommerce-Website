"use client";
import { CartProducts } from "@/components/CartProducts";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CartCard from "@/components/CartCard";
import ProductDetail from "../[myproducts]/[ProductDetail]/page";
import { decrementQuantity, deleteItem, incrementQuantity } from "../store/features/cart";
import { Input } from "@/components/ui/input";
// export const CartCard = ({showCart, cartCounter, setCartCounter}) => {
export default function CheckoutItems(params:any) {
  let cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch()
  const [cartCounter, setCartCounter] = useState();
  const [productCounter, setProductCounter] = useState();
  const totalAmountArray = cart.map((val)=>val.original_price*val.quantity)
  // console.log(totalAmountArray)
  // const resetCart = () => setCartCounter(0);
  
  
  // const addProduct    = () => prodQuantity + 1;
  // const removeProduct = () => {
  //   return (prodQuantity > 1) 
  //   ? (prodQuantity - 1)
  //   : 1
  //  };
   
  //  const addToCard = () => {
  //    const totalCounter = cartCounter + prodQuantity;
  //    setCartCounter( totalCounter );
  //    setProductCounter(0);
  //  }
  //   const addProduct    = () => productCounter + 1;
  //   const removeProduct = () => {
  //     return (productCounter > 1) 
  //     ? (productCounter - 1)
  //     : 1
  //    };
     
  //    const addToCard = () => {
  //      const totalCounter = cartCounter + productCounter;
  //      setCartCounter( totalCounter );
  //      setProductCounter(0);
  //    }

  return (
    <>
            <div className="bg-gray-100 overflow-y-scroll">
              {cart.length == 0 ? ( 
                 <div className="flex h-36  justify-center items-center">
                  <span className="font-bold text-dark-grayish-blue text-lg">
                    Your cart is empty.
                  </span>
                  
                </div> 
                // Total,cartValue,productname,totalitems,originalprice,cartCounter,setCartCounter
                ) : (
                    <div className="h-96 pt-8">
                      <h1 className="mb-6 text-center text-2xl font-bold">{`You have ${cart.length} Cart Items`}</h1>
                 {
                 cart.map((items,i)=>(
                  <div key = {i} className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                  <div className="rounded-lg md:w-2/3">
                    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                      <Image
                      width={100}
                      height={100}
                        src="https://www.hangoverhops.com/frontEnd/assets/images/about-four.png"
                        alt="product-image"
                        className="w-full rounded-lg sm:w-40"
                      />
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2 className="text-lg font-bold text-gray-900">
                            {items.product_name}
                          </h2>
                          <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                          <p className="pt-2 text-gray-700 font-serif text-base">{`Product Price:$${items.original_price}`}</p>
                          <p className="pt-2 text-gray-700 font-serif text-sm">{`Total:$${items.quantity*items.original_price}`}</p>
                        </div>
                        <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div className="flex items-center border-gray-100">
                            <span onClick={()=> dispatch(decrementQuantity(items))} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                              -{" "}
                            </span>
                            <Input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={items.quantity}/>
                            <span onClick={()=> dispatch(incrementQuantity(items))} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                              {" "}
                              +{" "}
                            </span>
                          </div>
                          <div className="flex justify-center items-center space-x-4">
                            <Button onClick={()=> dispatch(deleteItem(items.id))}>
                                <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a"/></svg>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sub total */}
                </div>
                    ))}
                    {/* max-w-[55rem] sm:mx-auto mx-6 mt-6 justify-center rounded-lg border bg-white p-6 shadow-md md:mt-0 md:mx-auto */}
                    {/* {totalAmountArray.reduce((accumulator,currentVal)=>accumulator+currentVal)} */}
                    {/* {totalAmountArray.reduce((accumulator,currentVal)=>accumulator+currentVal)+5.00} */}
                <div className="max-w-[55rem] mx-6 mt-6 justify-center rounded-lg border bg-white p-6 shadow-md md:mt-0 md:mx-auto">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">${totalAmountArray.reduce((accumulator,currentVal)=>accumulator+currentVal)} </p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$5.00</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">${totalAmountArray.reduce((accumulator,currentVal)=>accumulator+currentVal)+5.00}.00</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
          Check out
        </button>
      </div>
      </div>)}
          </div>
      
    </>
  );
}
