import React from "react";
import "./Team.css"
import { Container, Row, Col, Card } from "react-bootstrap";
import abhay from "../assets/images/2k22/abhay.jpg";
import abhishek from "../assets/images/2k22/abhishek.jpg";
import abhinav from "../assets/images/2k22/abhinav.jpg";
import aryan from "../assets/images/2k22/aryan.jpg";
import bikash from "../assets/images/2k22/bikash.jpg";
import chandan from "../assets/images/2k22/chandan.jpg";
import deepak from "../assets/images/2k22/deepak.jpg";
import deepakp from "../assets/images/2k22/deepakp.jpg";
import divyanshus from "../assets/images/2k22/divyanshus.jpg";
import hritik from "../assets/images/2k22/hritik.jpg";
import kuwar from "../assets/images/2k22/kuwar.jpg";
import muskan from "../assets/images/2k22/muskan.jpg";
import nitish from "../assets/images/2k22/nitish.jpg";
import pradeep from "../assets/images/2k22/pradeep.jpg";
import priyanshu from "../assets/images/2k22/priyanshu2.jpg";
import rahulkali from "../assets/images/2k22/rahulkalindi.jpg";
import riyagupta from "../assets/images/2k22/riyagupta.jpg";
import shipra from "../assets/images/2k22/shipra.jpg";
import sumit from "../assets/images/2k22/sumit.jpg";
import anjali from "../assets/images/2k22/anjali.jpg"
import divyanshu from "../assets/images/2k22/divyanshu.jpg"
import harshita from "../assets/images/2k22/harshita.jpg"
import jaipraksh from "../assets/images/2k22/jaiprakash.jpeg"
import jaydeep from "../assets/images/2k22/jaydeep.jpg"
import manish from "../assets/images/2k22/manish3.jpg"
import prince from "../assets/images/2k22/prince.jpg"
import rahul from "../assets/images/2k22/rahul.jpg"
import raviranjan from "../assets/images/2k22/raviranjan.jpg"
import shraban from "../assets/images/2k22/shraban.jpg"
import shubham from "../assets/images/2k22/shubhamp.jpg"
import sneha from "../assets/images/2k22/sneha.jpg"
import upen from "../assets/images/2k22/upen.png"











const Coordinators = () => {
  return (
    <>
      <div className="post-bearer my-3">
        <h3 className="post-bearer-heading">Coordinators 2023-2024</h3>
      </div>
      {/*  */}
      <div className="faculty_container flex gap-10 content-between flex-wrap  m-10 p-6  ">
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
                  <button className="btn btn-primary flex   justify-center gap-2 fs-4">
                    Connect
                    <svg
                      xmlns="http://www.w3.org/2000/svg"

                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"

                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
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
    name: `Abhay Kumar Mahato`,
    img: abhay,
    post: "Research Team",
    connect: "https://www.linkedin.com/in/abhay-kumar-mahato-58a1a624a/",
  },
  {
    name: `Abhishek Thakur`,
    img: abhishek,
    post: "Marketing Team",
    connect: "https://www.linkedin.com/in/abhishek-thakur-88a637261/",
  },
  {
    name: `Abhinav Gaurav`,
    img: abhinav,
    post: "Marketing Team",
    connect: "inkedin.com/in/abhinav-gourav-b331b8257/",
  },
  {
    name: `Anjali Vishnupriya`,
    img: anjali,
    post: "Content Team",
    connect: "https://www.linkedin.com/in/anjali-vishnupriya-579a30272",
  },
  {
    name: `Aryan Kumar`,
    img: aryan,
    post: "Operational Team",
    connect: "https://www.linkedin.com/in/aryan-kumar-9b82b8243/",
  },
  {
    name: `Bikash Kumar`,
    img: bikash,
    post: "Operational Team ",
    connect: "https://www.linkedin.com/in/bikash-kumar-mahato-0b9b41256/",
  },
  {
    name: `Chandan Dev  `,
    img: chandan,
    post: "Operational Team",
    connect: "https://www.linkedin.com/in/chandan-dev-a04b16256/",
  },
  {
    name: `Deepak Kumar`,
    img: deepak,
    post: "Graphic",
    connect: "https://www.linkedin.com/in/deepak-kumar-5a3904256/",
  },
  {
    name: `Deepak Prakash`,
    img: deepakp,
    post: "Graphic",
    connect: "https://www.linkedin.com/in/deepak-prakash-702ba3256/",
  },
  {
    name: `Divyanshu kumar`,
    img: divyanshu,
    post: "Content,  Research",
    connect: "http://www.linkedin.com/in/divyanshu-kumar-7b4416263",
  },
  {
    name: `Divyanshu Kr. Singh`,
    img: divyanshus,
    post: "Marketing",
    connect: "https://www.linkedin.com/in/divyanshu-kumar-singh-6aa47025b/",
  },
  {
    name: `Harsh Kumar Harsh`,
    img: "https://imgs.search.brave.com/zgudheWMmcsW_dmo0Otur7tn4aBG6VVffFsMD4fEq4I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzAwLzU0LzI4/LzM2MF9GXzUwMDU0/Mjg5OF9McFlTeTRS/R0FpOTVhRGltM1RM/dFNnQ05VeE5sT2xj/TS5qcGc",

    //   img: harsh,
    post: "Alumni relation Team",
    connect: "https://www.linkedin.com/in/prince-michael-1b822a25b/",
  },

  {
    name: `Harshita Kashyap`,
    img: harshita,

    post: "Content, Marketing",
    connect: "https://www.linkedin.com/in/harshita-kashyap-bitsindri/",
  },
  {
    name: `Hritik Kochar`,
    img: hritik,
    post: "Designing Team",
    connect: "https://www.linkedin.com/in/hritik-kochar/",
  },
  {
    name: `Jai Prakash Oraon`,

    img: jaipraksh,
    post: "Graphic Team",
    connect: "https://www.linkedin.com/in/jai-prakash-0152a5260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: `Jaydeep Kumar`,
    img: jaydeep,
    post: "Marketing Team",
    connect: "https://www.linkedin.com/in/jaydeep-kumar-b321b7257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },

  {
    name: `Komal Khalkho`,
    img: "https://imgs.search.brave.com/zgudheWMmcsW_dmo0Otur7tn4aBG6VVffFsMD4fEq4I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzAwLzU0LzI4/LzM2MF9GXzUwMDU0/Mjg5OF9McFlTeTRS/R0FpOTVhRGltM1RM/dFNnQ05VeE5sT2xj/TS5qcGc",

    //   img: komal,
    post: "Editorial Team",
    connect: "https://www.linkedin.com/in/komal-khalkho-307755272/",
  },

  {
    name: `Kuwar Singh`,
    img: kuwar,
    post: " Research Team",
    connect: "https://www.linkedin.com/in/kuwar-singh28/",
  },
  {
    name: `Manish Kumar Mahato`,

    img: manish,
    post: "Graphics Team",
    connect: "https://www.linkedin.com/in/manish-kumar-75946b264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },

  {
    name: `Muskan Prakriti`,
    img: muskan,
    post: "Research Team",
    connect: "https://www.linkedin.com/in/muskan-prakriti-b3a68a257/",
  },
  {
    name: `Nitish Oraon`,
    img: nitish,
    post: "Graphics Team",
    connect: "https://www.linkedin.com/in/nitish-oraon-048ab1256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: `Pradeep Kumar Mahato`,
    img: pradeep,
    post: "Content Team",
    connect: "https://www.linkedin.com/in/pradeep-kumar-mahato-799160268/",
  },
  {
    name: `Prince Kumar`,

    img: prince,
    post: "Research Team",
    connect: "https://www.linkedin.com/in/prince-kumar-aaa442304",
  },
  {
    name: `Priyanshu Kumar`,
    img: priyanshu,
    post: "Marketing Team",
    connect: "https://www.linkedin.com/in/priyanshu-kumar-383388216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: `Rahul Kalindi `,
    img: rahulkali,
    post: "Marketing Team",
    connect: "https://www.linkedin.com/in/rahul-kalindi-a2a28224b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: `Rahul Kumar`,

    img: rahul,
    post: "Research Team",
    connect: "https://www.linkedin.com/in/rahul-kumar-000b8b2a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: `Raviranjan Kujur `,

    img: raviranjan,
    post: "Research Team",
    connect: "https://www.linkedin.com/in/raviranjan-kujur-4625a3257",
  },
  {
    name: `Riya Gari`,
    img: "https://imgs.search.brave.com/zgudheWMmcsW_dmo0Otur7tn4aBG6VVffFsMD4fEq4I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzAwLzU0LzI4/LzM2MF9GXzUwMDU0/Mjg5OF9McFlTeTRS/R0FpOTVhRGltM1RM/dFNnQ05VeE5sT2xj/TS5qcGc",

    // img: riyag,
    post: "Content Team",
    connect: "https://www.linkedin.com/in/riya-gari-a64041273/",
  },

  {
    name: `Riya Gupta`,
    img: riyagupta,
    post: "Content,Graphic Team",
    connect: "https://www.linkedin.com/in/riya-gupta-6b0835256/",
  },

  {
    name: `Shraban Kr Dan `,

    img: shraban,
    post: "content Team",
    connect: "https://www.linkedin.com/in/shraban-kumar-600a2925a",
  },
  {
    name: `Shipra Kumari`,
    img: shipra,
    post: "Graphic Team",
    connect: "https://www.linkedin.com/in/shipra-kumari-104095257/",
  },
  {
    name: `Shubam Kr. Pandey`,

    img: shubham,
    post: "Marketing",
    connect: "https://www.linkedin.com/in/shubham-kumar-pandey-373761258/",
  },
  {
    name: `Sumit Kumar`,
    img: sumit,
    post: "Marketing Team",
    connect: "https://www.linkedin.com/in/sumit-kumar-8259a9256/",
  },
  {
    name: `Sushant Abhishek`,
    img: "https://imgs.search.brave.com/zgudheWMmcsW_dmo0Otur7tn4aBG6VVffFsMD4fEq4I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzAwLzU0LzI4/LzM2MF9GXzUwMDU0/Mjg5OF9McFlTeTRS/R0FpOTVhRGltM1RM/dFNnQ05VeE5sT2xj/TS5qcGc",

    // img:sushant,
    post: "Research Team",
    connect: "",
  },
  {
    name: `Sneha Raj`,

    img: sneha,
    post: "Research Team",
    connect: "https://www.linkedin.com/in/sneha-raj-b64580287",
  },
  {
    name: `Upen Mahato`,

    img: upen,
    post: "Marketing Team",
    connect: "https://www.linkedin.com/in/upen-mahto-6325a9257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];
export default Coordinators;
