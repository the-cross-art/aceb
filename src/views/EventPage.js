// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "../Event.css"
import e11 from "../assets/images/events/e11.jpg";

import e1 from "../assets/images/events/e1.jpg";
import e2 from "../assets/images/events/e2.jpg";
import e3 from "../assets/images/events/e3.jpg";
import e4 from "../assets/images/events/e4.jpg";

import e5 from "../assets/images/events/e5.jpg";

import e6 from "../assets/images/events/e6.jpg";

import e7 from "../assets/images/events/e7.jpg";

import e8 from "../assets/images/events/e8.jpg";

import e9 from "../assets/images/events/e9.jpg";

import e10 from "../assets/images/events/e10.jpg";

function Events() {
  return (
    <>
      <div className="post-bearer">
        <h3 className="post-bearer-heading">Events</h3>
      </div>

      <div className="w-full  ">
        <div className=" m-auto mt-20">
          <div className="mt-20">

            {data.map((d) => (
              <section class="big-feature-section">
                <div class="container flex big-feature-container" n id={d.id}>
                  <div class="event-feature-img">
                    <img src={d.img} alt="" />
                  </div>
                  <div class="event-feature-desc flex">
                    <h2>{d.name}</h2>

                    <p>
                          {d.para}
                    </p>
                  </div>
                </div>
              </section>

            ))}
        </div>
          </div>
      </div> 
    </>
  );
}

const data = [
  {
    name: `AVLOKAN’23`,
    img: e11,

    para:"AVLOKAN’23 ,celebration of science in a week full of events that promise to reinvigorate your love for science with interactive sessions, quizzes, model making, tribute to famous personalities, and technical presentations. Get ready for an incredible week jam-packed with the following events: Updesh (Panel Discussion),Samvad (Interactive Session),Chakravyu (Science Quiz), Nirmaan (Model Making),Science-ke-Shaan (Remembering renowned Personality), CAD-MAN (CAD Event), Genesis (Technical-paper presentation),Vitarkah (Technical Debate ).ACE BITS invites all aspiring geniuses to participate and showcase their talents!"
  },
  {
    name: `BADLAV`,
    img: e1,
    id: "second-big-feature",
    para:"NSS BIT Sindri with ACE BIT Sindri organised an event at DAV, Tasra on 12th march titled as Badlav-No More Hushh aiming to educate and empower young minds on crucial topics like good touch and bad touch and menstrual hygiene.The program emphasized the importance of understanding and recognizing the differences between good touch and bad touch. The event took a step further by distributing pads to the young girls of class 5 to 8. Spreading the significance of maintaining menstrual hygiene for a brighter and healthier future. Principal of DAV Tasra, Mr. Umesh sir and all the volunteers of NSS BIT Sindri and ACE were present on the event.NSS BIT Sindri and ACE initiative towards Badlav was a success and planted seeds of knowledge and empowerment that will undoubtedly flourish in the minds of the youth"
  },
  {
    name: `Badlav-glimpses`,
    img: e2,
    para:"NSS BIT Sindri with ACE BIT Sindri organised an event at DAV, Tasra on 12th march titled as Badlav-No More Hushh aiming to educate and empower young minds on crucial topics like good touch and bad touch and menstrual hygiene.The program emphasized the importance of understanding and recognizing the differences between good touch and bad touch. The event took a step further by distributing pads to the young girls of class 5 to 8. Spreading the significance of maintaining menstrual hygiene for a brighter and healthier future. Principal of DAV Tasra, Mr. Umesh sir and all the volunteers of NSS BIT Sindri and ACE were present on the event.NSS BIT Sindri and ACE initiative towards Badlav was a success and planted seeds of knowledge and empowerment that will undoubtedly flourish in the minds of the youth"

  },
  {
    name: `World Engineering Day`,
    img: e3,
    id: "second-big-feature",
    para:"Engineers, the architects of tomorrow, turn ideas into reality. Their creativity and problem-solving prowess propel us forward.Our event will shine with the presence of distinguished guests, including the renowned Prof. (Dr.) Sunil Kumar Gupta from IIT (ISM) Dhanbad, our esteemed Chief Guests Prof. (Dr.) Dheeraj Kumar, Chairman of IEI (Dhanbad Local Centre), and Prof. (Dr.) Biswajit Paul, Honorary Secretary of IEI (Dhanbad Local Centre). Adding to the luminance will be the esteemed Prof. (Dr.) Pankaj Rai, Director BIT Sindri, and our very own Head of Department, Dr. Jitu Kujur.Step into a world of celebration as we pay tribute to the ingenious thinkers who shape our world with innovation and ingenuity.Brimming with excitement and enthusiasm, and witnessing innovation at its finest!"
  },
  {
    name: `Platinum jublii Lecture Series`,
    img: e4,
    para:"Celebrating the Platinum Jubilee of BIT Sindri with unparalleled zeal, ACE BITS orchestrated an enlightening lecture series. The inaugural session of this lecture series, graced by esteemed Chief Guest Suresh Kumar Sir, Assistant Professor at IIT BHU, delved into the intricate realm of soft soil reinforced with stone columns. Accompanying luminaries, Mr. Motilal Vats and Sunil Kumar Aggarwal, shared profound life experiences, emphasizing the significance of perseverance and honesty in the pursuit of success. The event commenced with a gracious bouquet presentation to the dignitaries, followed by a warm welcome from Head of Civil Engineering Department, Jeetu Kujur Sir. Motilal Vats Sir's poignant discourse on sacrificing short-term comfort for long-term goals resonated deeply, setting the tone for the evening. Dr. Jeetu Kujur Sir felicitated Chief Guest Suresh Kumar Sir with a heartfelt momento, joined by BD Yadav Sir and Maya Rajnarayan Ray Ma'am honoring other distinguished guests. The event concluded with a gracious vote of thanks by Vikrama Pandey Sir"
  },
  {
    name: `Glimpses`,
    img: e6,
    id: "second-big-feature",
    para:"Celebrating the Platinum Jubilee of BIT Sindri with unparalleled zeal, ACE BITS orchestrated an enlightening lecture series. The inaugural session of this lecture series, graced by esteemed Chief Guest Suresh Kumar Sir, Assistant Professor at IIT BHU, delved into the intricate realm of soft soil reinforced with stone columns. Accompanying luminaries, Mr. Motilal Vats and Sunil Kumar Aggarwal, shared profound life experiences, emphasizing the significance of perseverance and honesty in the pursuit of success. The event commenced with a gracious bouquet presentation to the dignitaries, followed by a warm welcome from Head of Civil Engineering Department, Jeetu Kujur Sir. Motilal Vats Sir's poignant discourse on sacrificing short-term comfort for long-term goals resonated deeply, setting the tone for the evening. Dr. Jeetu Kujur Sir felicitated Chief Guest Suresh Kumar Sir with a heartfelt momento, joined by BD Yadav Sir and Maya Rajnarayan Ray Ma'am honoring other distinguished guests. The event concluded with a gracious vote of thanks by Vikrama Pandey Sir"

  },
  {
    name: `Engineer's Day`,
    img: e7,
    para:"Get ready to honour the brilliant minds behind our world's innovation on Engineer's Day!Join us in celebrating the brains who shape our world with innovation and ingenuity. Engineers, the architects of tomorrow, turn ideas into reality. Their creativity and problem-solving prowess propel us forward.Our event will shine with the presence of distinguished guests, including the renowned Prof. (Dr.) Sunil Kumar Gupta from IIT (ISM) Dhanbad, our esteemed Chief Guests Prof. (Dr.) Dheeraj Kumar, Chairman of IEI (Dhanbad Local Centre), and Prof. (Dr.) Biswajit Paul, Honorary Secretary of IEI (Dhanbad Local Centre). Adding to the luminance will be the esteemed Prof. (Dr.) Pankaj Rai, Director BIT Sindri, and our very own Head of Department, Dr. Jitu Kujur.Step into a world of celebration as we pay tribute to the ingenious thinkers who shape our world with innovation and ingenuity.Brimming with excitement and enthusiasm, and witnessing innovation at its finest!"
  },
  {
    name: `Carrer oportunities in real state`,
    img: e5,
    id: "second-big-feature",
    para:"The Association of Civil Engineers (ACE) of BIT Sindri presented a thought-provoking webinar on January 6, 2024, with Mr. Abhay Kumar, Director of IREF. Mr. Kumar gave insightful information on job options in construction, finance management, and real estate.His down-to-earth style struck a chord with the audience and illuminated the variety of career options in these domains. This was a really instructive workshop as attendees acquired a thorough overview of several job paths.The ACE webinar demonstrated BIT Sindri's dedication to empowering upcoming civil engineers by serving as a forum for knowledge sharing and career counselling."
  },
  {
    name: `56th Engineer's Day`,
    img: e8,
    para:"Science is about knowing; engineering is about doing-Henry Petroski.On the occassion of National Engineers day, civil engineering society in association with ACEBITS is organising a seminar to commemorate and celebrate the birth anniversary of Er. Mokshagundam Visvesvaraya. To add colours to our seminar we will have Prof. S C Dutta among us as the guest of honour for the day. He is a professor in Indian Institute of Technology( ISM) Dhanbad and a specialist in structural dynamics.Everyone is cordially invited to join us in the celebration because no doubt it will be a fun, interactive, and fruitful seminar."
  },
  {
    name: `Brain wave`,
    img: e9,
    id: "second-big-feature",
    para:"Brainwave Illuminate Minds Through Group Discourse. The journey of Brainwave which is organized by ACE is very appreciable where brilliant minds explore debate, and expand their horizons through group discussion. This event was designed to foster engaging conversations to spark the idea and promote collaborative thinking on a wide range of topics. Brainwave was the platform to stimulate participant's intellect."
  },
  {
    name: `E-construct`,
    img: e10,
    para:"ACE BITS proudly presents E-Construct 2023, a monumental event that celebrates the fusion of beauty, history, and design. Mark your calendars and join us at E-Construct 2023, where dreams are built, and possibilities know no bounds. Get ready to be inspired, amazed, and forever changed.Grab your cameras, upload your favorite monument selfies, and share the fascinating features that captivate you. Don't miss the chance to be part of engineering's greatest celebration."
  },
];

export default Events;
