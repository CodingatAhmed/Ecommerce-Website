import { useState, useEffect } from "react"
import Image from "next/image"
import nextpic from "../../public/icon-next.svg"
import previous from "../../public/icon-previous.svg"
import { Button } from "./ui/button"

const thumbnails = [
  "https://www.hangoverhops.com/frontEnd/assets/images/about-six.png",
  "https://www.hangoverhops.com/frontEnd/assets/images/about-six.png",
  "https://www.hangoverhops.com/frontEnd/assets/images/about-six.png",
  "https://www.hangoverhops.com/frontEnd/assets/images/about-six.png"
]

export function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}:any) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  })
  return (
  <div className="flex flex-col">
    <div className="flex max-w-[250px] mx-auto overflow-hidden relative gap-x-5 max-h-72 md:max-h-full md:rounded-2xl">
      <div style={{ transform: `translateX(-${curr * 100}%)` }} className="flex transition-transform ease-out duration-500">
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button onClick={prev} className="bg-white rounded-full p-3 md:hidden"><Image className="h-[10px] w-[10px]" src={previous} alt=""/>
        </Button>
        <Button onClick={next} className="bg-white rounded-full p-3 md:hidden"><Image className="h-[10px] w-[10px]" src={nextpic} alt=""/>
        </Button>
      </div>
      {/* <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div> */}
    </div>
    <div className="to-hide flex justify-center md:flex w-full gap-8 mt-8 h-20">
      {
        thumbnails.map( (t, i) => (
          <div 
            key={i}
            onClick={ () => setCurr(i) }
            className="hover:cursor-pointer focus:opacity-20 rounded-xl"
          >
              <div className={`rounded-xl 
                ${ curr === i && 'border-2 border-orange' }`}>
                <Image className={`rounded-xl 
                  ${ curr === i && 'opacity-40' }`} width={200} height={200} src={ t } alt=""/>
              </div>
          </div>
        ))
      }
    </div>
  </div>
    
    )
  }