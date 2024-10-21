import React from "react";
import e1 from "../../../assets/images/events/e1.jpg";
import e3 from "../../../assets/images/events/e3.jpg";
import e5 from "../../../assets/images/events/e5.jpg";
import e6 from "../../../assets/images/events/e6.jpg";
import e9 from "../../../assets/images/events/e9.jpg";
import e10 from "../../../assets/images/events/e10.jpg";
import e11 from "../../../assets/images/events/e11.jpg";

// const carouselItems = [
//   {
//     id: 'carousel-1',
//     imgSrc: 'https://images.unsplash.com/photo-1628788835388-415ee2fa9576?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80',
//     title: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
//     description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
//     prevId: 'carousel-3',
//     nextId: 'carousel-2',
//   },
//   {
//     id: 'carousel-2',
//     imgSrc: 'https://images.unsplash.com/photo-1628191139360-4083564d03fd?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80',
//     title: 'Scelerisque eleifend donec pretium vulputate sapien.',
//     description: 'Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.',
//     prevId: 'carousel-1',
//     nextId: 'carousel-3',
//   },
//   {
//     id: 'carousel-3',
//     imgSrc: 'https://images.unsplash.com/photo-1628718120482-07e03fe361dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80',
//     title: 'Consectetur purus ut faucibus pulvinar elementum.',
//     description: 'Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam tempor orci eu lobortis elementum.',
//     prevId: 'carousel-2',
//     nextId: 'carousel-1',
//   },
// ];
const cardsData = [
  {
    id: "carousel-1",
    title: "Brainwave ",
    content:
      "ACE BITS organised BRAINWAVE - A  Conclave a  Group Discussion event as GDs are an important part of the collaborative and cooperative learning process.",
    imgUrl: e1,
    prevId: "carousel-9",
    nextId: "carousel-2",
  },
  {
    id: "carousel-2",
    title: "E-Construct",
    content:
      "ACE BITS proudly presents E-Construct 2022, a monumental event that celebrates the fusion of beauty, history, and design.",
    imgUrl: e10,
    prevId: "carousel-1",
    nextId: "carousel-4",
  },
  // { id:'carousel-3', title: 'CARD 3', content: 'Peter Parker', imgUrl:(e3)},
  {
    id: "carousel-4",
    title: "Avlokan",
    content:
      "Avlokan the flagship tech fest hosted by the Association of Civil Engineers (ACE) at BIT Sindri. Packed with excitement and innovatio.",
    imgUrl: e11,
    prevId: "carousel-2",
    nextId: "carousel-5",
  },
  {
    id: "carousel-5",
    title: "Construction management",
    content:
      "A webinar based on career opportunities in real estate construction and finance management , featuring Mr. Abhay Kumar, Director of the prestigious Institute of Real Estate and Finance (I.R.E.F.).  ",
    imgUrl: e5,
    prevId: "carousel-4",
    nextId: "carousel-6",
  },
  {
    id: "carousel-6",
    title: "Platinum Jubliee",
    content:
      "Celebrated the Platinum Jubilee of BIT Sindri with unparalleled zeal, ACE BITS orchestrated an enlightening lecture series. The inaugural session of this lecture series, graced by esteemed Chief Guest Suresh Kumar Sir, Assistant Professor at IIT BHU.",
    imgUrl: e6,
    prevId: "carousel-5",
    nextId: "carousel-8",
  },
  // { id: "carousel-7", 
  //   title: "CARD 7", 
  //   content: "Peter Quill", 
  //   imgUrl: e7,
  //   prevId: "carousel-6",
  //   nextId: "carousel-8",
  // }
  
  {
    id: "carousel-8",
    title: "World Engineering Day",
    content:
      'On the occassion of Platinum Jubilee celebration lecture series,Department Of Civil Enginering BIT SINDRI orgnised a seminar on the topic WORLD ENGINEERING DAY FOR SUSTAINABLE DEVELOPMENT 2024 "Engineering Solutions for a Sustainable World".',
    imgUrl: e3,
    prevId: "carousel-6",
    nextId: "carousel-9",
  },
  {
    id: "carousel-9",
    title: "Badlav ",
    content:
      'To break the taboo of menstruation and help the needy one, here we are with an exhilarating event ,Badlav.It is a sanitary pads distribution with tagline "no more hushh!",and an awareness session on bad touch and good touch.',
    imgUrl: e9,
    prevId: "carousel-8",
    nextId: "carousel-1",
  },
];
const Card = ({ title, content, imgUrl }) => (
  <div className="S_card">
    <div className="card_img">
      <img src={imgUrl} alt={title} style={{ width: "80%", height: "80%" }} />
    </div>
    <div className="S_card-content">
      <h2 className="S_head">{title}</h2>
      {/* <p>{content}</p> */}
    </div>
  </div>
);

const PhoneSlider = () => {
  return (
    <div className="min-h-screen  p-6 mx-6 relative">
      <div className="w-72 mx-auto" >
        {cardsData.map((item, index) => (
          <div key={item.id}>
            <input
              className="sr-only peer"
              type="radio"
              name="carousel"
              id={item.id}
              defaultChecked={index === 0}
            />
            <div className="w-72 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
              <img
                className="rounded-t-lg w-96 h-64"
                src={item.imgUrl}
                alt={`Carousel Item ${index + 1}`}
              />
              <div className="py-4 px-8">
                <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight flex justify-center">
                  {item.title}
                </h1>
                {/* <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">{item.description}</p> */}
              </div>
              <div className="absolute top-1/2 w-full flex justify-between z-20">
                <label
                  htmlFor={item.prevId}
                  className="inline-block text-blue-600 cursor-pointer -translate-x-5 active:translate-y-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                <label
                  htmlFor={item.nextId}
                  className="inline-block text-blue-600 cursor-pointer translate-x-5  active:translate-y-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
 
    </div>
  );
};

export default PhoneSlider;
