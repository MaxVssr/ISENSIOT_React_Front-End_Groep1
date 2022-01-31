import "./App.css";
import IntroText from "./introtext/IntroText";
import PollenLineChart from "./charts/PollenLineChart";
import HumTempLineChart from "./charts/HumTempLineChart";
import Pms5003LineChart from "./charts/Pms5003LineChart";
import MicrophoneLineChart from "./charts/MicrophoneLineChart";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroText />
      <HumTempLineChart />
      <Pms5003LineChart />
      <MicrophoneLineChart />
      <PollenLineChart />
      <Footer />
    </div>
  );
}

export default App;
