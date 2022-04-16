import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleReserve } from '../../redux/rockets/rockets';

const Rocket = (props) => {
  const {
    rocketId, rocketName, rocketDescription, rocketImage, rocketReserved,
  } = props;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleReserve({ id: rocketId }));
  };

  return (
    <div className="rocket-container" key={rocketId}>
      <div>
        <img src={rocketImage} alt="/" />
      </div>
      <div className="content">
        <h1>{rocketName}</h1>
        <p>
          {
        rocketReserved
          && <span className="badge">Reserved</span>

}
          {rocketDescription}
        </p>
        <div className="reserve-rocket">
          {rocketReserved ? (<button type="button" onClick={handleClick} className="btn cancel">Cancel Reservation</button>) : (<button type="button" className="btn" onClick={handleClick}>Reserve Rocket</button>)}
        </div>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocketId: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  rocketDescription: PropTypes.string.isRequired,
  rocketImage: PropTypes.string.isRequired,
  rocketReserved: PropTypes.bool.isRequired,
};
export default Rocket;
