import { Line } from "react-chartjs-2";

import DatePick from "../datepicker/DatePicker";
import MicrophonePopup from "../popup/MicrophonePopup";
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

class MicrophoneLineChart extends Component {
  state = {
    chartData: [],
    date: "",
  };

  fetchData = () => {
    const baseURL = "https://isensiot-api.herokuapp.com/api/";
    const extraURL = "microphone";
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
    let sp;
    let labels;
    if (this.state.date) {
      const baseFilter = _.filter(this.state.chartData, {
        timestampDate: this.state.date,
      });

      labels = baseFilter.map((x) => x.timestampTime);
      sp = baseFilter.map((x) => x.soundPollution);
    } else {
      const base = _.filter(this.state.chartData, {
        timestampDate: format(Date.now(), "yyyy-MM-dd"),
      });

      labels = base.map((x) => x.timestampTime);
      sp = base.map((x) => x.soundPollution);
    }

    return (
      <div id="charts" className="charts">
        <h1>Chart for Sound Pollution</h1>
        <div className="charts__info">
          <DatePick onSelectDate={this.handleDate} />
          <MicrophonePopup />
        </div>

        <Line
          data={{
            labels: labels,
            datasets: [
              {
                label: "Sound Pollution",
                data: sp,
                backgroundColor: "transparent",
                borderWidth: 3,
                fill: false,
                borderColor: "#F04949",
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

export default MicrophoneLineChart;
