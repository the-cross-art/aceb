import React from "react";

import Card from "react-bootstrap/Card";
import jituhod from "../assets/images/faculty/jituhod.webp";
import vkpandey from "../assets/images/faculty/vikrama-pandey.webp";
import sanjay from "../assets/images/faculty/sanjay_shukla.webp";
import uksingh from "../assets/images/faculty/uksingh.webp";
import ranvijay from "../assets/images/faculty/ranvijay.webp";
import maya from "../assets/images/faculty/mayaray.webp";
import bdyadav from "../assets/images/faculty/bdyadav.webp";
import Sheo from "../assets/images/faculty/sheokumar.webp";
import pksharma from "../assets/images/faculty/pksharma.webp";
import nishikant from "../assets/images/faculty/nishikant.webp";
import sumit from "../assets/images/faculty/sumitkumar.webp";
import komal from "../assets/images/faculty/komal.webp";
import nipen from "../assets/images/faculty/nipendas.webp";
import prakash from "../assets/images/faculty/prakash.webp";
import abhijeet from "../assets/images/faculty/abhijeet_anand.webp";
import iqbal from "../assets/images/faculty/iqbal_sheikh.webp";
import meena from "../assets/images/faculty/sarojmeena.webp";
import prashant from "../assets/images/faculty/prashantmalvia.webp";

const Faculty = () => {
  return (
    <>
    {/* heading faculty */}
    <div className="post-bearer my-1">
        <h3 className="post-bearer-heading">Faculty</h3>
      </div>

    {/* cards faculty */}
      <div className="faculty_container  flex gap-16 content-between flex-wrap  m-10 p-6 pl-40 ">
        {data.map((d) => (
          <Card style={{width: "20rem", height: "24rem"}} className="card-shadow">
            <Card.Img
              variant="top"
              src={d.img}
              style={{ width: "20rem", maxHeight: "12rem" }}
            />
            <Card.Body>
              <Card.Title className="fs-4 flex justify-center">
                {d.name}
              </Card.Title>
              <Card.Text className="fs-5 flex justify-center">
                {d.post}
              </Card.Text>
              {/* <Card.Text className='fs-4 flex justify-center '>
        Phone no:{d.phone}
       </Card.Text>
       <Card.Text className='fs-4 flex justify-centerp '>
        Email :{d.email}
       </Card.Text> */}
              <div className="flex justify-center">
                <button className="btn btn-primary p-2 fs-5  ">Connect</button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

// data

const data = [
  {
    name: `Dr. Jitu Kujur`,
    img: jituhod,
    post: "Associate Professor & Head ",
  },
  {
    name: ` Dr. Vikrama Pandey`,
    img: vkpandey,
    post: "Professor & Former Head ",
  },
  {
    name: `Dr Sanjay Kumar Shukla`,
    img: sanjay,
    post: "Adjunct Professor",
  },
  {
    name: `Dr. U.K. Singh`,
    img: uksingh,
    post: "Professor ",
  },
  {
    name: `Dr. Ran Vijay Singh`,
    img: ranvijay,
    post: "Professor ",
  },
  {
    name: `Dr. Maya Rajnarayan Ray`,
    img: maya,
    post: "Associate Professor ",
  },
  {
    name: `Dr. Brahmdeo Yadav`,
    img: bdyadav,
    post: "Associate Professor ",
  },
  {
    name: `Prof. Sheo Kumar`,
    img: Sheo,
    post: "Associate Professor ",
  },
  {
    name: `Prof. P.K Sharma`,
    img: pksharma,
    post: "Associate Professor ",
  },
  {
    name: `Dr. Nishikant Kisku`,
    img: nishikant,
    post: "Assistant Professor ",
  },
  {
    name: `Dr. Sumit Kumar`,
    img: sumit,
    post: "Assistant Professor ",
  },
  {
    name: `Dr. Komal Kumari`,
    img: komal,
    post: "Assistant Professor ",
  },
  {
    name: `Prof. Nipen Kumar Das`,
    img: nipen,
    post: "Assistant Professor ",
  },
  {
    name: `Prof. Prakash Kr Orang`,
    img: prakash,
    post: "Assistant Professor ",
  },
  {
    name: `Dr. Abhijit Anand`,
    img: abhijeet,
    post: "Assistant Professor ",
  },
  {
    name: `Prof. Iqbal Sheikh`,
    img: iqbal,
    post: "Assistant Professor ",
  },
  {
    name: `Prof. Saroj Meena`,
    img: meena,
    post: "Assistant Professor ",
  },
  {
    name: `Prof. Prashant Malviya`,
    img: prashant,
    post: "Assistant Professor ",
  },
];
export default Faculty;
