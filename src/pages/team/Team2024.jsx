import React from "react";
import Card from "./Card";

const Team2024 = () => {
  const team2024 = [
    {
      name: "Piyush S Bhuriya",
      // image:
        // "https://drive.google.com/uc?export=view&id=1ugGZazTstsAO5EyRl3OED6YcF5E8CBWL",
      image: "/2024/PIYUSH S BHURIYA SVNIT.jpg",
      position: "Head",
      department: "Brakes",
      section: "technical",
      linkedIn: "https://www.linkedin.com/in/piyush-bhuriya-404789229",
    },

    {
      name: "Meha Virendra Patel",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1FLQTLkAxONtML6BlEUyNTkS_w4z5Lkwq",
      image: "/2024/PATEL MEHA VIRENDRA SVNIT.jpg",
      position: "Head",
      department: "Sns",
      section: "technical",
      linkedIn: "https://www.linkedin.com/in/meha-patel-60897b20a",
    },
    {
      name: "Jay Pokal",
      // image:
      //   "https://drive.google.com/uc?export=view&id=189my4btV-V6vX3Y7AxyfkNb6VP1FOa0n",
      image: "/2024/jay pokal.jpg",
      position: "Head",
      department: "Powertrain",
      section: "technical",
      linkedIn: "https://www.linkedin.com/in/jay-pokal-671741266",
    },
    {
      name: "Amit B Mahiya",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1obIRj3CNrSvs5E-6odUuckKkF3FZHBug",
      image: "/2024/Amit Mahiya.jpg",
      position: "Head",
      department: "Electrical",
      section: "technical",
      linkedIn: "https://www.linkedin.com/in/amit-b-mahiya-279245228",
    },
    {
      name: "Mihir Pandor",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1a1tcDqZMKyHGUl3NMoE7fSKVU0v_uFsM",
      image: "/2024/MIHIR PANDOR SVNIT.jpg",
      position: "Head",
      department: "Chasis",
      section: "technical",
      linkedIn: "https://www.linkedin.com/in/mihir-pandor-475169278",
    },

    {
      name: "Yash Katare",
      // image:"https://drive.google.com/uc?export=view&id=15dlfNeNds7LLckHLHbQ6QPuDY0j_2THU",
      image: "/2024/YASH KATARE.jpg",
      position: "Team Member",
      department: "Sns",
      section: "technical",
      sectionPosition: "Captain",
      linkedIn: "https://www.linkedin.com/in/katareyash",
    },
    {
      name: "Abhinav Gupta",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1YKX2OMHrlquW0yrj_ytswyQCFKzQ0k7t",
      image: "/2024/Abhinav Gupta.jpg",
      position: "Team Member",
      department: "Sns",
      section: "technical",
      sectionPosition: "Vice Captain",
      linkedIn: "https://www.linkedin.com/in/abhinav-gupta-690526228/",
    },
    {
      name: "Puneet Suvarna",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1w8iMIZRBEvhRf3y_TQqJu88AUjGkePrP",
      image: "/2024/SUVARNA PUNEET SURESH SVNIT.jpg",
      position: "Team Member",
      department: "Chasis",
      section: "technical",
      sectionPosition: "Mechanical manufacturing head",
      linkedIn: "https://www.linkedin.com/in/puneet-suvarna-096378277/",
    },
    {
      name: "Hemang Kokate",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1ZDxH7E5qersH-C1R1zYQq-s_u6KGvn19",
      image: "/2024/KOKATE HEMANG MAKARAND SVNIT.jpg",
      position: "Team Member",
      department: "Electrical",
      section: "technical",
      sectionPosition: "Electric Manufacturing Head",
      linkedIn: "https://www.linkedin.com/in/hemang-kokate-21a705241",
    },

    {
      name: "Dakshraj Parmar",
      // image:
      //   "https://drive.google.com/uc?export=view&id=16hzmsFw-_dmQJ4I_Q4fPYfwaYtgg81aY",
      image: "/2024/DAKSHRAJ PARMAR SVNIT.jpg",
      position: "Team Member",
      department: "Electrical",
      section: "managerial",
      sectionPosition: "Chairperson",
      linkedIn: "https://www.linkedin.com/in/dakshraj-parmar-83b53a235",
    },
    {
      name: "Niraj Kalwani",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1QCWVvYEYttE5_Y5FyvYP6K7x3AZroyfg",
      image: "/2024/Niraj Kalwani.jpg",
      position: "Team Member",
      department: "Powertrain",
      section: "managerial",
      sectionPosition: "Co-Chairperson",
      linkedIn: "https://in.linkedin.com/in/niraj-kalwani-615138241",
    },
    {
      name: "Niteesh J",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1k1GTxIQ-4G7pwr1ya4WjLRf1FGE7ztUh",
      image: "/2024/N J.jpg",
      position: "Team Member",
      department: "Sns",
      section: "managerial",
      sectionPosition: "Public Relations Head",
      linkedIn: "https://www.linkedin.com/in/niteesh-j-0a3967268",
    },

    {
      name: "Devam Vadher",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1M7AT4Fnhbx37hC428vEKceo7PKQR3OyN",
      image: "/2024/DEVAM JAYENDRA VADHER SVNIT.jpg",
      position: "Team Member",
      department: "Electrical",
      section: "managerial",
      sectionPosition: "Sponsorship Head",
      linkedIn: "https://www.linkedin.com/in/devam-vadher-37705b241",
    },
    {
      name: "Siddharth Bharad",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1q9XSifjTgXtFcIQz1jNFrjamnQYEkWa4",
      image: "/2024/Siddharth Bharad.jpg",
      position: "Team Member",
      department: "Powertrain",
      section: "managerial",
      sectionPosition: "Team Manager",
      linkedIn: "https://www.linkedin.com/in/siddharth-bharad-596aa5253",
    },
    {
      name: "Vidhi Prakashbhai Patel",
      // image:
      //   "https://drive.google.com/uc?export=view&id=10U9k-MjKCRtM1lW17BH_M3BCxbtX0-it",
      image: "/2024/Vidhi Patel.jpg",
      position: "Team Member",
      department: "Sns",
      section: "managerial",
      sectionPosition: "Treasurer",
      linkedIn: "https://www.linkedin.com/in/vidhi-patel-98131a272",
    },

    {
      name: "Vamshi",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1V_ewWCE66kfIygFry2S7SslRS8DcVxp_",
      image: "/2024/LAVUDYA VAMSHI SVNIT.jpg",
      position: "Team Member",
      department: "Brakes",
      linkedIn: "https://www.linkedin.com/in/vamshi-lavudya-744190230",
    },

    {
      name: "Prithish Panchal",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1qy5Sox5G4sAiroiwTP8dPkw8UdAGJXas",
      image: "/2024/Prithish Panchal.jpg",
      position: "Team Member",
      department: "Powertrain",
      linkedIn: "https://www.linkedin.com/in/prithish-panchal-06339921a",
    },
    {
      name: "JAYESH PATIL",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1-bG_DEO7aoIL3AWDCLz2JmGOKJ-vPi71",
      image: "/2024/PATIL JAYESH RAMKRUSHN SVNIT.jpg",
      position: "Team Member",
      department: "Powertrain",
      linkedIn: "https://www.linkedin.com/in/jayesh-patil-495b01221",
    },
    {
      name: "Jaykumar Gohel",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1uYyjYg52oyMzNXLGkvhsVBiWp80pLD2m",
      image: "/2024/Jay.jpg",
      position: "Team Member",
      department: "Electrical",
      linkedIn: "https://www.linkedin.com/in/jay-gohel-85a1a0254",
    },
    {
      name: "Behera Nitish",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1TZ4ffezhJKzDzGOs7Yy_oj1ddjJt7Sov",
      image: "/2024/BEHERA NITISHKUMAR NALINIBHAI SVNIT.jpg",
      position: "Team Member",
      department: "Power Train",
      linkedIn: "https://www.linkedin.com/in/nitish-behera-9a9423261",
    },

    {
      name: "Jayesh Kailash Patil",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1wBgqXBZjys8gyv5d81Hng-L0G_Qlnq5H",
      image: "/2024/Patil Jayesh Kailash SVNIT.jpg",
      position: "Team Member",
      department: "Powertrain",
      linkedIn: "https://www.linkedin.com/in/jayesh-patil-57b18b260",
    },

    {
      name: "Pulkit Garhwal",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1n_IBTHVJNGQVberEf-PL9TCRCcUXeHeF",
      image: "/2024/PULKIT GARHWAL SVNIT.jpeg",
      position: "Team Member",
      department: "Sns",
      linkedIn: "https://www.linkedin.com/in/pulkit-garhwal-b77416277",
    },

    {
      name: "Abhishek Pandya",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1Adt0CFhIwQXUv9BT4dk8n3hw5ZdRD2ts",
      image: "/2024/Abhishek Pandya.jpg",
      position: "Team Member",
      department: "Brakes",
      linkedIn: "https://www.linkedin.com/in/abhishek-pandya-016083277/",
    },

    {
      name: "Durga syamanth",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1IYy5X9R3DAgoPKJKsbUxAxYHXsM25bMe",
      image: "/2024/durga Syamanth.jpg",
      position: "Team Member",
      department: "Sns",
      linkedIn: "https://www.linkedin.com/in/akurathi-durga-syamanth-658062277",
    },
    {
      name: "Vishnu sai Kummari",
      // image:
      //   "https://drive.google.com/uc?export=view&id=10eCMPEKWVUYlkOnRh_I1Ykud3_rUayoZ",
      image: "/2024/K Vishnu Sai.jpg",
      position: "Team Member",
      department: "Electrical",
      linkedIn: "https://www.linkedin.com/in/k-vishnu-sai-b1a767248",
    },
    {
      name: "Rishabh Gondane",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1327v6OWUY1nCBLruOqHvRCrQEzICyB7p",
      image: "/2024/Rishabh Gondane.jpg",
      position: "Team Member",
      department: "Brakes",
      linkedIn: "https://www.linkedin.com/in/rishabh-gondane-59a805249",
    },

    {
      name: "Priyanshu Singh",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1yAp4byaS5wk7eFAoZurJK847Ze3J1ko1",
      image: "/2024/Priyanshu singh.jpg",
      position: "Team Member",
      department: "Sns",
      linkedIn: "https://www.linkedin.com/in/priyanshu-singh-7aa6aa1b4/",
    },
    {
      name: "Shrey Shalan",
      // image:
      //   "https://drive.google.com/uc?export=view&id=1zcQxo6yhPOGAGN_JAq1V-Zrdvgf4c0R1",
      image: "/2024/Shrey Shalan.jpg",
      position: "Team Member",
      department: "Electrical",
      linkedIn: "https://www.linkedin.com/in/shrey-shalan-97565a244",
    },

    {
      name: "Shivaram S",
      // image:"https://drive.google.com/uc?export=view&id=1KN-sY7hnxrrhLSkLbVWtKC2Jk-e2ACaZ",
      image: "/2024/S SHIVARAM SVNIT.JPG",
      position: "Team Member",
      department: "Sns",
      linkedIn: "www.linkedin.com/in/shivaram-s-633aa3268",
    },
  ];

  const filterFunc = (department) => {
    return (data) => {
      return data.department === department;
    }
  }

  const technical = team2024.filter(
    ({ section, sectionPosition }) => section === "technical" && sectionPosition
  );
  const managerial = team2024.filter(
    ({ section, sectionPosition }) =>
      section === "managerial" && sectionPosition
  );

  return (
    <>
      <div className="my-5 py-2 uppercase text-center text-2xl font-bold text-white bg-blue-800 border-2">
        TECHNICAL Heads
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center w-full">
          {technical.map((member, index) => (
            <Card
              key={index}
              linkedin={member.linkedIn}
              photo={member.image}
              name={member.name}
              position={member.sectionPosition}
            />
          ))}
        </div>
      </div>

      <div className="my-5 py-2 uppercase text-center text-2xl   font-bold text-white bg-blue-800 border-2">
        MANAGERIAL Heads
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center w-full">
        {managerial.map((member, index) => (
            <Card
              key={index}
              linkedin={member.linkedIn}
              photo={member.image}
              name={member.name}
              position={member.sectionPosition}
            />
          ))}
        </div>
      </div>

      <div className="my-5 py-2 uppercase text-center text-2xl   font-bold text-white bg-blue-800 border-2">
        CHASSIS
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center w-full">
        {team2024.filter(filterFunc('Chasis')).map((member, index) => (
            <Card
              key={index}
              linkedin={member.linkedIn}
              photo={member.image}
              name={member.name}
              position={member.position}
            />
          ))}
        </div>
      </div>

      <div className="my-5 py-2 uppercase text-center text-2xl   font-bold text-white bg-blue-800 border-2">
        Steering & Suspension
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center w-full">
        {team2024.filter(filterFunc('Sns')).map((member, index) => (
            <Card
              key={index}
              linkedin={member.linkedIn}
              photo={member.image}
              name={member.name}
              position={member.position}
            />
          ))}
        </div>
      </div>

      <div className="my-5 py-2 uppercase text-center text-2xl   font-bold text-white bg-blue-800 border-2">
        Powertrain
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center w-full">
        {team2024.filter(filterFunc('Powertrain')).map((member, index) => (
            <Card
              key={index}
              linkedin={member.linkedIn}
              photo={member.image}
              name={member.name}
              position={member.position}
            />
          ))}
        </div>
      </div>

      <div className="my-5 py-2 uppercase text-center text-2xl   font-bold text-white bg-blue-800 border-2">
        Brakes
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center w-full">
        {team2024.filter(filterFunc('Brakes')).map((member, index) => (
            <Card
              key={index}
              linkedin={member.linkedIn}
              photo={member.image}
              name={member.name}
              position={member.position}
            />
          ))}
        </div>
      </div>

      <div className="my-5 uppercase py-2 text-center text-2xl   font-bold text-white bg-blue-800 border-2">
        Electrical
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center w-full">
        {team2024.filter(filterFunc('Electrical')).map((member, index) => (
            <Card
              key={index}
              linkedin={member.linkedIn}
              photo={member.image}
              name={member.name}
              position={member.position}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Team2024;
