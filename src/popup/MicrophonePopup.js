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
          height="350"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div className="modal">
            <h1>Sound Pollution info</h1>
            <div className="sp__wrapper">
              <div className="sp__info">
                <h3>Measurement</h3>
                <br></br>
                <p>
                  The chart will receive a 1 (sound pollution) when 40% of the
                  total measurements is above 85dB.
                </p>
                <p>
                  The chart will receive a 0 (no sound pollution) when it is
                  lower than 40%.
                </p>
              </div>
            </div>
            <div className="sp__btnSection">
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
