import Header from "/src/components/Header";
import TeamNavigator from "./TeamNavigator";
import Footer from "/src/components/Footer";

function Team() {
  return (
    <>
      <Header />
      <div className="mt-2">
        <TeamNavigator
          textColor="text-blue-950"
          borderColor="border-blue-950"
          hoverTextColor="hover:text-white"
          activeTextColor="text-white"
          activeBgColor="bg-blue-950"
        />
      </div>
        <Footer />
    </>
  );
}

export default Team;
