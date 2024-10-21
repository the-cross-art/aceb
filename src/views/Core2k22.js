import React from "react";
import "./Team.css"
import abhay from "../assets/images/2k22/abhay.jpeg";
import abhishek from "../assets/images/2k22/abhishek.jpg";
import abhinav from "../assets/images/2k22/abhinav.jpg";
import aryan from "../assets/images/2k22/aryan.jpg";

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
import shipra from "../assets/images/2k22/shipra.jpeg";
import sumit from "../assets/images/2k22/sumit.jpg";
import anjali from "../assets/images/2k22/anjali.jpg"
import divyanshu from "../assets/images/2k22/divyanshu.jpg"
import harshita from "../assets/images/2k22/harshita.jpeg"
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
import rimil from "../assets/images/2k22/rimilhansda.jpg"
import shubhams from "../assets/images/2k22/shubhams.jpeg"
import swami from "../assets/images/2k22/priyaswami.jpeg"
import sushant from "../assets/images/2k22/sushant.jpeg"
import sohel from "../assets/images/2k22/sohel.jpeg"
import sahil from "../assets/images/2k22/sahil.jpeg"






const Core = () => {
    return (
      <>
        <div className="post-bearer my-3">
          <h3 className="post-bearer-heading">Core Members:Incharge 2024-2025</h3>
        </div>
        {/*  */}
        
          
       


<section class="bg-white dark:bg-gray-900">
<div class="container px-6  mx-auto">
    <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Executive Team</h1>



    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">

    {data.map((d) => (

        <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group bg-slate-100 hover:bg-blue-600 ">
            <img class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src={d.photo} alt=""/>

            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">{d.name}</h1>

            <p class="mt-2 text-gray-500 capitalize  group-hover:text-gray-300">{d.teams}</p>

            <div class="flex mt-3 -mx-2">
              

                <a href={d.linkedin} class="mx-2 text-gray-600  hover:text-gray-500  group-hover:text-white" aria-label="Github">
                   
                     <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"> <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path> </svg>
                  
                </a>
            </div>
        </div>
        
    ))};

    </div>
</div>
</section> 










       
      </>
    );
  };


const data = [
   
    {
        "email": "muskanprakriti@gmail.com",
        "name": "Muskan Prakriti",
        "batch": "2022-26",
        "teams": [
            "Counselling Team , ",
            "Research & Project Application Team"
        ],
        "linkedin": "https://www.linkedin.com/in/muskan-prakriti-b3a68a257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "photo": muskan
    },

    {
        "email": "#",
        "name": "Shubham Kr Singh",
        "batch": "2022-26",
        "teams": [
            "Industrial relation team "
        ],
        "linkedin": "https://www.linkedin.com/in/shubham-kumar-singh-74793924b/",
        "photo": shubhams
    },
    {
        "email": "divyanshukumar0789@gmail.com",
        "name": "Divyanshu Kumar",
        "batch": "2022-26",
        "teams": [
            "counselling Team ,",
            " sponsorship Team"
            
        ],
        "linkedin": "https://www.linkedin.com/in/divyanshu-kumar-7b4416263",
        "photo": divyanshu
    },
    {
        "email": "divyanshukumar0789@gmail.com",
        "name": "Divyanshu Kr Singh",
        "batch": "2022-26",
        "teams": [
            "GATE-ESE Forum,",
            "Marketing Team"
            
        ],
        "linkedin": "https://www.linkedin.com/in/divyanshu-kumar-singh-6aa47025b/",
        "photo": divyanshus
    },
    {
        "email": "#",
        "name": "Deepak Prakash",
        "batch": "2022-26",
        "teams": [
            "Operational Team  "
        ],
        "linkedin": "https://www.linkedin.com/in/deepak-prakash-702ba3256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "photo": deepakp
    },
   
    {
        "email": "manishmahato@gmail.com",
        "name": "Manish Kr. Mahato",
        "batch": "2022-26",
        "teams": [
            "Designing Team"
        ],
        "linkedin": "https://www.linkedin.com/in/manish-kumar-75946b264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "photo": manish
    },
    {
        "email": "hritikochar@gmail.com",
        "name": "Hritik Kochar",
        "batch": "2022-26",
        "teams": [
            "Designing Team, ",
            "Sports and Cultural Team"
        ],
        "linkedin": "https://www.linkedin.com/in/hritik-kochar/",
        "photo": hritik
    },
    {
        "email": "riya.gupta@example.com",
        "name": "Riya Gupta",
        "batch": "2022-26",
        "teams": [
            "Designing Team & ",
            "Social Media Team"
        ],
        "linkedin": "https://www.linkedin.com/in/riya-gupta-6b0835256?trk=blended-typeahead",
        "photo": riyagupta
    },
    {
        "email": "muskanprakriti@gmail.com",
        "name": "Harshita Kashyap",
        "batch": "2022-26",
        "teams": [
            "Operational Team , ",
            
        ],
        "linkedin": "https://www.linkedin.com/in/harshita-kashyap-bitsindri",
        "photo": harshita
    },
    {
        "email": "shiprakumari@example.com",
        "name": "Shipra Kumari",
        "batch": "2022-26",
        "teams": [
            "operational Team & Public Relations Team"
        ],
        "linkedin": "https://www.linkedin.com/in/shipra-kumari-104095257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "photo": shipra
    },
    {
        "email": "aryan.kumar@example.com",
        "name": "Aryan Kumar",
        "batch": "2022-26",
        "teams": [
            "Ideation Team"
        ],
        "linkedin": "https://www.linkedin.com/in/aryan-kumar-9b82b8243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "photo": aryan
    },
    {
        "email": "jaydeep.kumar@example.com",
        "name": "Jaydeep Kumar",
        "batch": "2022-26",
        "teams": [
            "Ideation Team"
        ],
        "linkedin": "#",
        "photo": jaydeep
    },
 
    {
        "email": "abhishek.thakur@example.com",
        "name": "Abhishek Thakur",
        "batch": "2022-26",
        "teams": [
            "Social Media Team"
        ],
        "linkedin": "https://www.linkedin.com/in/abhishek-thakur-88a637261/",
        "photo": abhishek
    },
    {
        "email": "abhaykumar.m@example.com",
        "name": "Abhay Kr. Mahato",
        "batch": "2022-26",
        "teams": [
            "Development Team"
        ],
        "linkedin": "https://www.linkedin.com/in/abhay-kumar-mahato-58a1a624a/",
        "photo": abhay
    },
    {
        "email": "rahulkalindi95@gmail.com",
        "name": "Rahul Kalindi",
        "batch": "2022-26",
        "teams": [
            "Development Team"
        ],
        "linkedin": "https://www.linkedin.com/in/rahul-kalindi-a2a28224b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "photo": rahulkali
    },
   
    {
        "email": "sneharaj22042005@gmail.com",
        "name": "Sneha Raj",
        "batch": "2022-26",
        "teams": [
            "Marketing Team"
        ],
        "linkedin": "https://www.linkedin.com/in/sneha-raj-b64580287",
        "photo": sneha
    },
    {
        "email": "anjali.vishnupriya@example.com",
        "name": "Anjali Vishnupriya",
        "batch": "2022-26",
        "teams": [
            "Editorial Team"
        ],
        "linkedin": "https://www.linkedin.com/in/anjali-vishnupriya-579a30272",
        "photo": anjali
    },
    {
        "email": "rahulkumar@example.com",
        "name": "Rahul Kumar",
        "batch": "2022-26",
        "teams": [
            "Editorial Team"
        ],
        "linkedin": "https://www.linkedin.com/in/rahul-kumar2802/",
        "photo": rahul
    },
    {
        "email": "abhinavgourav@example.com",
        "name": "Abhinav Gourav",
        "batch": "2022-26",
        "teams": [
            "Editorial Team"
        ],
        "linkedin": "https://www.linkedin.com/in/abhinav-gourav-b331b8257",
        "photo": abhinav
    },
    {
        "email": "shrabankumar77777@gmail.com",
        "name": "Shraban Kumar Dan",
        "batch": "2022-26",
        "teams": [
            "Editorial Team"
        ],
        "linkedin": "https://www.linkedin.com/in/shraban-kumar-600a2925a",
        "photo": shraban
    },
    

    {
        "email": "upenmahto1122@gmail.com",
        "name": "Upen Mahto",
        "batch": "2022-26",
        "teams": [
            "GATE-ESE Forum"
        ],
        "linkedin": "https://www.linkedin.com/in/upen-mahto-6325a9257/",
        "photo": upen
    },
    {
        "email": "kuwarsingh28092004@gmail.com",
        "name": "Kuwar Singh",
        "batch": "2022-26",
        "teams": [
            "Research & Project Application Team"
        ],
        "linkedin": "https://www.linkedin.com/in/kuwar-singh28/",
        "photo": kuwar
    },

    {
        "email": "prince.kumar@example.com",
        "name": "Prince Kumar",
        "batch": "2022-26",
        "teams": [
            "Research & Project Application Team"
        ],
        "linkedin": "https://www.linkedin.com/in/prince-kumar-aaa442304/",
        "photo": prince
    },
    {
        "email": "priyaswami@example.com",
        "name": "Priya Swami",
        "batch": "2022-26",
        "teams": [
            "Public Relations Team"
        ],
        "linkedin": "https://www.linkedin.com/in/priyaswami001?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        "photo": swami
    },
    {
        "email": "rimilhansda@example.com",
        "name": "Rimil Hansda",
        "batch": "2022-26",
        "teams": [
            "Sponsorship Team"
        ],
        "linkedin": "https://in.linkedin.com/in/rimil-hansda-702b24256",
        "photo": rimil
    },
    {
        "email": "sahilbharti@example.com",
        "name": "Sahil Bharti",
        "batch": "2022-26",
        "teams": [
            "Sponsorship Team"
        ],
        "linkedin": "https://www.linkedin.com/in/sahil-bharti-05a086318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        "photo": sahil
    },
    {
        "email": "mdsohelakhtar@example.com",
        "name": "MD Sohel Akhtar",
        "batch": "2022-26",
        "teams": [
            "Sports and Cultural Team"
        ],
        "linkedin": "#",
        "photo": sohel
    },
    {
        "email": "sushantabhishek@example.com",
        "name": "Sushant Abhishek",
        "batch": "2022-26",
        "teams": [
            "Alumni Relations Team,",
            " Industrial Relations Team"
        ],
        "linkedin": "https://www.linkedin.com/in/sushant-singh-860095258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "photo": sushant
    },
    {
        "email": "princy.kumarijha@example.com",
        "name": "Princy Kumari Jha",
        "batch": "2022-26",
        "teams": [
            "Alumni Relations Team"
        ],
        "linkedin": "#",
        "photo": "#"
    }
   
]


  export default Core;