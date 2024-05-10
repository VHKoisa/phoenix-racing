import Header from "/src/components/Header";
import TeamNavigator from "/src/components/TeamNavigator";
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
          hoverTextColor="hover:text-white"
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
