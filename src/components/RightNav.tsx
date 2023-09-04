import Image from 'next/image'
import React from 'react'

export const RightNav = ({toggleShowCart, cartCounter}:any) => {
  return (
    <div className='flex gap-5 relative'>
        {/* Cart */}
        <button onClick={ toggleShowCart } className='w-6 my-auto relative flex items-center'>
            {/* Amount of Products in Cart */}
            {
                cartCounter !== 0
                    && (
                        <span className='absolute -top-[5px] -right-1 text-[10px] font-bold text-white bg-orange px-[6px] rounded-full'>{cartCounter}</span>
                    )
            }
            {/* Cart Image */}
            <div>
                <Image width={200} height={200} className='w-full' src="https://www.hangoverhops.com/frontEnd/assets/images/about-six.png" alt=""/>
            </div>
        </button>
        {/* Avatar */}
        <div className='w-6 md:w-12'>
            <Image width={200} height={200} className='' src="https://www.hangoverhops.com/frontEnd/assets/images/about-six.png" alt=""/>
        </div>

    </div>
  )
}
