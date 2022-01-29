import React from "react";

import "./IntroText.css";

const IntroText = () => {
  return (
    <div className="text">
      <div className="text__head">
        <h1>Welkom bij de front-end van ons project!</h1>
        <div className="text__body">
          <p>Tijdens dit project hebben wij verschillende sensoren gebruikt.</p>
          <p>
            Op deze pagina kun je grafieken zien met gemeten data uit deze
            sensoren
          </p>
          <p>
            Daarnaast hebben wij ook een externe API gebruikt voor data over
            pollen
          </p>

          <p className="text__anchor" id="charts">
            ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroText;
