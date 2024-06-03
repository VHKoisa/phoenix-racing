import React from "react";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div className="main">
      <Header />

      <div className="info">
        <div className="hero-info">
          <div className="hero-heading">
            <h1 className="heading-1">
              REVOLVING WHEELS WITH REVOLUTIONARY BRAINS
            </h1>
          </div>
          <div className="hero-para">
            <p className="hero-text">
              Introducing Phoenix Racing, one of the most dynamic and
              technically proficient student chapters at SVNIT. Our chapter is
              driven by the revolutionary minds of our students, who channel
              their passion for cars into creating engineering marvels. Each
              year, students from various engineering disciplines undergo a
              rigorous selection process to become part of this esteemed team.
              Our primary goal is to foster innovation and engineering
              excellence among students, providing them with hands-on experience
              in automotive engineering. Since our establishment in 2005, we
              have built a lasting legacy of developing a wide range of car
              variations. Phoenix Racing is proud to have actively participated
              in and successfully competed in numerous competitions, like Baja,
              Supra SAE, Go-Kart, and Formula Bharat. we are known for our
              commitment to pushing the boundaries of automotive engineering and
              achieving remarkable success in the field of motorsports.
            </p>
          </div>
        </div>
      </div>

      {/* sponsors */}
      <div className="sponsorHome">
        <div className="sponsorHeadingTitle">
          <h1 className="heading">Our Sponsors</h1>
        </div>

        <div className="goldSponsor">
          <div className="row1">
            <div className="imgBlock">
              <a target="_blank" href="https://www.anupamrasayan.com">
                <img
                  className="sponsorLogo"
                  src="src/pages/Sponsors/logo/anupam.jpg"
                />
              </a>
            </div>
            <div className="imgBlock">
              <a target="_blank" href="https://www.larsentoubro.com/">
                <img
                  className="sponsorLogo"
                  src="src/pages/Sponsors/logo/larsen.jpg"
                />
              </a>
            </div>
          </div>
          <div className="row2">
            <div className="imgBlock">
              <a target="_blank" href="https://www.maksteelindia.com/">
                <img
                  className="sponsorLogo"
                  src="src/pages/Sponsors/logo/maksteel.jpg"
                />
              </a>
            </div>
            <div className="imgBlock">
              <a target="_blank" href="https://aether.co.in/">
                <img
                  className="sponsorLogo"
                  src="src/pages/Sponsors/logo/aether.jpg"
                />
              </a>
            </div>
            <div className="imgBlock">
              <a target="_blank" href="https://www.amiorganics.com/">
                <img
                  className="sponsorLogo"
                  src="src/pages/Sponsors/logo/ami.jpg"
                />
              </a>
            </div>
          </div>

          <div className="row3">
            <div className="imgBlock">
              <a target="_blank" href="https://www.texfabindia.com/">
                <img
                  className="sponsorLogo"
                  src="src/pages/Sponsors/logo/texfab.jpg"
                />
              </a>
            </div>
            <div className="imgBlock">
              <a target="_blank" href="https://www.nanavatitoyota.com/">
                <img
                  className="sponsorLogo"
                  src="src/pages/Sponsors/logo/toyota.jpg"
                />
              </a>
            </div>
            <div className="imgBlock">
              <a target="_blank" href="https://www.agnimotors.com/">
                <img
                  className="sponsorLogo"
                  src="src/pages/Sponsors/logo/agni.png"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="silverSponsor"></div>
        <div className="srow1">
          <a target="_blank" href="https://www.altret.com/">
            <img
              className="sponsorLogo2"
              src="src/pages/Sponsors/logo/altret.jpg"
            />
          </a>
          <a target="_blank" href="https://www.gujtex.in/">
            <img
              className="sponsorLogo2"
              src="src/pages/Sponsors/logo/gujtex.jpg"
            />
          </a>
          <a target="_blank" href="https://indianpowertrans.com/">
            <img
              className="sponsorLogo2"
              src="src/pages/Sponsors/logo/Vpower.jpg"
            />
          </a>
          <a target="_blank" href="https://enpro.co.in/">
            <img
              className="sponsorLogo2"
              src="src/pages/Sponsors/logo/enpro.jpg"
            />
          </a>
          <a target="_blank" href="https://g.co/kgs/hDiTcL8">
            <img
              className="sponsorLogo2"
              src="src/pages/Sponsors/logo/prayosha.jpg"
            />
          </a>
        </div>

        <div className="srow2">
          <a target="_blank" href="https://www.flautacustoms.com/">
            <img
              className="sponsorLogo2"
              src="src/pages/Sponsors/logo/flauta.jpg"
            />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/groups/409225552807489/"
          >
            <img
              className="sponsorLogo2"
              src="src/pages/Sponsors/logo/svnit.jpg"
            />
          </a>
        </div>

        <div className="componentSponsor">
          <h2 className="componentHeading">Component Sponsor</h2>
          <div className="crow">
            <a target="_blank" href="https://filmshoppee.com/">
              <img
                className="cImg"
                src="src/pages/Sponsors/logo/filmShopee.jpg"
              />
            </a>
            <a target="_blank" href="https://www.agnimotors.com/">
              <img className="cImg" src="src/pages/Sponsors/logo/agni.png" />
            </a>
          </div>
          <div className="crow">
            <a target="_blank" href="https://www.bender-in.com/">
              <img className="cImg" src="src/pages/Sponsors/logo/bender.jpg" />
            </a>
            <a target="_blank" href="https://www.amaron.in/">
              <img className="cImg" src="src/pages/Sponsors/logo/amaron.jpg" />
            </a>
          </div>
        </div>
        <div className="softwarePartners">
          <div className="softwareHeading"></div>
          <h2 className="componentHeading">Software Partners</h2>
          <div className="prow">
            <a target="_blank" href="https://www.ansys.com/en-in">
              <img className="cImg" src="src/pages/Sponsors/logo/ansys.jpg" />
            </a>
            <a target="_blank" href="https://in.mathworks.com/">
              <img
                className="cImg"
                src="src/pages/Sponsors/logo/mathworks.jpg"
              />
            </a>
          </div>
          <div className="prow">
            <a target="_blank" href="https://www.3ds.com/">
              <img
                className="cImg"
                src="src/pages/Sponsors/logo/dassault.jpg"
              />
            </a>
            <a target="_blank" href="https://www.solidworks.com/">
              <img
                className="cImg"
                src="src/pages/Sponsors/logo/solidWorks.jpg"
              />
            </a>
          </div>
        </div>

        <div className="energyPartner">
          <div className="energyPartnerHeading">
            <h2 className="componentHeading">Energy Partners</h2>
          </div>
          <div className="erow">
            <a target="_blank" href="https://www.redbull.com/in-en/">
              <img
                src="src/pages/Sponsors/logo/redbull.jpg"
                className="eImg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sponsors;
