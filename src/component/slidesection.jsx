import React from "react";
import img1 from '../assets/img/Logo1.png';
import img2 from '../assets/img/Logo2.png';
import img3 from '../assets/img/Logo3.png';
import img4 from '../assets/img/Logo4.png';
import img5 from '../assets/img/Logo5.png';
import img6 from '../assets/img/Logo6.png';
import img7 from '../assets/img/Logo7.png';
import img8 from '../assets/img/Logo8.png';
import img9 from '../assets/img/Logo9.png';
import img10 from '../assets/img/Logo10.png';
import img11 from '../assets/img/Logo11.png';
import img12 from '../assets/img/Logo12.png';
import img13 from '../assets/img/Logo13.png';
import img14 from '../assets/img/Logo14.png';
import img15 from '../assets/img/Logo15.png';
import '../assets/css/slidesection.css';

const SlideSection = () => {
  const row1 = [img1, img2, img3, img4, img5,img6, img7, img8, img9, img10,img11,img12,img13,img14,img15];
  const row2 = [img15,img14,img13,img12,img11,img10,img9,img8,img7, img6, img5, img4, img3, img2, img1];

  return (
    <div className="position-relative py-4 container mt-lg-5 mt-0">

      <div className="overflow-hidden mb-4">
        
        {/* First Row */}
        <div className="d-flex marquee flex-nowrap">
          {[...row1, ...row1].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`logo-${idx}`}
              className="img-fluid mx-2 mx-md-4 logo-img"
            />
          ))}
        </div>

        {/* Second Row */}
        <div className="d-flex marquee marquee-reverse flex-nowrap mt-4">
          {[...row2, ...row2].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`logo-${idx}`}
              className="img-fluid mx-2 mx-md-4 logo-img"
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default SlideSection;
