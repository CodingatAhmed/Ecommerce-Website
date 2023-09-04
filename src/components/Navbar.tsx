      "use client"
      import * as React from 'react';
import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';
import Sidebar from './sidebar';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import pic from "../../public/cart-fill.svg"
import user from "../../public/person-fill.svg"
import Image from "next/image"
import Hamburger from "./hamburger"
import { useAppSelector } from '@/app/store/hooks';

export default function Navbar(){
  let cart = useAppSelector((state)=>state.cart)
    return(

         <div className= 'flex w-full sticky items-center justify-evenly bg-slate-100'> 
    <Link href="/" className='font-extrabold md:ml-4 lg:ml-10 sm:text-2xl md:text-2xl lg:text-2xl flex text-gray-400'>ClothingDeck</Link>
    {/* <div className="">
</div> */}
    <ul className='startnav  md:ml-10 sm:gap-x-4 2xl:gap-x-16 xl:gap-x-16 sm:my-8 md:my-10 md:gap-x-8 text-lg mr-7 lg:my-7 flex'>
      <li><Link className='glowing-link hover:bg-transparent h-20' href="/">Home</Link></li>
      <li><Link className='glowing-link hover:bg-transparent h-20' href="#About">About</Link></li>
      <li><Link className='glowing-link hover:bg-transparent h-20' href="/Kids">Kids</Link></li>
      <li><Link className='glowing-link hover:bg-transparent h-20' href="/Men">Men</Link></li>
      <li><Link className='glowing-link hover:bg-transparent h-20' href="/Women">Women</Link></li>
      <li><div className= "search flex max-w-sm items-center space-x-1">
      <Input type="text" placeholder="Looking For Something?" />
      <Button type="submit">Search</Button>
    </div></li>
    </ul>
    <div className="img-div lg:gap-3 justify-end md:my-3  flex">
      <Sidebar/>
      <Button className=  'my-5 hover:rounded-full hover:bg-gray-200 text-transparent hover:text-black rounded-full' variant="ghost" >
      <Image className='icons h-40' width={22} src={user} alt="" height={22}/>
</Button>
<Link href="/shoppingcart"><Button className='rounded-full text-black hover:rounded-full hover:bg-gray-200 hover:text-black bg-transparent my-5'>
            {/* Amount of Products in Cart */}
            {/* Cart Image */}
            <div>
                <Image className='icons h-in' width={22} src={pic} alt="" height={22} />
            </div>
            {cart.length > 0 && <span className='font-bold flex justify-center items-start rounded-full -mx-1 mb-[17px] w-4 h-[17px] bg-orange-500'>{cart.length}</span>}
        </Button></Link> 
    {/* <Link href="/shoppingcart"><Button className='rounded-full text-black hover:rounded-full hover:bg-gray-200 hover:text-black bg-transparent my-5'>
      <Image className='icons h-in' width={22} src={pic} alt="" height={22}/>
      {cart.length > 0 && (
    <Badge className='font-bold flex justify-center items-start rounded-full -mx-1 mb-[10px] w-4 h-4 bg-orange-500'>
      {cart.length}
    </Badge>
      )}
      </Button></Link> */}
      </div>
</div>
    )
}