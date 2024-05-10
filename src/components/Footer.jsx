import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-950 flex flex-wrap justify-between  p-5 font-serif">
      <div className="flex flex-col items-center justify-center w-48 ml-2">
        <div>
          <img src="/src/assets/logo.png" className="w-40 h-40" alt="Logo" />
        </div>
        <div className="text-white">PHOENIX RACING</div>
      </div>

      <div className="w-20 ml-2">
        <div className="text-white text-3xl">Links</div>
        <div className="text-white">
          <div>Home</div>
          <div>Cars</div>
          <div>Team</div>
          <div>Sponsors</div>
        </div>
      </div>

      <div className="w-40 ml-2">
        <div className="text-white text-3xl">Contact Us</div>
        <div className="text-white">
          <div>Email</div>
          <div>Mobile</div>
        </div>
      </div>

      <div className="w-40 ml-2">
        <div className="text-white text-3xl">Address</div>
        <div className="text-white">
          IC Engine Lab, SVNIT Campus, Ichchhanath, Surat -395007, Gujarat,
          India
        </div>
      </div>

      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1395.1413478721936!2d72.78416624206993!3d21.164160078661318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA5JzQ5LjEiTiA3MsKwNDcnMDMuNyJF!5e0!3m2!1sen!2sin!4v1714907836230!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
          <html>
            <head></head>
            <body></body>
          </html>
        </iframe>
      </div>
    </div>
  );
};

export default Footer;
