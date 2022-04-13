import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchMissions from '../../redux/missions/missions';

let fetched = false;

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchMissions());
      fetched = true;
    }
  }, []);
  return <div />;
};

export default Missions;
