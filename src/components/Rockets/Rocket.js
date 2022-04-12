import React from "react";
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const {
    rocketId, rocketName, rocketDescription, rocketImage, rocketReserved,
  } = props;

  return (
    <div className="rocket-container" key={rocketId}>
      <div>
        <img src={rocketImage} alt="/" />
      </div>
      <h1>{rocketName}</h1>
      <p>
        {rocketDescription}
      </p>
      <button type="button" className="btn" id={rocketReserved}>Reserve Rocket</button>
    </div>
  )
}

Rocket.propTypes = {
  rocketId: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
  rocketImage: PropTypes.string.isRequired,
  rocketReserved: PropTypes.bool.isRequired,
};
export default Rocket;