import {Carousel} from "./myCarousel";
import Image from "next/image";

const slides = [
   "https://www.hangoverhops.com/frontEnd/assets/images/about-six.png",
   "https://www.hangoverhops.com/frontEnd/assets/images/about-four.png",
   "https://www.hangoverhops.com/frontEnd/assets/images/about-six.png",
   "https://www.hangoverhops.com/frontEnd/assets/images/about-four.png"
];

export const Slider = () => {
  return (
    // <div className='relative h-72 overflow-hidden'>
    <div className='relative md:w-full md:max-w-[500px]'>
      {/* <Image height={200} width={200} className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2' src="https://www.hangoverhops.com/frontEnd/assets/images/about-six.png" alt=""/> */}
      <Carousel>
        {slides.map(s =>(
          <Image height={250} width={250} src={ s } alt="pictures" key={s}/>
        ))}
      </Carousel>
    </div>
  )
}
