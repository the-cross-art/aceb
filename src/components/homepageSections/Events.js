import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import e1 from "../../assets/images/events/e1.jpg"
import e2 from "../../assets/images/events/e2.jpg"
import e3 from "../../assets/images/events/e3.jpg"
import e4 from "../../assets/images/events/e4.jpg"

import e5 from "../../assets/images/events/e5.jpg"

import e6 from "../../assets/images/events/e6.jpg"

import e7 from "../../assets/images/events/e7.jpg"

import e8 from "../../assets/images/events/e8.jpg"

import e9 from "../../assets/images/events/e9.jpg"

import e10 from "../../assets/images/events/e10.jpg"

import PricingBar from "./PricingBar";




function Events() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <>
    {/* <Eventspage /> */}

    <div className="post-bearer">
      <h3 className="post-bearer-heading">Events</h3>
    </div>
    <div className="w-full bg-cyan-700 mt-0  ">
    <div className='w-3/4 m-auto mt-0'>
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="bg-white h-[450px] text-black rounded-xl m-10">
            <div className='h-100 bg-indigo-500 flex justify-center items-center'>
              <img src={d.img} alt="" className="h-100 w-100 "/>
            </div>

          </div>
        ))}
      </Slider>
      </div>
      
    </div>
 
  </div>
  <PricingBar/>
    
    </>
  );
}

const data = [
  {
    name: `badlav`,
    img: (e1),
    
  },
  {
    name: `badlav-glimpses`,
    img: (e2),
    
  },
  {
    name: `World Engineering Day`,
    img: (e3),
    
  },
  {
    name: `Platinum jublii Lecture Series`,
    img: (e4),
    
  },
  {
    name: `glimpses`,
    img:(e5),
    
  },
  {
    name: `Engineer's Day`,
    img:(e6),
    
  },
  {
    name: `carrer Oportunities in real state`,
    img:(e7),
    
  },
  {
    name: `carrer Oportunities in real state`,
    img:(e8),
    
  },
  {
    name: `Brain wave`,
    img:(e9),
    
  },
  {
    name: `E-construct`,
    img:(e10),
    
  },
  
];

export default Events;
