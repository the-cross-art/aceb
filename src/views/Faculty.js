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
 
      <>
        
        {/*  */}
        
          
       


<section class="bg-white dark:bg-gray-900">

<div className="post-bearer my-1">
        <h3 className="post-bearer-heading">Faculty</h3>
      </div>

<div class="container  px-6  mx-auto">

    <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Executive Team</h1>

   

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">

    {data.map((d) => (

        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group bg-slate-100 hover:bg-blue-600 ">
            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={d.img} alt=""/>

            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">{d.name}</h1>

            <p class="mt-2 text-gray-500 capitalize  group-hover:text-gray-300">{d.post}</p>

            {/* <div class="flex mt-3 -mx-2">
              

                <a href={d.linkedin} class="mx-2 text-gray-600  hover:text-gray-500  group-hover:text-white" aria-label="Github">
                   
                     <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"> <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path> </svg>
                  
                </a>
            </div> */}
        </div>
        
    ))};

    </div>
</div>
</section> 










       
      </>

    {/* cards faculty */}
      {/* <div className="faculty_container  flex gap-16 content-between flex-wrap  m-10 p-6 pl-40 ">
        {data.map((d) => (
          <Card style={{width: "20rem", height: "24rem"}} className="card-shadow">
            <Card.Img
              variant="top"
              src={d.img}
             className="card-img"
            />
            <Card.Body>
              <Card.Title className="fs-4 flex justify-center">
                {d.name}
              </Card.Title>
              <Card.Text className="fs-5 flex justify-center">
                {d.post}
              </Card.Text>
            
              <div className="flex justify-center">
          <a href={d.connect}>
            {" "}
            <button className="btn btn-primary">
              Know_More
              {/* <div className='px-2 linkidin_icon'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
            
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
     
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              </div> */}
              
            {/* </button>
          </a>
        </div>
            </Card.Body>
          </Card>
        ))}
      </div> */} */}
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
