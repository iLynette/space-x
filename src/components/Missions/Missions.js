import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMissions, { joinMission } from '../../redux/missions/missions';
import styles from './Mission.module.css';

let fetched = false;

const Missions = () => {
  const { mission } = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchMissions());
      fetched = true;
    }
  }, []);
  if (!fetched) return <h1>I am loading</h1>;

  const handleClick = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <table>
      <tbody>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {mission.map(
          ({
            mission_name: missionName,
            mission_id: missionId,
            description,
            reserved,
          }) => (
            <tr key={missionId}>
              <td className={styles['mission-name']}>{missionName}</td>
              <td className={styles['mission-description']}>{description}</td>
              <td className={styles['mission-status']}>
                {' '}
                <p className={styles['not-reserved']}>NOT A MEMBER</p>
              </td>
              <td>
                <button
                  id={missionId}
                  onClick={(e) => handleClick(e.target.id)}
                  className={
                    reserved
                      ? styles['mission-joined']
                      : styles['mission-not-joined']
                  }
                  type="button"
                >
                  {reserved ? 'Leave Mission' : 'Join Mission'}
                  {' '}
                  Join Mission
                </button>
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default Missions;
