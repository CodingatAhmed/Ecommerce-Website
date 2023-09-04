import { CartProducts } from "./CartProducts";

export default function CartCard({showCart, cartCounter, setCartCounter}:any) {
    // console.log({showCart,cartCounter,setCartCounter})
  return (
    <>

                        {/* Cart span */}
                            <span className='font-bold text-sm'>Cart</span>
                        {/* Products in the Cart */}
                        <div className='p-5'>
                            {
                                (cartCounter === 0) 
                                    // Display if your cart is empty
                                    ? (<div className="flex h-36 justify-center items-center">
                                            <span className="font-bold text-dark-grayish-blue text-lg">Your cart is empty.</span>
                                       </div>
                                    )
                                    // Display if your cart has some products
                                    : (<CartProducts cartCounter={cartCounter} setCartCounter={setCartCounter}/>)
                            }
                        </div>
                            {/* Cart span */}
            {/* Products in the Cart
            <div className="p-5">
              {cart.length == 0 ? (
                // Display if your cart is empty
                <div className="flex h-36 justify-center items-center">
                  <span className="font-bold text-dark-grayish-blue text-lg">
                    Your cart is empty.
                  </span>
                </div>
              ) : (
                // Display if your cart has some products
                <CartProducts
                  cartCounter={cartCounter}
                  setCartCounter={setCartCounter}
                />
              )}
            </div> */}
    </>
    
  )
}
