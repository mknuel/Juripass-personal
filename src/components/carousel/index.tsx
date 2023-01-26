import React, { useEffect, useRef, useState } from 'react'
import { IMAGE } from '../../assets/images/images';
import './index.scss'

let scrollNum = 0;

const Carousel = ({ testimonials }: any) => {
   const [isActiveCarousel, setisActiveCarousel] = useState(0);
   const scrollRef: any = useRef(null);


   const changeActiveCarouselPrev = () => {
      const element = scrollRef.current;
      if (isActiveCarousel < 1) {
         scrollNum = 0;
         setisActiveCarousel(0);
         element.scrollTo({
            left: 0,
            behavior: "smooth",
         });
      } else {
         scrollNum -= 400;
         setisActiveCarousel((current) => current - 1);
         element.scrollTo({
            left: scrollNum,
            behavior: "smooth",
         });
      }
   };

   const changeActiveCarouselNext = () => {
      const element = scrollRef.current;
      if (isActiveCarousel > testimonials?.length - 2) {
         scrollNum = 0;
         setisActiveCarousel(0);
         element.scrollTo({
            left: 0,
            behavior: "smooth",
         });
      } else {
         scrollNum += 400;
         setisActiveCarousel((current) => current + 1);
         element.scrollTo({
            left: scrollNum,
            behavior: "smooth",
         });
      }
   };

   return (
      <div>
         <div className="carousel-con" ref={scrollRef}>
            {/* <div className="carousel" style={{ width: `calc(400 * ${testimonials?.length} )` }}> */}
            <div className="carousel" style={{ width: `calc(400 * 4 )` }}>
               {/* {testimonials?.map((item: any, index: any) => (
                  <div style={{ opacity: `${isActiveCarousel === index ? '1' : '0.6'}`, transform: `${isActiveCarousel === index ? 'scale(1.01)' : 'scale(1)'}` }}>
                  </div>
               ))} */}
               <div className='carousel-tab'>
                  <div className='carousel-tab-user'>
                     <img src={IMAGE.Lawyer3} alt="testifier" />
                     <div>
                        <b>John Doe</b>
                        <p>Lawyer</p>
                     </div>
                  </div>
                  <div>
                     <p>Neque vel platea ut erat purus habitant nunc imperdiet. Quis nulla id aliquam non. Ante tempor dolor sit nisi velit. Sit leo cursus id aliquam accumsan. Dictumst sed nibh sollicitudin suscipit pretium eget imperdiet senectus. Dui id fermentum nisl molestie at placerat volutpat. Luctus viverra bibendum morbi iaculis pellentesque aliquam ligula purus. Neque vel platea ut erat purus habitant nunc imperdiet. Quis nulla id aliquam non. Ante tempor dolor sit nisi velit. Sit leo cursus id aliquam accumsan.</p>
                  </div>
               </div>
               <div className='carousel-tab'>
                  <div className='carousel-tab-user'>
                     <img src={IMAGE.Lawyer3} alt="testifier" />
                     <div>
                        <b>John Doe</b>
                        <p>Lawyer</p>
                     </div>
                  </div>
                  <div>
                     <p>Neque vel platea ut erat purus habitant nunc imperdiet. Quis nulla id aliquam non. Ante tempor dolor sit nisi velit. Sit leo cursus id aliquam accumsan. Dictumst sed nibh sollicitudin suscipit pretium eget imperdiet senectus. Dui id fermentum nisl molestie at placerat volutpat. Luctus viverra bibendum morbi iaculis pellentesque aliquam ligula purus. Neque vel platea ut erat purus habitant nunc imperdiet. Quis nulla id aliquam non. Ante tempor dolor sit nisi velit. Sit leo cursus id aliquam accumsan.</p>
                  </div>
               </div>
               <div className='carousel-tab'>
                  <div className='carousel-tab-user'>
                     <img src={IMAGE.Lawyer3} alt="testifier" />
                     <div>
                        <b>John Doe</b>
                        <p>Lawyer</p>
                     </div>
                  </div>
                  <div>
                     <p>Neque vel platea ut erat purus habitant nunc imperdiet. Quis nulla id aliquam non. Ante tempor dolor sit nisi velit. Sit leo cursus id aliquam accumsan. Dictumst sed nibh sollicitudin suscipit pretium eget imperdiet senectus. Dui id fermentum nisl molestie at placerat volutpat. Luctus viverra bibendum morbi iaculis pellentesque aliquam ligula purus. Neque vel platea ut erat purus habitant nunc imperdiet. Quis nulla id aliquam non. Ante tempor dolor sit nisi velit. Sit leo cursus id aliquam accumsan.</p>
                  </div>
               </div>
               <div className='carousel-tab'>
                  <div className='carousel-tab-user'>
                     <img src={IMAGE.Lawyer3} alt="testifier" />
                     <div>
                        <b>John Doe</b>
                        <p>Lawyer</p>
                     </div>
                  </div>
                  <div>
                     <p>Neque vel platea ut erat purus habitant nunc imperdiet. Quis nulla id aliquam non. Ante tempor dolor sit nisi velit. Sit leo cursus id aliquam accumsan. Dictumst sed nibh sollicitudin suscipit pretium eget imperdiet senectus. Dui id fermentum nisl molestie at placerat volutpat. Luctus viverra bibendum morbi iaculis pellentesque aliquam ligula purus. Neque vel platea ut erat purus habitant nunc imperdiet. Quis nulla id aliquam non. Ante tempor dolor sit nisi velit. Sit leo cursus id aliquam accumsan.</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="controls">
            <button className="active" onClick={changeActiveCarouselPrev}>{"<<"}</button>
            <button onClick={changeActiveCarouselNext}>{">>"}</button>
         </div>
      </div>
   )
}

export default Carousel

