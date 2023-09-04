import { useAppSelector } from '../app/store/hooks';
import { CTASection } from './CTASection';
import { DetailedProduct } from './DetailedProduct';

export const DetailsSection = (props:any) => {
  return (
    <div className='flex flex-col p-6 gap-3 md:w-full md:max-w-[600px]'>
        <DetailedProduct originalprice = {props.originalprice}
         discountedprice = {props.discountedprice}
         discount = {props.discount}
        productname = {props.productname} />
        <CTASection props={props}/>
    </div>
  )
}
