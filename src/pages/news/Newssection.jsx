import React from "react";
import News from "./News";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Newssection = () => {
  return (<>
    <Header />
    <div className="pb-5 pt-20 news">
      <div className="flex justify-center   text-4xl lg:text-6xl p-5 text-blue-800">
        Latest Updates
      </div>
      <div className="flex justify-around">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <News
              imgName="3.jpeg"
              heading="Most Active Club of 2024"
              text="Team Phoenix Racing is awarded as the most active club of season 2024 by FORMULA BHARAT"
              date="20/01/2024"
            />
          </div>
          <div className="grid gap-4">
            <News
              imgName="4.jpeg"
              heading="Kari Motorsport"
              text="Team Phoenix Racing in Kari Motorsport, Coimbatore"
              date="20/01/2024"
            />
          </div>
          <div className="grid gap-4">
            <News
              imgName="1.jpeg"
              heading="Mindbend 2024"
              text="Team Phoenix Racing Gears Up for a Thrilling Showrun at Gujarat's Premier Techno-Managerial Fest, Mindbend"
              date="16/03/2024"
            />
          </div>
          <div className="grid gap-4">
            <News
              imgName="2.jpeg"
              heading="Startup Expo by RIAC, SVNIT"
              text="Team Phoenix Racing Showcased Tadit, Our First EV Formula Student Car, at the Startup Expo Organized by RIAC SVNIT!"
              date="09/03/2024"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Newssection;
