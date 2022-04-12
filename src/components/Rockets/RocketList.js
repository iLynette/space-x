import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listRockets } from '../../redux/rockets/rockets';
import Rocket from './Rocket';

function RocketList() {
  const dispatch = useDispatch();
  const rocketsData = useSelector((state) => state.rocketReducer);
  useEffect(() => {
    if (rocketsData.length === 0) {
      dispatch(listRockets());
    }
  });
  return (
    <div className="spacing">
      <ul className="rocket-list">
        {rocketsData.map((rocket) => (
          <Rocket
            key={rocket.rocketId}
            rocketId={rocket.rocketId}
            rocketName={rocket.rocketName}
            rocketDescription={rocket.rocketDescription}
            rocketImage={rocket.rocketImage}
            rocketReserved={rocket.rocketReserved}
          />
        ))}
      </ul>
    </div>
  );
}

export default RocketList;