import React from 'react'
import "../views/Team.css"
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";


import president from "../assets/images/post-bearer/president.jpg"
import vicePresident1 from "../assets/images/post-bearer/saurav.jpg"
import vicePresident2 from "../assets/images/post-bearer/vp2.jpg";
import techhead from "../assets/images/post-bearer/Dharmveer Mahtha.webp";
import js1 from "../assets/images/post-bearer/ashish.jpg"
import js2 from "../assets/images/post-bearer/js2.jpg";
import mh from "../assets/images/post-bearer/mh.jpg";
import trsr from "../assets/images/post-bearer/Rajan.jpg";
import jtrsr from "../assets/images/post-bearer/harshchourasia.jpg";
import ch from "../assets/images/post-bearer/ch.jpg"
import rd from "../assets/images/post-bearer/rd.jpg"
import gate from "../assets/images/post-bearer/Gate.jpg"
import edtorl from "../assets/images/post-bearer/aditya.jpg"
import alumini from "../assets/images/post-bearer/Sumit.jpg"
import pro from "../assets/images/post-bearer/pro.jpg"
import sh from "../assets/images/post-bearer/sh.jpg";
import eph from "../assets/images/post-bearer/sahabuddin.jpg";





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

const Team2k20 = () => {
  return (
    <>
    <div className="post-bearer my-3">
      <h3 className="post-bearer-heading">Post Bearer:Incharge 2024-2024</h3>
    </div>
    {/*  */}
    <div className="faculty_container flex gap-10 content-between flex-wrap  p-6 ">
      {data.map((d) => (
      <Card
      // style={{  }}
      className="card-shadow card"
    >
      <Card.Img
        variant="top"
        src={d.img}
        // style={{ width: "20rem", maxHeight: "12rem" }}
        className="card-img"
      />
      <Card.Body>
        <Card.Title className=" flex justify-center">
          {d.name}
        </Card.Title>
        <Card.Text className=" flex justify-center">
          {d.review}
        </Card.Text>

        <div className="flex justify-center">
          <a href={d.connect}>
            {" "}
            <button className="btn btn-primary flex">
              Connect
              <div className='px-2 linkidin_icon'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
            
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
     
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              </div>
              
            </button>
          </a>
        </div>
      </Card.Body>
    </Card>
    
      ))}
    </div>
  </>
  )
}

export default Team2k20
















