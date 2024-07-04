import React from "react";
import News from "./News";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Newssection = () => {
  const newsRow1 = [
    {
      id: "1",
      img: "3.jpeg",
      heading: "Most Active Club of 2024",
      text: "Team Phoenix Racing is awarded as the most active club of season 2024 by FORMULA BHARAT",
      date: "20/01/2024",
    },
    {
      id: "2",
      img: "4.jpeg",
      heading: "Kari Motorsport",
      text: "Team Phoenix Racing in Kari Motorsport, Coimbatore",
      date: "20/01/2024",
    },
    {
      id: "3",
      img: "1.jpeg",
      heading: "Mindbend 2024",
      text: "Team Phoenix Racing Gears Up for a Thrilling Showrun at Gujarat's Premier Techno-Managerial Fest, Mindbend",
      date: "16/03/2024",
    },
    {
      id: "4",
      img: "2.jpeg",
      heading: "Startup Expo by RIAC, SVNIT",
      text: "Team Phoenix Racing Showcased Tadit, Our First EV Formula Student Car, at the Startup Expo Organized by RIAC SVNIT!",
      date: "09/03/2024",
    },
  ];
  const newsRow2 = [
    {
      id: "1",
      img: "8.jpeg",
      heading: "Webinar",
      text: `Team Phoenix Racing and Brahma Kumaris joined forces on World Environment Day to host a captivating webinar promoting the "Go Green" movement. The event focused on raising awareness about environmental issues and inspiring individuals to take sustainable actions for a healthier planet.`,
      date: "05-06-2023",
    },
    {
      id: "2",
      img: "5.jpeg",
      heading: "Exhibition",
      text: "Team Phoenix Racing is a Formula Student club that showcases their innovative racing car designs and engineering prowess in the lab exhibition and auto expo. They demonstrate their cutting-edge technologies, performance capabilities, and teamwork skills, attracting attention from motorsport enthusiasts and industry professionals alike.",
      date: "04-06-2023",
    },
    {
      id: "3",
      img: "7.jpeg",
      heading: "Orientation",
      text: "Team Phoenix Racing Juniors hosted a dynamic and engaging orientation event, empowering young talent to explore their potential. With a focus on fostering teamwork, honing driving skills, and instilling a passion for motorsports, the event provided a thrilling introduction to the world of racing for aspiring juniors.",
      date: "04-06-2023",
    },
    {
      id: "4",
      img: "6.jpeg",
      heading: "FBE Quiz",
      text: "The Formula Bharath Rule Book Quiz is a brief assessment that tests participants' knowledge of the rule book for Formula Bharath, an engineering design competition in India focused on building and racing formula-style race cars. The quiz covers various rules, regulations, and technical specifications that teams must adhere to while designing and constructing their vehicles.",
      date: "20-05-2023",
    },
  ];
  const newsRow3 = [
    {
      id: "1",
      img: "9.jpeg",
      heading: "Dr Driving",
      text: "This exciting competition will put your RC car-building skills to the ultimate trial, packed with dynamic challenges, and will test your car's desire for speed.",
      date: "02-04-2023",
    },
    {
      id: "2",
      img: "10.jpeg",
      heading: "Research And Innovation Day",
      text: "On the occasion of Research and Innovation Day, our team took part in a day long event, organised by Ashine, under SSIP 2.0, on 7th January. The exhibition catered us the chance to present our past and present achievements and interact with dignitaries and other tech-transfer-ready innovations developed by students and faculties of SVNIT. We are thankful for providing us this opportunity to extent our reach and gain exposure",
      date: "07-01-2023",
    },
    {
      id: "3",
      img: "11.jpeg",
      heading: "ISRO Space Show:24",
      text: "Thinkindia,a youth organisation, organised an ISRO space show on December 24 and 25, which featured projects from all of the technical clubs of SVNIT and ISRO. The ceremony was attended by the chief guest, Shri Virendra Singh (ITS), the guest of honour, Shri NJ Bhatt (Head VSSSE/SAC, ISRO), Dr. Anupam Shukla (Director SVNIT), Dr. Ravikant (Dean Student Welfare, SVNIT), and Shri Dushyant Mehta (President Of Alumni Association).",
      date: "25-12-2022",
    },
    {
      id: "4",
      img: "12.jpeg",
      heading: "EV vehicles workshop",
      text: `ATPAC in collaboration with FSAE is organising "A workshop on EV vehicles" with Sushil Reddy. Sushil Reddy is an IIT Bombay alumnus from the Department of Energy Science and Engineering and an HEC Paris Alumnus from the MSc Program in Sustainability and Social Innovation. Sushil has a mention in the Guinness Book of World Records for the longest journey on an ebike.`,
      date: "22-11-2022",
    },
  ];
  return (
    <>
      <Header />
      <div className="pb-5 pt-20 news">
        <div className="flex justify-center text-4xl lg:text-6xl p-5 text-blue-800">
          Latest Updates
        </div>
        <div className="flex justify-around">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {newsRow1.map((item) => (
              <div className="grid gap-4" key={item.id}>
                <News
                  imgName={item.img}
                  heading={item.heading}
                  text={item.text}
                  date={item.date}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-around">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {newsRow2.map((item) => (
              <div className="grid gap-4" key={item.id}>
                <News
                  imgName={item.img}
                  heading={item.heading}
                  text={item.text}
                  date={item.date}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-around">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {newsRow3.map((item) => (
              <div className="grid gap-4" key={item.id}>
                <News
                  imgName={item.img}
                  heading={item.heading}
                  text={item.text}
                  date={item.date}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Newssection;
