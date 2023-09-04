import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from "../app/store/hooks";
import { addToCart, deleteItem } from '../app/store/features/cart';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CTASection = (props:any) => {
  // console.log(props)
  let product = useAppSelector(products=>products.product)
  let rendered_product = product.filter(item=>item.product_name == props.props.productname)
  // console.log(rendered_product)
  const cart = useAppSelector(state=>state.cart)
  const [productCounter, setProductCounter] = useState(1);
  const dispatch = useAppDispatch()
     const {cartCounter, setCartCounter} = props;
     const notify = () => toast.success("Product Added!", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
      // console.log(setCartCounter)
      const [cartItem,setCartItem] = useState({
        quantity:1,
        id: rendered_product[0].id,
              src: rendered_product[0].src,
              alt: rendered_product[0].alt,
              product_name: rendered_product[0].product_name,
              original_price: rendered_product[0].original_price,
              discount: rendered_product[0].discount,
              slug: rendered_product[0].slug
            })
            // console.log(cartItem.quantity)
            
  return (
    <div className='flex flex-col justify-center items-center gap-4 md:flex-row'>
        {/* Amount required */}
        <div className='flex gap-x-[10px] bg-light-grayish-blue justify-between items-center px-6 py-2 rounded-xl mt-2
        w-[37.3%] md:px-3 md:mt-0'>
          {/* Minus button */}
          <div>
            <button 
              onClick={ () => (setCartItem({...cartItem,quantity:cartItem.quantity<= 1 ? 1 :--cartItem.quantity}))}
              className='bg-black font-bold h-[35px] w-[30px] rounded-lg text-white text-2xl pb-2'
            >
              -
            </button>
          </div>

          {/* Quantity */}
          <div className='font-bold'>
            { cartItem.quantity }
          </div>

          {/* Plus button */}
          <div>
            <button 
              onClick={ () =>(setCartItem({...cartItem,quantity:++cartItem.quantity})) }  
              className='font-bold bg-black w-[30px] h-[35px] rounded-lg text-white text-orange text-2xl'
            >
              +
            </button>
          </div>
        </div>

        {/* Add to cart Button */}
        <div onClick={notify} className='w-full justify-center bg-black text-white py-4 rounded-xl font-bold md:w-2/3'>
        <button 
          onClick={
            ()=>{
            dispatch(addToCart(cartItem))}
          }
          className='w-full bg-black text-white py-2 rounded-xl font-bold'
        >
          <div className='h-full flex gap-4 justify-center'>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="currentColor" fillRule="nonzero"/></svg>
            Add to cart
          </div><ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        </button>
        </div>
    </div>
  )
}
