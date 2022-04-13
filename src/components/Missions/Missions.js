import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMissions from '../../redux/missions/missions';
import styles from './MissionStyle.css';

let fetched = false;

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetched) {
      dispatch(fetchMissions());
      fetched = true;
    }
  }, []);

  return (
    <table>
      <tbody>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
        {missions.map(
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
