import React, { Component } from "react";
import Modal from "react-awesome-modal";
import "./Popup.css";

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <section>
        <input
          className="popup__button"
          type="button"
          value="Chart info"
          onClick={() => this.openModal()}
        />
        <Modal
          visible={this.state.visible}
          width="400"
          height="450"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div className="modal">
            <h1>Pollen info</h1>
            <div className="humtemp__wrapper">
              <div className="humtemp__info">
                <h3>Temperature</h3>
                <p>-1°C or lower is freezing</p>
                <p>0°C to 9°C is cold</p>
                <p>10°C to 19°C is moderate</p>
                <p>20°C to 29°C is hot</p>
                <p>30°C or higher is extreme</p>
              </div>
              <div className="humtemp__info">
                <h3>Humidity</h3>
                <p>10% to 29% is dry</p>
                <p>30% to 50% is normal</p>
                <p>50% to 70% is wet</p>
                <p>70% or higher is very wet</p>
              </div>
            </div>
            <div className="humtemp__btnSection">
              <a
                className="popup__button"
                href="javascript:void(0);"
                onClick={() => this.closeModal()}
              >
                Close popup
              </a>
            </div>
          </div>
        </Modal>
      </section>
    );
  }
}
