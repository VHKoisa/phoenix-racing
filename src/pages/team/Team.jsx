import Header from "/src/components/Header";
import TeamNavigator from "./TeamNavigator";
import Footer from "/src/components/Footer";

function Team() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-2">
        <TeamNavigator
          textColor="text-blue-950"
          borderColor="border-blue-950"
          hoverTextColor="hover:text-blue-950"
          activeTextColor="text-blue-950"
          activeBgColor="bg-white"
        />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Team;
