import React from 'react';
import './homepage.css';
import './card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import president from "../../assets/images/team 2k21/princemichal.jpg"
import vicePresident1 from "../../assets/images/team 2k21/Gautam.jpg"
import vicePresident2 from "../../assets/images/team 2k21/suman_topo.jpg"
import techhead from "../../assets/images/team 2k21/kunal.jpg";
import js1 from "../../assets/images/team 2k21/prabhat.jpg"
import js2 from "../../assets/images/team 2k21/LakshmiKumari.jpg";
import mh from "../../assets/images/team 2k21/SagarSaurabh.jpg";
import trsr from "../../assets/images/team 2k21/adityanand.jpg";
import jtrsr from "../../assets/images/team 2k21/anurag.jpg";
import ch from "../../assets/images/team 2k21/mehartalat.jpg"
import rd from "../../assets/images/team 2k21/abhipriya.jpg"
import gate from "../../assets/images/team 2k21/shivam.jpg"
import gate2 from "../../assets/images/team 2k21/sagarsaw.jpg"

import edtorl from "../../assets/images/team 2k21/khusboo.jpg"
import alumini from "../../assets/images/team 2k21/rudra.jpeg"
import alumini2 from "../../assets/images/team 2k21/rajshree.jpg"

import pro from "../../assets/images/team 2k21/amarnath.jpg"
import pro2 from "../../assets/images/team 2k21/vicky.jpg"

import sh from "../../assets/images/team 2k21/ashish_jha.jpg";
import sh2 from "../../assets/images/team 2k21/saurav.jpeg";

import eph from "../../assets/images/team 2k21/ayushi.jpg";
import eph2 from "../../assets/images/team 2k21/sanya_deo.jpg";
import sc from "../../assets/images/team 2k21/ajaymahato.jpeg";







function App() {

  const settings = {
    dots: true,
    dots:6,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleClick = () => {

  }
  return (
    <div className='PB_container'>
      <div className='post-bearer'>
        <h3 className='post-bearer-heading'>Post Bearers</h3>
      </div>
      <div className='w-full mt-0'>
        <div className='mt-0'>
          <div className='post-bearer-container'>
            <Slider {...settings}>
              {data.map((d, index) => (
                <div key={index} className='card__collection clear-fix'>
                  <div className='cards  cards--three'>
                    {/* <div className='image_div'> */}
                      <img
                        src={d.img}
                        className='img-responsive'
                        alt='Post Image'
                      />
                    {/* </div> */}
                    <span className='cards--three__rect-1'>
                      <span className='shadow-1'></span>
                      <h1>{d.review}</h1>
                      <p>{d.name}</p>
                    </span>
                    <span className='cards--three__rect-2'>
                      <span className='shadow-2'></span>
                    </span>
                    <span className='cards--three__circle'></span>
                    <ul className='cards--three__list'>
                      <li>
                        <a href={d.url}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                      </li>
                      {/* <li>
                        <a><FontAwesomeIcon icon={faFacebook} /></a>
                      </li>
                      <li>
                        <a><FontAwesomeIcon icon={faInstagram} /></a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    name: `Prince Michael Milton `,
    img: (president),
    review: `President`,
    url: ('https://www.linkedin.com/in/prince-michael-1b822a25b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Gautam Kumar`,
    img: (vicePresident1),
    review: `Vice President`,
    url: ('http://www.linkedin.com/in/gautam-kumar-m20')
  },
  {
    name: `Suman Toppo `,
    img: (vicePresident2),
    review: `Vice President`,
    url: ('https://www.linkedin.com/in/suman-toppo-6676b723a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Ajay Mahato`,
    img: (sc),
    review: `Secretary`,
    url: ('https://www.linkedin.com/in/ajay-mahato-8a7446230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Prabhat Kumar Ravidas `,
    img: (js1),
    review: `Joint-Secretary`,
    url: ('https://www.linkedin.com/in/anurag-kumar-19722422b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Laxmi Kumari`,
    img: (js2),
    review: `Joint-Secretary`,
    url: ('https://www.linkedin.com/in/lakshmi-kumari-7461a5254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Aditya Anand `,
    img: (trsr),
    review: `Treasurer`,
    url: ('http://linkedin.com/in/aditya-anand-7529552a9')
  },
  {
    name: `Anurag Kumar`,
    img: (jtrsr),
    review: `Joint-Treasurer`,
    url: ('https://www.linkedin.com/in/anurag-kumar-19722422b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Kunal Kumar Ram `,
    img: (techhead),
    review: `Technical Head`,
    url: ('https://www.linkedin.com/in/kunal-kumar-8b84a7230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Sagar saurabh`,
    img: (mh),
    review: `Marketing-Head`,
    url: ('https://www.linkedin.com/in/saurabh-pratap-singh-9a154a23a?trk=contact-info')
  },

  {
    name: `Abhipriya`,
    img: (rd),
    review: `Research & Development Head`,
    url: ('https://www.linkedin.com/in/abhipriya-dubey-82b905230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Shivam Mishra`,
    img: (gate),
    review: `GATE & ESE Forum Head`,
    url: ('https://www.linkedin.com/in/shivam-mishra-3a5a5b28a')
  },
  {
    name: `Sagar kumar Saw`,
    img: (gate2),
    review: `GATE & ESE Forum Head`,
    url: ('https://in.linkedin.com/in/sagar-kumar-saw-794094268')
  },
  {
    name: `Rudra Pratap Sharma`,
    img: (alumini),
    review: `Alumni Relation & Joint PRO`,
    url: ('https://www.linkedin.com/in/rudra-pratap-0193b325a/')
  },
  {
    name: `Rajshree`,
    img: (alumini2),
    review: `Alumni Relation & Joint PRO`,
    url: ('https://www.linkedin.com/in/raj-shree-508709230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Khushboo Mehta`,
    img: (edtorl),
    review: `Editorial Head`,
    url: ('https://www.linkedin.com/in/khushboo-m-3a0160232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Amarnath upadhyay `,
    img: (pro),
    review: `Public Relation Officer`,
    url: ('https://www.linkedin.com/in/amarnath-upadhyay-a4a113241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Vicky Kumar`,
    img: (pro2),
    review: `Public Relation Officer`,
    url: ('https://www.linkedin.com/in/vicky-kumar-969817239/')
  },
  {
    name: `Ashish Kumar Jha `,
    img: (sh),
    review: `Sports Head`,
    url: ('https://www.linkedin.com/in/ashish-kumar-jha-4baaa1231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `Saurav Kumar Verma`,
    img: (sh2),
    review: `Sports Head`,
    url: ('https://www.linkedin.com/in/saurav-kumar-verma-38848923a/')
  },
  {
    name: `Ayushi Kumari `,
    img: (eph),
    review: ` Event and Program Head`,
    url: ('https://www.linkedin.com/in/ayushi-kumari-7a26b823a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `SANYA DEO `,
    img: (eph2),
    review: ` Event and Program Head`,
    url: ('https://www.linkedin.com/in/sanya-deo-b61479236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
  },
  {
    name: `MEHAR TALAT `,
    img: (ch),
    review: `Creative Head`,
    url: ('https://www.linkedin.com/in/mehartalat/')
  },

];

export default App;
