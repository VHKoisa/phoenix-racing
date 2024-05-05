import Header from "./components/Header";
import TeamNavigator from "./components/TeamNavigator";
import Footer from "./components/Footer";

function Team() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="my-36">
        <TeamNavigator
          textColor="text-blue-950"
          borderColor="border-blue-950"
          hoverTextColor="text-white"
          activeTextColor="text-white"
          activeBgColor="bg-blue-950"
        />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Team;
