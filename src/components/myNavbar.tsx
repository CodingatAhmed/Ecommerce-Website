import { useState } from 'react';
import { Navigation } from './Navigation';
import { RightNav } from './RightNav';
import CartCard from './CartCard';
export const Navbar = ({ cartCounter, setCartCounter }:any) => {
    
    const [showCart, setShowCart] = useState(false);

    const toggleShowCart = () => {
        setShowCart(!showCart);
    }

    return (
        <div>
            {/* Navbar */}
            <div className='flex justify-between p-5 md:p-8 md:px-0 md:mb-1 md:border-b'>

                {/* Navigation and Logo */}
                <Navigation />

                {/* Cart and Avatar */}
                <RightNav toggleShowCart={toggleShowCart} cartCounter={cartCounter}/>
            </div>

            {/* Cart Card */}
            <CartCard showCart={showCart} cartCounter={cartCounter} setCartCounter={setCartCounter} />
        </div>
    )
}
