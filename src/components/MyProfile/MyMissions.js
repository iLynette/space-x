import styles from './Profile.module.css';

const MyMissions = () => (
  <>
    <ul className={styles['my-journeys']}>
      <li>
        {' '}
        <h1>My Missions</h1>
      </li>
      <li>Falcon 9</li>
      <li>Falcon Heavy</li>
      <li>Starship</li>
    </ul>
  </>
);

export default MyMissions;
