import React, { Component } from "react";
import axios from "axios";

class PollenReading extends Component {
  state = {
    pollenData: [],
  };

  fetchData = () => {
    const baseURL =
      "https://api.ambeedata.com/latest/pollen/by-place?place=Amsterdam";
    const isensiotApiURL =
      "https://isensiot-api.herokuapp.com/api/createpollen";
    axios
      .get(baseURL, {
        headers: {
          "x-api-key":
            "b1b7b03937feae095f9093bd691d22e821a9fb1645de22c9b11cce805738c548",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const timer = setInterval(() => {
          axios.post(isensiotApiURL, {
            grass_pollen_count: response.data.data[0].Count.grass_pollen,
            tree_pollen_count: response.data.data[0].Count.tree_pollen,
            weed_pollen_count: response.data.data[0].Count.weed_pollen,
            grass_pollen_risk: response.data.data[0].Risk.grass_pollen,
            tree_pollen_risk: response.data.data[0].Risk.tree_pollen,
            weed_pollen_risk: response.data.data[0].Risk.weed_pollen,
          });
        }, 10000);

        return () => clearInterval(timer);

        this.setState({
          pollenData: response.data.data[0].Count.grass_pollen,
        });
      });
  };

  componentDidMount() {
    this.fetchData();
  }
}
export default PollenReading;
