import { useAppSelector } from "../app/store/hooks"
export const DetailedProduct = ({originalprice,discountedprice,discount,productname}:any) => {
  return (
    <div>
        {/* Subtitle */}
        {/* Product Name */}
        <h1 className="font-bold text-3xl mb-4 md:text-5xl md:mb-5">{productname}</h1>
        {/* Product Description */}
        <p className='text-dark-grayish-blue mb-5 text-sm leading-[22px] md:text-base'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus excepturi commodi quae! Reiciendis, enim? Magni quod nemo quibusdam saepe sint! Maxime ipsa sapiente ut distinctio quidem ratione, magnam quibusdam aliquam eaque nam, omnis accusamus, earum quam .
        </p>
        {/* Product Price */}
        <div className='flex items-center justify-between md:flex-col md:items-start mt-2'>
          <div className='flex gap-4 items-center'>
              {/* Price */}
              <span className='font-bold text-4xl'>${discountedprice}</span>
              {/* Discount */}
              <span className='bg-orange-100 text-orange-500 font-bold text-lg px-2 rounded-md'>{discount}%</span>
          </div>
          {/* Previous price */}
          <span className='text-gray-400 text-2xl font-bold'><del>${originalprice}</del></span>
        </div>
    </div>
  )
}
