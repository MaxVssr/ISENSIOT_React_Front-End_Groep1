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
          height="570"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div className="modal">
            <h1>Pollen info</h1>
            <div className="pollen__wrapper">
              <div className="pollen__info">
                <h3>Tree Pollen</h3>
                <p>1 to 14 is a low pollen count</p>
                <p>15 to 89 is a moderate pollen count</p>
                <p>90 to 1499 is a high pollen count</p>
                <p>500 or higher is a very high pollen count</p>
              </div>
              <div className="pollen__info">
                <h3>Grass Pollen</h3>
                <p>1 to 4 is a low pollen count</p>
                <p>5 to 19 is a moderate pollen count</p>
                <p>20 to 199 is a high pollen count</p>
                <p>200 or higher is a very high pollen count</p>
              </div>
              <div className="pollen__info">
                <h3>Weed Pollen</h3>
                <p>1 to 9 is a low pollen count</p>
                <p>10 to 49 is a moderate pollen count</p>
                <p>50 to 499 is a high pollen count</p>
                <p>500 or higher is a very high pollen count</p>
              </div>
            </div>
            <div className="pollen__btnSection">
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
