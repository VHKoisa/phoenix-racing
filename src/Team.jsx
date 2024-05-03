import Header from "./components/Header";
import TeamNavigator from "./components/TeamNavigator";

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
    </>
  );
}

export default Team;
