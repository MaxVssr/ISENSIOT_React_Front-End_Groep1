import "./App.css";
// import react from "react";
// import RadarChart from './charts/RadarChart'
// import PollenStore from "./PollenStore";
// import DatePick from "./charts/DatePicker";
import IntroText from "./introtext/IntroText";
import PollenLineChart from "./charts/PollenLineChart";
import LineChart from "./charts/LineChart";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <RadarChart /> */}
      <Navbar />
      <IntroText />
      <LineChart />
      <PollenLineChart />
      {/* <PollenStore /> */}
      {/* <DatePick /> */}

      <Footer />
    </div>
  );
}

export default App;
