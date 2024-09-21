import React from "react";
import "./Team.css"
import Card from "react-bootstrap/Card";
import suman_topo from "../assets/images/team 2k21/suman_topo.jpg";
import ashish_jha from "../assets/images/team 2k21/ashish_jha.jpg";
import amarnath from "../assets/images/team 2k21/amarnath.jpg";
import sanya_deo from "../assets/images/team 2k21/sanya_deo.jpg";
import princemichal from "../assets/images/team 2k21/princemichal.jpg";
import shrutiroy from "../assets/images/team 2k21/shrutiroy.jpg";
import rudra from "../assets/images/team 2k21/rudra.jpg";
import ajaymahato from "../assets/images/team 2k21/ajaymahato.jpg";
import gautam from "../assets/images/team 2k21/Gautam.jpg";
import mehartalat from "../assets/images/team 2k21/mehartalat.jpg";
import abhipriya from "../assets/images/team 2k21/abhipriya.jpg";
import ayushi from "../assets/images/team 2k21/ayushi.jpg";

import sakshi from "../assets/images/team 2k21/sakshi.jpg";

import anurag from "../assets/images/team 2k21/anurag.jpg";
import vicky from "../assets/images/team 2k21/vicky.jpg";
import dimple from "../assets/images/team 2k21/dimple.jpg";
import sagarsaw from "../assets/images/team 2k21/sagarsaw.jpg";
import shivam from "../assets/images/team 2k21/shivam.jpg";
import khusboo from "../assets/images/team 2k21/khusboo.jpg";
import sakshidhan from "../assets/images/team 2k21/sakshidhan.jpg";
import rajshree from "../assets/images/team 2k21/rajshree.jpg";
import aditya from "../assets/images/team 2k21/adityanand.jpg"
import sagar from "../assets/images/team 2k21/SagarSaurabh.jpg"
import laxmi from "../assets/images/team 2k21/LakshmiKumari.jpg"
import kunal from "../assets/images/team 2k21/kunal.jpg"
import prabhat from "../assets/images/team 2k21/prabhat.jpg"





import { connect } from "react-redux";


const Team2k21 = () => {
  return (
    <>
      <div className="post-bearer my-3">
        <h3 className="post-bearer-heading">Core Members:Incharge 2023-2024</h3>
      </div>
      {/*  */}
      <div className="faculty_container  flex gap-10 content-between flex-wrap  m-10 p-6 ">
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
            {d.post}
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
  );
};
const data = [
  {
    name: `Suman Toppo `,
    img: suman_topo,
    post: "CoEditorial Team",
    connect: "https://www.linkedin.com/in/suman-toppo-6676b723a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

  },
  {
    name: `Ashish Kumar Jha  `,
    img: ashish_jha,
    post: "Counselling Team",
    connect: "https://www.linkedin.com/in/ashish-kumar-jha-4baaa1231/",

  },
  {
    name: `Aditya Anand`,
    img: aditya,
    post: "Social Media Team",
    connect: "http://linkedin.com/in/aditya-anand-7529552a9",

  },
  {
    name: `Sagar Sourabh`,
    img: sagar,
    post: "Social Media Team",
    connect: "https://www.linkedin.com/in/saurabh-pratap-singh-9a154a23a?trk=contact-info",

  },
  {
    name: `Amarnath Upadhyay      `,
    img: amarnath,
    post: "Operational Team",
  },
  {
    name: `Lakshmi Kumari`,
    img: laxmi,
    post: "Operational Team ",
    connect:"https://www.linkedin.com/in/lakshmi-kumari-7461a5254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: `Sanya Deo`,
    img: sanya_deo,
    post: "Operational Team",
    connect: "https://www.linkedin.com/in/sanya-deo-b61479236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",


  },
  {
    name: `Prince Michael `,
    img: princemichal,
    post: "Industrial relation Team",
    connect: "https://www.linkedin.com/in/prince-michael-1b822a25b/",
  },
  {
    name: `Shruti Roy`,
    img: shrutiroy,
    post: "Industrial relation Team",
    connect: "https://www.linkedin.com/in/shruti-roy-513255209/",
  },
  {
    name: `Kunal kumar Ram`,
    img: kunal,
    post: "Alumni relation Team",
    connect: "https://www.linkedin.com/in/kunal-kumar-8b84a7230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: `Rudra Pratap`,
    img: rudra,
    post: "Alumni relation Team",
    connect: "https://www.linkedin.com/in/rudra-pratap-0193b325a/",
  },
  {
    name: `Rajshree`,
    img: rajshree,
    post: "Alumni relation Team",
    connect: "https://www.linkedin.com/in/raj-shree-508709230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },

  {
    name: `Prabhat Kr Ravidas`,
    img: prabhat,
    post: "Marketing Team",
    connect: "https://www.linkedin.com/in/prabhat-kumar-3ab65423a",
  },
  {
    name: `Ajay Mahato`,
    img: ajaymahato,
    post: "Designing Team",
    connect: "https://www.linkedin.com/in/ajay-mahato-8a7446230/",
  },
  {
    name: `Gautam Kumar `,
    img: gautam,
    post: "Designing Team",
    connect: "https://www.linkedin.com/in/gautam-kumar-m20/",
  },
  {
    name: `Mehar Talat`,
    img: mehartalat,
    post: "Designing Team",
    connect: "https://www.linkedin.com/in/mehartalat/",
  },

  {
    name: `Abhipriya Dubey`,
    img: abhipriya,
    post: "Editorial Team",
    connect: "https://www.linkedin.com/in/abhipriya-dubey-82b905230/",
  },

  {
    name: `Ayushi Kumari`,
    img: ayushi,
    post: "Editorial Team",
    connect: "https://www.linkedin.com/in/ayushi-kumari-35375923a/",
  },
  {
    name: `Sakshi Mishra`,
    img: sakshi,
    post: "Ideation Team",
    connect: "https://www.linkedin.com/in/sakshi-kumari-mishra-34256623a/",
  },

  {
    name: `Anurag Kumar`,
    img: anurag,
    post: "Ideation Team",
    connect: "https://www.linkedin.com/in/anurag-kumar-19722422b/",
  },
  {
    name: `Sourav kumar Verma`,
    img: "https://imgs.search.brave.com/zgudheWMmcsW_dmo0Otur7tn4aBG6VVffFsMD4fEq4I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzAwLzU0LzI4/LzM2MF9GXzUwMDU0/Mjg5OF9McFlTeTRS/R0FpOTVhRGltM1RM/dFNnQ05VeE5sT2xj/TS5qcGc",
    post: "Sports & cultural Team",
    connect: "#",
  },
  {
    name: `Vicky Kumar`,
    img: vicky,
    post: "Public Relation Team",
    connect: "https://www.linkedin.com/in/vicky-kumar-969817239/",
  },
  {
    name: `Dimple Kumari `,
    img: dimple,
    post: "Public Relation Team",
    connect: "https://www.linkedin.com/in/dimple-kumari-021526256/",
  },
  {
    name: `Sagar Kumar saw`,
    img: sagarsaw,
    post: "GAte-ESE Forum",
    connect: "https://www.linkedin.com/in/sagar-kumar-saw-794094268/",
  },
  {
    name: `Shivam Mishra `,
    img: shivam,
    post: "GAte-ESE Forum",
    connect: "https://www.linkedin.com/in/shivam-mishra-3a5a5b28a/",
  },
  {
    name: `Khushboo Mehta  `,
    img: khusboo,
    post: "Research & Application",
    connect: "https://www.linkedin.com/in/khushboo-m-3a0160232/",
  },
  {
    name: `Sakshi Dhan`,
    img: sakshidhan,
    post: "Research & Application",
    connect: "https://www.linkedin.com/in/sakshi-dhan-5984a6239/",
  },
];
export default Team2k21;
