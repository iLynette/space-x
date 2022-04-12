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
}

export default RocketList;