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
          height="480"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div className="modal">
            <h1>Particulate Matter info</h1>
            <div className="pms__wrapper">
              <div className="pms__info">
                <h3>PM2.5</h3>
                <p>Target value: 25 µg/m3</p>
                <p>Limit value: 25 µg/m3</p>
                <p>Indicative limit: 20 µg/m3</p>
              </div>
              <div className="pms__info">
                <h3>PM10</h3>
                <p>Limit value for the annual average: </p>
                <p>40 µg/m3</p>
                <p>Limit value for the daily average: </p>
                <p>50 µg/m3</p>
                <p>The daily average may not be exceeded on more than</p>
                <p>35 days per year</p>
              </div>
            </div>
            <div className="pms__btnSection">
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
