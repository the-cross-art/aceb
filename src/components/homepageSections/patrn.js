import React, { useEffect, useRef } from 'react';
import "./patrn.css";

const TestimonialsCarousel = () => {
  const testimonialItemsRef = useRef(null);
  let timer;

  useEffect(() => {
    const testimonialItems = testimonialItemsRef.current.querySelectorAll('.item label');

    function cycleTestimonials(index) {
      timer = setTimeout(() => {
        let evt;
        if (document.createEvent) {
          // If browser = IE, then polyfill
          evt = document.createEvent('MouseEvent');
          evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        } else {
          // If Browser = modern, then create new MouseEvent
          evt = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: 20
          });
        }
        const ele = "." + testimonialItems[index].className;
        const ele2 = document.querySelector(ele)
        ele2.dispatchEvent(evt);
        index++; // Increment the index
        if (index >= testimonialItems.length) {
          index = 0; // Set it back to `0` when it reaches `3`
        }
        cycleTestimonials(index); // recursively call `cycleTestimonials()`
        document.querySelector(".testimonials").addEventListener("click", function () {
          clearTimeout(timer); // stop the carousel when someone clicks on the div
        });
      }, 2000); // adjust scroll speed in milliseconds
    }
    // run the function
    cycleTestimonials(0);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <div className="col-sm-7 mx-auto">
        <header className="section-header text-center">
          <span className="h1 d-block">
            <span>❝</span>
          </span>
          <h2>OUR PATRONAGE</h2>
        </header>
      </div>

      <div id="flex-container" className="testimonials">
        <div id="left-zone">
          <ul className="list" ref={testimonialItemsRef}>
            <li className="item">
              <input type="radio" id="radio_testimonial-1" name="basic_carousel" defaultChecked />
              <label className="label_testimonial-1" htmlFor="radio_testimonial-1">prof. Pankaj Rai</label>
              <div className="content-test content_testimonial-1">
                <span className="picto"></span>
                <h1>prof. Pankaj Rai</h1>
                <p>“
                  {/* BIT Sindri embodies a haven for learners, fostering a profound
                  thirst for knowledge and a genuine eagerness to learn. As part of a pioneering institution with national acclaim, we pride ourselves on
                  delivering comprehensive technical education, blending academic
                  excellence with practical skills. Congratulations to the esteemed
                  Civil Engineering Department. I extend my best wishes to the
                  dedicated students and faculty, confident in their ability to continue
                  excelling and making significant contributions to the field. */}
                  I wish to express my appreciation and thanks to the professors
                  and students whose many long hours of efforts in organizing
                  activities made this association get significance and its true worth
                  ”</p>
                <p className="testimonialFrom">Director Bit Sindri</p>
                <p className="testimonialState">Dhanbad, Jharkhand</p>
              </div>
            </li>
            <li className="item">
              <input type="radio" id="radio_testimonial-2" name="basic_carousel" />
              <label className="label_testimonial-2" htmlFor="radio_testimonial-2">Prof. Jitu Kujur</label>
              <div className="content-test content_testimonial-2">
                <span className="picto"></span>
                <h1>Prof. Jitu Kujur</h1>
                <p>"
                  {/* I wish to express my appreciation and thanks to the professors
                  and students whose many long hours of efforts in organizing
                  activities made this association get significance and its true worth.  */}
                  I extend heartfelt gratitude to the professors and students whose
                  dedicated efforts and countless hours organizing activities have
                  bestowed significance upon this association. Together, we've achieved remarkable milestones and
                  created enduring memories. Thank you for your unwavering
                  dedication and passion."</p>
                <p className="testimonialFrom">HOD, civil Department Bit Sindri</p>
                <p className="testimonialState">Dhanbad, Jharkhand</p>
                <br />
              </div>
            </li>
            <li className="item">
              <input type="radio" id="radio_testimonial-3" name="basic_carousel" />
              <label className="label_testimonial-3" htmlFor="radio_testimonial-3">Prof. P.K Sharma</label>
              <div className="content-test content_testimonial-3">
                <span className="picto"></span>
                <h1>Prof. P.K Sharma</h1>
                <p>“I deeply appreciate the unwavering commitment of professors and
                  students who dedicated countless hours to organizing activities.
                  Their efforts have bestowed genuine meaning upon our
                  association, fostering a strong community and creating invaluable
                  experiences. ”</p>
                <p className="testimonialFrom"> Prof. Incharge,Ace Bit Sindri</p>
                <p className="testimonialState">Dhanbad, Jharkhand</p>
              </div>
            </li>
            <li className="item">
              <input type="radio" id="radio_testimonial-4" name="basic_carousel" />
              <label className="label_testimonial-4" htmlFor="radio_testimonial-4">Prashant Ranjan Malviya</label>
              <div className="content-test content_testimonial-4">
                <span className="picto"></span>
                <h1>Prashant Ranjan Malviya</h1>
                <p>"I hope this message finds you
                  well. I wanted to take a moment to express my  deepest gratitude and
                  appreciation to the students  and faculty members for their
                  invaluable contributions to our  academic community.Thank
                  you for your tireless efforts and contribution in different
                  types of activities and events.
                  {/* I
                  would like to extend my
                  heartfelt thanks to all of you. */}
                  "
                </p>
                <p className="testimonialFrom"> Assistant Prof. Incharge,Ace Bit Sindri</p>
                <p className="testimonialState">Dhanbad, Jharkhand</p>
                <br />
              </div>
            </li>
          </ul>
        </div>
        <div id="right-zone"></div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
