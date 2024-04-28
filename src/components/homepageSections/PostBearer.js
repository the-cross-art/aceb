import React from 'react';
import './homepage.css';
import './card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import president from "../../assets/images/post-bearer/president.jpg"
import vicePresident1 from "../../assets/images/post-bearer/saurav.jpg"
import vicePresident2 from "../../assets/images/post-bearer/vp2.jpg";
import techhead from "../../assets/images/post-bearer/Dharmveer Mahtha.webp";
import js1 from "../../assets/images/post-bearer/ashish.jpg"
import js2 from "../../assets/images/post-bearer/js2.jpg";
import mh from "../../assets/images/post-bearer/mh.jpg";
import trsr from "../../assets/images/post-bearer/Rajan.jpg";
import jtrsr from "../../assets/images/post-bearer/harshchourasia.jpg";
import ch from "../../assets/images/post-bearer/ch.jpg"
import rd from "../../assets/images/post-bearer/rd.jpg"
import gate from "../../assets/images/post-bearer/Gate.jpg"
import edtorl from "../../assets/images/post-bearer/aditya.jpg"
import alumini from "../../assets/images/post-bearer/Sumit.jpg"
import pro from "../../assets/images/post-bearer/pro.jpg"
import sh from "../../assets/images/post-bearer/sh.jpg";
import eph from "../../assets/images/post-bearer/sahabuddin.jpg";





function App() {

  const settings = {
    dots: true,
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
        <div className='w-3/4 m-auto mt-0'>
          <div className='post-bearer-container'>
            <Slider {...settings}>
              {data.map((d, index) => (
                <div key={index} className='card__collection clear-fix'>
                  <div className='cards cards--three'>
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
                      <li>
                        <a><FontAwesomeIcon icon={faFacebook} /></a>
                      </li>
                      <li>
                        <a><FontAwesomeIcon icon={faInstagram} /></a>
                      </li>
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
    name: `Adarsh Sah`,
    img: (president),
    review: `President`,
    url: ('https://www.linkedin.com/in/adarsh-sah-92a966182/')
  },
  {
    name: `Sourav Anand`,
    img: (vicePresident1),
    review: `Vice President`,
    url: ('https://www.linkedin.com/in/sourav-anand-99a7a1202/')
  },
  {
    name: `Uma Dutta`,
    img: (vicePresident2),
    review: `Vice President`,
    url: ('https://www.linkedin.com/in/uma-dutta-69ab8a228/')
  },
  {
    name: `Ashish ujjwal Thakur `,
    img: (js1),
    review: `Joint-Secretary`,
    url: ('https://www.linkedin.com/in/ashish-ujjwal-thakur-71633b217/')
  },
  {
    name: `Shabnam Kumari`,
    img: (js2),
    review: `Joint-Secretary`,
    url: ('https://www.linkedin.com/in/shabnam-kumari-005032241/')
  },
  {
    name: `Rajan Kumar`,
    img: (trsr),
    review: `Treasurer`,
    url: ('https://www.linkedin.com/in/')
  },
  {
    name: `Harsh kr. Chourasia`,
    img: (jtrsr),
    review: `Joint-Treasurer`,
    url: ('https://www.linkedin.com/in/harsh-chourasia-a405a320b/')
  },
  {
    name: `Dharmveer Mahtha`,
    img: (techhead),
    review: `Technical Head`,
    url: ('www.linkedin.com/in/dharm-veer-043743221')
  },
  {
    name: `Amisha Rani `,
    img: (mh),
    review: `Marketing-Head`,
    url: ('https://www.linkedin.com/in/amisha-rani-817458205/')
  },
  {
    name: `Sushanto Shekhar `,
    img: (ch),
    review: `Marketing-Head`,
    url: ('https://www.linkedin.com/in/sushanto-shekhar/')
  },
  {
    name: `Rohit Kumar`,
    img: (rd),
    review: `Research & Development Head`,
    url: ('https://www.linkedin.com/in/rohit-kumar-b77260216/')
  },
  {
    name: `Jitendra Rajwar`,
    img: (gate),
    review: `GATE & ESE Forum Head`,
    url: ('https://www.linkedin.com/in/jitendra-rajwar-aa86b4230/')
  },
  {
    name: `Sumit Kumar`,
    img: (alumini),
    review: `Alumni Relation & Joint PRO`,
    url: ('https://www.linkedin.com/in/sumit-kumar-87942120b/')
  },
  {
    name: `Aditya Kumar`,
    img: (edtorl),
    review: `Editorial Head`,
    url: ('https://www.linkedin.com/in/aditya-kumar-593149223/')
  },
  {
    name: `Abhimanyu kumar `,
    img: (pro),
    review: `Public Relation Officer`,
    url: ('https://www.linkedin.com/in/abhimanyu-kumar-a6a37b218/')
  },
  {
    name: `Hritam Swami`,
    img: (sh),
    review: `Sports Head`,
    url: ('https://www.linkedin.com/in/hritam-swami-7911a620b/')
  },
  {
    name: `Sahabuddin Ansari    `,
    img: (eph),
    review: ` Event and Program Head`,
    url: ('https://www.linkedin.com/in/sahabuddin-ansari-234416226/')
  },

];

export default App;
