import React from 'react'
import { Background } from 'react-parallax'
import Str from "../assets/images/laboratory/Structural_lab.png";
import Computor from "../assets/images/laboratory/Computor_lab.png";
import Concrete from "../assets/images/laboratory/Concrete_lab.png";
import Soil from "../assets/images/laboratory/3.png";
import Environmental from "../assets/images/laboratory/4.png";


const Lab = () => {
  return (
    <>
        <div className="post-bearer my-1">
        <h3 className="post-bearer-heading">LABORATORY</h3>
      </div>
      {/* Feature section */}
      <section class="big-feature-section"  >
        <div class="container flex big-feature-container"  >
            <div class="feature-img">
                <img src={Str} alt=""/>
            </div>
            <div class="feature-desc flex">
            <h2>STRUCTURAL LAB</h2>

             <p>Structural Lab provides knowledge of Fundamental research into the strength, fatigue resistance, serviceability, and safety of various structures. 
Some Instruments used in the laboratory are Dial gauge, drawing board etc.</p>
            </div>
        </div>
    </section>
    
    <section class="big-feature-section" >
        <div class="container flex big-feature-container"  id="second-big-feature">
            <div class="feature-img">
                <img src={Concrete} alt=""/>
            </div>
            <div class="feature-desc flex">
            <h2>CEMENT & CONCRETE TECHNOLOGY LAB</h2>
                <p>Concrete and materials testing Lab is used to determine the physical properties of building construction materials like cement, fine and coarse aggregate. Students can design the mix, make the specimens and test their respective strengths</p>
            </div>
        </div>
    </section>

    
    <section class="big-feature-section" >
        <div class="container flex big-feature-container" >
            <div class="feature-img">
                <img src={Environmental} alt=""/>
            </div>
            <div class="feature-desc flex">
            <h2>TRANSPORTATION/ HIGHWAY ENGG. LAB</h2>

             <p>Highway & Transportation Lab does Quality Assurance and Quality Control tests for the Roads and Traffic engineering enables students to learn and prepare road improvement plans to enhance road safety. Instruments used in the lab includes Los Angeles Machine, Impact Testing Machine, etc.</p>
            </div>
        </div>
    </section>
    
    <section class="big-feature-section" >
        <div class="container flex big-feature-container"  id="second-big-feature">
            <div class="feature-img">
                <img src={Soil} alt=""/>
            </div>
            <div class="feature-desc flex">
            <h2>ADV. SOIL MECH. LAB</h2>
                <p>Geotechnical Engineering Lab helps the students to get the idea of mechanics of soil and rocks with the help of instruments like Casagrande apparatus, Pycnometer etc and its applications to the development of human kind.</p>
            </div>
        </div>
    </section>

    <section class="big-feature-section" >
        <div class="container flex big-feature-container" >
            <div class="feature-img">
                <img src={Environmental} alt=""/>
            </div>
            <div class="feature-desc flex">
             
                <h2>SOIL MECH. LAB</h2>
                <p>In our soil mechanics lab, we discover texture, density, moisture, compaction, and strength through experiments on soil which is crucial for civil engineering projects' foundation design and construction quality assurance.</p>
            </div>
        </div>
    </section>
    <section class="big-feature-section" >
        <div class="container flex big-feature-container"  id="second-big-feature">
            <div class="feature-img">
                <img src={Soil} alt=""/>
            </div>
            <div class="feature-desc flex">
            <h2>ENVIRONMENTAL ENGG. LAB</h2>
                <p>The Environmental Engineering Lab in the Civil Engineering Department is essential for studying environmental factors. Students utilize advanced instruments to analyze water, wastewater, and air quality, contributing to advancements in environmental science.</p>
            </div>
        </div>
    </section>

    <section class="big-feature-section" >
        <div class="container flex big-feature-container" >
            <div class="feature-img">
                <img src={Computor} alt=""/>
            </div>
            <div class="feature-desc flex">
             
                <h2>COMPUTOR LAB</h2>
                <p>CADD Lab is the latest addition of Civil Engineering Department. Systems have pre installed Design Softwares, for instance, Autodesk AutoCAD of latest version , MIDAS CIVIL and CIVIL 3D where we foster creativity and innovation in engineering..</p>
            </div>
        </div>
    </section>
    <section class="big-feature-section" >
        <div class="container flex big-feature-container"   id="second-big-feature">
            <div class="feature-img">
                <img src={Concrete} alt=""/>
            </div>
            <div class="feature-desc flex">
             
                <h2>Building Materials & Construction Engg. Lab</h2>
                <p>The Building Material Technology Lab is essential for civil engineering students, offering crucial equipment for material analysis such as the Compression Testing Machine, Pycnometer, Measuring Cylinder, and Specific Gravity & Water Absorption Test Apparatus with electronic balance. </p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Lab
