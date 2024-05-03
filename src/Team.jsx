import Card from "./components/Card";
import Header from "./components/Header";
import TeamNavigator from "./components/TeamNavigator";

function Team() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="my-36">
        <TeamNavigator /> 
      </div>
      
    </>
  );
}

export default Team;
