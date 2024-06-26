import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './testimonials.css';

const testimonials = [
  {
    name: "Dr. Anupam Shukla",
    image: "image1.jpg",
    position: "Director, SVNIT",
    text: "Sardar Vallabhbhai National Institute of Technology, Surat, Gujarat, (An institute of National Importance), proudly presents SAE Phoenix Racing, the technical student chapter dedicated to the design and fabrication of formula style race cars including E-vehicle. Their involvement in such competitions provides a backup for the development of a holistic personality via creativity, problem solving, and team leading and working activities through multidisciplinary work culture and student-teacher interaction. Students have won the prestigious competitions with great spirit in the past few years, bringing glory to the institute and they aspire to grow manifolds in the future. I wish for a bright and energetic future ahead."
  }, {
    name: "Dr. A. A. Shaikh",
    image: "image2.jpg",
    position: "Head of the Mechanical Engineering Department",
    text: "Phoenix Racing is one of the oldest technical clubs of SVNIT- dedicated to technical activities associated with Automobile Engineering. The environment and bonding they create during their technical engagements encourage students to develop a blend of passion for innovation in allied areas of automobile engineering. The interaction also augments the all-round personality along with managerial skills of the team members. The club has proven its potential through years of hard work, and team members have come up with many innovations. I am hopeful that their future achievements will be even greater. Their recent venture towards electric vehicles will definitely help the mobility of the country in the future. Best wishes to the team for its future endeavors."
  }, {
    name: 'Harsh Patel',
    image: "image3.jpg",
    position: "Team Captain 2022-23",
    text: "Phoenix Racing is the engine of SVNIT’s automotive culture. If someone puts in a wholehearted effort to be a part of the team, the learning indirectly comes together. The best place to gain practical experience is by working on the final sophisticated product for months, i.e. the race car. I will always be very grateful for this chapter in my life and wish the future generations of this team the best of luck to achieve the greatest accomplishments in the automotive sector."
  }
]
class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        useKeyboardArrows={true}
        interval={6100}
        className="testimonial-carousel"
      >
        {
          testimonials.map(({ name, position, text, image }) => {
            return (
              <div className="p-0 text-white">
                <div className="test-Carousel">
                  <h3>{name}</h3>
                  <h4>{position}</h4>
                  <p>
                    {text}
                  </p>
                </div>
              </div>
            )
          })
        }
      </Carousel>
    );
  }
}
export default Testimonials;