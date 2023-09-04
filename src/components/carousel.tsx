import Head from "next/head"
import bird from "../../../public/bird.jpg"
import Link from "next/link"
import Image from "next/image"
export default function Carousel(){
    return(
        <div>
        <section className="container">
      <div className=" card">
        <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg">
  <Link href ="#"><Image height={200} width={300} className="h-48 w-full object-cover object-center" src={bird} alt="Product Image"/>
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
</div>
      </div>
      <div className="card">
      <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 duration-300 shadow-md  hover:shadow-lg">
  <Link href ="#"><Image height={200} width={300} className="h-48 w-full object-cover object-center" src={bird} alt="Product Image"/>
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
</div>
      </div>
      <div className="card">
      <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-95 hover:shadow-lg">
  <Link href ="#"><Image height={200} width={300} className="h-48 w-full object-cover object-center" src={bird} alt="Product Image"/>
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
</div>
      </div>
      <div className="card">
      <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-95 hover:shadow-lg">
  <Link href ="#"><Image height={200} width={300} className="h-48 w-full object-cover object-center" src={bird} alt="Product Image"/>
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
</div>
      </div>
    </section>
    <section className="container">
      <div className=" card">
        <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg">
  <Link href ="#"><Image height={200} width={300} className="h-48 w-full object-cover object-center" src={bird} alt="Product Image"/>
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
</div>
      </div>
      <div className="card">
      <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 duration-300 shadow-md  hover:shadow-lg">
  <Link href ="#"><Image height={200} width={300} className="h-48 w-full object-cover object-center" src={bird} alt="Product Image"/>
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
</div>
      </div>
      <div className="card">
      <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-95 hover:shadow-lg">
  <Link href ="#"><Image height={200} width={300} className="h-48 w-full object-cover object-center" src={bird} alt="Product Image"/>
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
</div>
      </div>
      <div className="card">
      <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-95 hover:shadow-lg">
  <Link href ="#"><Image height={200} width={300} className="h-48 w-full object-cover object-center" src={bird} alt="Product Image"/>
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
</div>
      </div>
    </section>
    <section className="container">
      <div className=" card">
        <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 shadow-md duration-300 hover:shadow-lg">
  <Link href ="#"><Image height={200} width={300} className="h-48 w-full object-cover object-center" src={bird} alt="Product Image"/>
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
</div>
      </div>
      <div className="card">
      <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 hover:scale-95 duration-300 shadow-md  hover:shadow-lg">
  <Link href ="#"><Image height={200} width={300} className="h-48 w-full object-cover object-center" src={bird} alt="Product Image"/>
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
</div>
      </div>
      <div className="card">
      <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-95 hover:shadow-lg">
  <Link href ="#"><Image height={200} width={300} className="h-48 w-full object-cover object-center" src={bird} alt="Product Image"/>
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
</div>
      </div>
      <div className="card">
      <div className="mx-auto w-80 transform overflow-hidden  bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-95 hover:shadow-lg">
  <Link href ="#"><Image height={200} width={300} className="h-48 w-full object-cover object-center" src={bird} alt="Product Image"/>
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
    <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
</Link>
</div>
      </div>
    </section>
    </div>
    )
}