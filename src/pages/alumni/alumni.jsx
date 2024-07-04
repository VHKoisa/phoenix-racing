import React, { Component } from "react";
import "./alumni.scss";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import Ocards from "./alumniCards";

export default class Alumni extends Component {
  render() {
    // const alumni2023 = [
    //   {
    //     name: "Shubham Pandey",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=13UDK5LkxOTrKaY0vcl_LOU9bGzU2wcZz",
    //     position: "Analyst",
    //     company: "Deloitte",
    //     year: "2023",
    //     text: "http://linkedin.com/in/shubham-kumar-pandey-3a46b21b3",
    //   },
    //   {
    //     name: "Tejas Agrawal",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=16k7SZnONGjHN-d3DQLgBGRWKzx5W7W9d",
    //     position: "Job",
    //     company: "United Phosphorus Limited",
    //     year: "2023",
    //     text: "https://www.linkedin.com/in/tejas-agrawal-57a5951b7",
    //   },
    //   {
    //     name: "Shubham Lohar",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1jXrD_31RCeCV6963BX6KwsnHalkUIEhe",
    //     position: "Design Engineer",
    //     company: "John Deere",
    //     year: "2023",
    //     text: "https://www.linkedin.com/in/shubham-lohar",
    //   },
    //   {
    //     name: "Dhruvil Rakeshbhai Patel",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1NBb6MmyrD6PFa9cGUdxMszBnSVdtI3S4",
    //     position: "Engineer Trainee",
    //     company: "UPL",
    //     year: "2023",
    //     text: "https://www.linkedin.com/in/dhruvil-patel-8791ba1b8",
    //   },
    //   {
    //     name: "Rathod Chinmaykumar",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1sc7iyDiqSGN0DSYGsmlfojf6hwngt698",
    //     position: "GET",
    //     company: "JSW Steel, Mumbai",
    //     year: "2023",
    //     text: "https://www.linkedin.com/in/chinmay-26-rathod",
    //   },
    //   {
    //     name: "Janavi Popat",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1tpFOy2WtFNqERXTzDsEwYRjF_5JPX0mg",
    //     position: "GET",
    //     company: "Cairn Oil & Gas",
    //     year: "2023",
    //     text: "https://www.linkedin.com/in/janavi-popat",
    //   },
    //   {
    //     name: "Nishith Chaurasia",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1FNqehHXhHiARStXoe4ZAa6pNaAJSLfGW",
    //     position: "Graduate Engineer Trainee",
    //     company: "TVS Motors",
    //     year: "2023",
    //     text: "https://www.linkedin.com/in/nishith-chaurasia",
    //   },
    //   {
    //     name: "Krutin Parekh",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=14fZw0GXtm6cXJO7QvgyOmP_Z35VL_NDf",
    //     position: "Electrical Manager",
    //     company: "Reliance",
    //     year: "2023",
    //     text: "https://www.linkedin.com/in/krutin-parekh/",
    //   },
    //   {
    //     name: "Aneesha Sengupta",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1forRMFCPJo4sO4t8FyeeraYpqC1-Br8e",
    //     position: "MS student",
    //     company: "Cornell University",
    //     year: "2023",
    //     text: "https://www.linkedin.com/in/aneesha-sengupta-850760194",
    //   },
    //   {
    //     name: "Suthar Omprakash Lunaram",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1jQIAktQx6pnwGh9Y4ixewXlaMqrIRRp7",
    //     position: "NA",
    //     company: "NA",
    //     year: "2023",
    //     text: "https://www.linkedin.com/in/omprakash-suthar-602991196",
    //   },
    // ];
    // const alumni2022 = [
    //   {
    //     name: "Jignesh Barad",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1mcbN-wP6UAqy1t2quf73JvC8Q3bpncWO",
    //     position: "Assistant Manager",
    //     company: "Adani Total Gas Ltd",
    //     year: "2022",
    //     text: "https://www.linkedin.com/in/jignesh-barad-9424a71a6",
    //   },
    //   {
    //     name: "Oorja Dorkar",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1J8WGKxa27h93T7OWdr4GLrVBcYWXy3Gz",
    //     position: "Assistant Manager",
    //     company: "Bajaj Auto Limited",
    //     year: "2022",
    //     text: "https://www.linkedin.com/in/oorja-dorkar-04b365179",
    //   },
    //   {
    //     name: "Siddharthkumar B Zadafiya",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=13DoW_MMBRKiH_BnMyZmDCIxn0T9ENmKt",
    //     position: "Executive Sr. Engineer",
    //     company: "Larsen & Toubro Defence ",
    //     year: "2022",
    //     text: "https://www.linkedin.com/in/siddharthkumarzadafiya/",
    //   },

    //   {
    //     name: "Dhola Nikunj",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=19tv5G_9z0VVMGofTOfHvTUuefd5Qvdpb",
    //     position: "Jewellery Business",
    //     year: "2022",
    //     text: "http://linkedin.com/in/nikunj-dhola-5672751b5",
    //   },

    //   {
    //     name: "Tirth Lodhiya",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1yCxmus87E-f783F2KRQairWLso3j5wnT",
    //     position: "Job",
    //     company: "Bharat Electronics Ltd",
    //     year: "2022",

    //     text: "https://www.linkedin.com/in/lodhiyatirth",
    //   },
    //   {
    //     name: "Ayush Jain",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1ZufnEEOaXDmDkK62UzTH0mVP4vRF62y1",
    //     position: "Business Analyst",
    //     company: "Effiya Technologies",
    //     year: "2022",
    //     text: "https://www.linkedin.com/in/ayush-jain-a48291185",
    //   },
    //   {
    //     name: "Shaan Polra",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=12B5HOqRHQUAFmkUGHF929cWhMw6WpSm1",
    //     position: "Pursuing Master degree",
    //     company: "The University of Adelaide",
    //     year: "2022",
    //     text: "https://www.linkedin.com/in/shaan-polra/",
    //   },
    // ];
    // const alumni2021 = [
    //   {
    //     name: "Savai Thakkar",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1xVquIIZda7GCgm6m08aZkdRM19XYVEol",
    //     position: "Pursuing MBA",
    //     company: "IIM Bangalore",
    //     year: "2021",
    //     text: "https://www.linkedin.com/in/savai-thakkar-921610176",
    //   },
    //   {
    //     name: "Hemish Gangajaliya",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=16rKrNnIDxx0djkAunh5b303r_2FwVzTA",
    //     position: "Family Business",
    //     company: "Jay Agro Engineering ",
    //     year: "2021",
    //     text: "",
    //   },
    //   {
    //     name: "Mihir Panchal",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1Z-hed2ZG6AE--vvRe_n_6MIISEI7dAjB",
    //     position: "Job",
    //     company: "Bic cello pvt Ltd",
    //     year: "2021",
    //     text: "https://www.linkedin.com/in/mihir-panchal-693b40172",
    //   },
    //   {
    //     name: "Kurvesh Darji",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1zU4jTh5lZ9VSZ-bOSqDfA6bolps-sNq3",
    //     position: "Msc Aerospace engineering.",
    //     company: "Technical university of Darmstadt",
    //     year: "2021",
    //     text: "https://www.linkedin.com/in/kurvesh-darji-a90b72179",
    //   },
    //   {
    //     name: "K Vamsi",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1DWuipXCRx8ZBERBETBs8iW7EdWU82DCG",
    //     position: "MTech-Robotics and Mobility Systems",
    //     company: "IIT JODHPUR ",
    //     year: "2021",
    //     text: "",
    //   },
    // ];

    // const alumni2020 = [
    //   {
    //     name: "Akash Ravindra Kolhe",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1VHHJm_Ajge8NkxczBlTrvAa_T4hOJFZ0",
    //     position: "Mechanical Design Engineer",
    //     company: "Tesla",
    //     year: "2020",
    //     text: "linkedin.com/in/akashrkolhe/",
    //   },

    //   {
    //     name: "Arman Mansuri",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=16IFcRzDe0zYmTGdRWQaRvXDkrilRB8ut",
    //     position: "Product Manager",
    //     company: "Couche Tard",
    //     year: "2020",
    //     text: "https://drive.google.com/uc?export=view&id=16IFcRzDe0zYmTGdRWQaRvXDkrilRB8ut",
    //   },
    // ];
    // const alumni2019 = [
    //   {
    //     name: "Avnish Dholakiya",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1tzJbLvLL4HUW4dZeMuL7V9o8KPOBLcGK",
    //     position: "MT",
    //     company: "Pidilite Industries Ltd",
    //     year: "2019",
    //     text: "https://www.linkedin.com/in/avnish-dholakiya",
    //   },
    // ];
    // const alumni2018 = [
    //   {
    //     name: "Jhalak Gandhi",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=11xhzhXPnUI8HERxH6qBuH0OeEzBke91W",
    //     position: "Supply Chain Materials Engineer",
    //     company: "STAAR Surgical",
    //     year: "2018",
    //     text: "https://www.linkedin.com/in/jhalak-gandhi-701267123",
    //   },

    //   {
    //     name: "HANS RAJ PANWAR",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1Iihjdv1iJGf5-nx-aQsRmRJSmVZYSh4Z",
    //     position: "Manager- Automobile Manufacturing",
    //     company: "MG Motor India Pvt Ltd.",
    //     year: "2018",
    //     text: "https://www.linkedin.com/in/hans-raj-panwar-7a38221a9",
    //   },
    //   {
    //     name: "Daksharajsinh Jadeja",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1ZcZ5WIR7BFMDd_D25av-ZGK5Z7zRyTdc",
    //     position: "Job",
    //     company: "Maruti Suzuki India Limited",
    //     year: "2018",
    //     text: "https://www.linkedin.com/in/daksharaj-jadeja-56266315a/",
    //   },
    // ];
    // const alumni2017 = [
    //   {
    //     name: "Amol Shinde",
    //     image:
    //       "https://drive.google.com/uc?export=view&id=1PmG2xTH9ZB4ZQ6Ch98PqB-MNHNVKmxUG",
    //     position: "Senior Manager",
    //     company: "Montra electric ",
    //     year: "2017",
    //     text: "https://www.linkedin.com/in/amol06shinde",
    //   },
    // ];

    return (
      <div className="mainA text-black">
        <Header />
        <div className="alumniHero">
          <h1 className="aHeading mt-20">Alumni</h1>
          <p className="aThank ">
            Thank you for your continued support and for being an integral part
            of our alumni family, We are deeply grateful for your contributions
            and dedication to our community's success
          </p>
        </div>

        <div className="line"></div>

        <div className="row mx-4 my-4">
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
        </div>
        <div className="row mx-4 my-4">
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
        </div>
        <div className="row mx-4 my-4">
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
        </div>
        <div className="row mx-4 my-4">
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
        </div>
        <div className="row mx-4 my-4">
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
        </div>
        <div className="row mx-4 my-4">
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
          <Ocards name="Shashank Raj" company="LaxmiChitFund" linkedin="" />
        </div>

        <Footer />
      </div>
    );
  }
}
