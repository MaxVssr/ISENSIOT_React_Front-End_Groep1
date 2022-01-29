import { Line } from "react-chartjs-2";

import React, { Component } from "react";
import axios from "axios";

import DatePick from "../datepicker/DatePicker";
import { format } from "date-fns";
import _ from "lodash";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

class PollenLineChart extends Component {
  state = {
    chartData: [],
    date: "",
  };

  fetchData = () => {
    const baseURL = "https://isensiot-api.herokuapp.com/api/";
    const extraURL = "pollen";
    axios.get(baseURL + extraURL).then((response) => {
      console.log(response.data);
      this.setState({ chartData: response.data });
    });
  };

  handleDate = (selectedDate) => {
    if (selectedDate) {
      let date = format(selectedDate, "yyyy-MM-dd");
      this.setState({ date: date });
    } else {
      this.setState({ date: "" });
    }
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {
    let gp;
    let tp;
    let wp;
    let labels;
    let gp_risk;
    if (this.state.date) {
      const baseFilter = _.filter(this.state.chartData, {
        timestampDate: this.state.date,
      });

      labels = baseFilter.map((x) => x.timestampTime);
      gp = baseFilter.map((x) => x.grass_pollen_count);
      tp = baseFilter.map((x) => x.tree_pollen_count);
      wp = baseFilter.map((x) => x.weed_pollen_count);
      gp_risk = baseFilter.map((x) => x.grass_pollen_risk);
    } else {
      const base = _.filter(this.state.chartData, {
        timestampDate: format(Date.now(), "yyyy-MM-dd"),
      });

      labels = base.map((x) => x.timestampTime);
      gp = base.map((x) => x.grass_pollen_count);
      tp = base.map((x) => x.tree_pollen_count);
      wp = base.map((x) => x.weed_pollen_count);
      gp_risk = base.map((x) => x.grass_pollen_risk);
    }

    return (
      <div className="charts">
        <h1>Chart for Pollen</h1>
        <DatePick onSelectDate={this.handleDate} />
        <Line
          data={{
            labels: labels,
            datasets: [
              {
                label: "Grass Pollen",
                data: gp,
                backgroundColor: "transparent",
                borderWidth: 3,
                fill: false,
                borderColor: "#F04949",
                pointRadius: 2,
                pointHoverRadius: 0,
                lineTension: 0.05,
              },
              {
                label: "Tree Pollen",
                data: tp,
                backgroundColor: "transparent",
                borderWidth: 3,
                fill: false,
                borderColor: "#3ABEFF",
                pointRadius: 2,
                pointHoverRadius: 0,
                lineTension: 0.05,
              },
              {
                label: "Weed Pollen",
                data: wp,
                backgroundColor: "transparent",
                borderWidth: 3,
                fill: false,
                borderColor: "#ffdc14",
                pointRadius: 2,
                pointHoverRadius: 0,
                lineTension: 0.05,
              },
            ],
          }}
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {},
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
      </div>
    );
  }
}

export default PollenLineChart;
