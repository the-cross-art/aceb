// import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import g4 from "../../assets/images/gallery/g4.jpg"
import g5 from "../../assets/images/gallery/g5.jpg"

import g6 from "../../assets/images/gallery/g6.jpg"
import g7 from "../../assets/images/gallery/g7.jpg"
import g8 from "../../assets/images/gallery/g8.jpg"
import g9 from "../../assets/images/gallery/g9.jpg"
import g10 from "../../assets/images/gallery/g10.jpg"
import g11 from "../../assets/images/gallery/g11.jpg"
import g12 from "../../assets/images/gallery/g12.jpg"
import g13 from "../../assets/images/gallery/g13.jpg"
import g14 from "../../assets/images/gallery/g14.jpg"
import g15 from "../../assets/images/gallery/g15.jpg"
import g16 from "../../assets/images/gallery/g16.jpg"
import g17 from "../../assets/images/gallery/g17.jpg"
import g18 from "../../assets/images/gallery/g18.jpg"
import g19 from "../../assets/images/gallery/g19.jpg"
import g20 from "../../assets/images/gallery/g20.jpg"
import g21 from "../../assets/images/gallery/g21.jpg"
import g22 from "../../assets/images/gallery/g22.jpg"
import g23 from "../../assets/images/gallery/g23.jpg"
import g24 from "../../assets/images/gallery/g24.jpg"

import g27 from "../../assets/images/gallery/g27.jpg"
import g26 from "../../assets/images/gallery/g26.jpg"
import g29 from "../../assets/images/gallery/g29.jpg"
import g30 from "../../assets/images/gallery/g30.jpg"
import g31 from "../../assets/images/gallery/g31.jpg"
import g32 from "../../assets/images/gallery/g32.jpg"



const ShuffleHero = () => {
  return (
    <section className="w-full px-0 py-12 grid grid-cols-1 md:grid-cols-2  gap-8 max-w-6xl mx-auto">
      <div>
        <h2 className="fs-1">Ace provides a platform</h2>
        <ul className="fs-5 list-decimal">
          <li>1.To interact with the department faculty members</li>
          <li>2.To interact with the professors, scientist and engineers from other organization</li>
          <li>3.To know about the recent development in civil engineering</li>
          <li>4.To promote the academic-industry collaborative research</li>
          <li>5.To gain practical and analytical knowledge via workshops and competitions</li>
          <li>6.To help in organizing various invited talks, lectures and seminars</li>
          <li>7.To Improve co-curricular and interpersonal skills (e.g. Fresher's & Farewell parties and Departmental field trips)</li>
           <li>8.To understand the scope and opportunities in Civil Engineering</li>
        </ul>
   
      
    
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: (g4),
  },
  {
    id: 2,
    src: (g5),
  },
  {
    id: 3,
    src: (g6),
  },
  {
    id: 4,
    src: (g7),
  },
  {
    id: 5,
    src: (g8),
  },
  {
    id: 6,
    src: (g9),
  },
  {
    id: 7,
    src: (g10),
  },
  {
    id: 8,
    src: (g11),
  },
  {
    id: 9,
    src: (g12),
  },
  {
    id: 10,
    src:(g13),
  },
  {
    id: 11,
    src: (g14),
  },
  {
    id: 12,
    src:(g15),
  },
  {
    id: 13,
    src:(g16),
  },
  {
    id: 14,
    src: (g17),
  },
  {
    id: 15,
    src: (g18),
  },
  {
    id: 16,
    src: (g19),
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;