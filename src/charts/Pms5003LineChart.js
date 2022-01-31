import { Line } from "react-chartjs-2";

import DatePick from "../datepicker/DatePicker";
import Pms5003Popup from "../popup/Pms5003Popup";
import { format } from "date-fns";
import _ from "lodash";

import React, { Component } from "react";
import axios from "axios";

import "./LineChart.css";

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

class Pms5003LineChart extends Component {
  state = {
    chartData: [],
    date: "",
  };

  fetchData = () => {
    const baseURL = "https://isensiot-api.herokuapp.com/api/";
    const extraURL = "pms5003";
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
    let pm1;
    let pm25;
    let pm10;
    let labels;
    if (this.state.date) {
      const baseFilter = _.filter(this.state.chartData, {
        timestampDate: this.state.date,
      });

      labels = baseFilter.map((x) => x.timestampTime);
      pm1 = baseFilter.map((x) => x.pm1);
      pm25 = baseFilter.map((x) => x.pm25);
      pm10 = baseFilter.map((x) => x.pm10);
    } else {
      const base = _.filter(this.state.chartData, {
        timestampDate: format(Date.now(), "yyyy-MM-dd"),
      });

      labels = base.map((x) => x.timestampTime);
      pm1 = base.map((x) => x.pm1);
      pm25 = base.map((x) => x.pm25);
      pm10 = base.map((x) => x.pm10);
    }

    return (
      <div id="charts" className="charts">
        <h1>Chart for Particulate Matter</h1>
        <div className="charts__info">
          <DatePick onSelectDate={this.handleDate} />
          <Pms5003Popup />
        </div>

        <Line
          data={{
            labels: labels,
            datasets: [
              {
                label: "PM1",
                data: pm1,
                backgroundColor: "transparent",
                borderWidth: 3,
                fill: false,
                borderColor: "#F04949",
                pointRadius: 2,
                pointHoverRadius: 0,
                lineTension: 0.05,
              },
              {
                label: "PM2.5",
                data: pm25,
                backgroundColor: "transparent",
                borderWidth: 3,
                fill: false,
                borderColor: "#3ABEFF",
                pointRadius: 2,
                pointHoverRadius: 0,
                lineTension: 0.05,
              },
              {
                label: "PM10",
                data: pm10,
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

export default Pms5003LineChart;
