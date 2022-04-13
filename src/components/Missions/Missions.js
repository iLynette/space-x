import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMissions from '../../redux/missions/missions';
import styles from './MissionStyle.css';

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
          }) => (
            <tr key={missionId}>
              <td className={styles['mission-name']}>{missionName}</td>
              <td className={styles['mission-description']}>{description}</td>
              <td className={styles['mission-status']}>
                {' '}
                <p className={styles['not-reserved']}>NOT A MEMBER</p>
              </td>
              <td>
                <button className={styles['mission-not-join']} type="button">
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
