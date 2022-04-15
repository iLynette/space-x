import React from 'react';
import { useSelector } from 'react-redux';

export default function MyProfile() {
  const dragons = useSelector((state) => state.dragonsReducer);
  const rockets = useSelector((state) => state.rocketReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.rocketReserved);
  const reservedMission = useSelector((state) => state.missionReducer.mission.filter(
    (missionItem) => missionItem.reserved === true,
  ));
  return (
    <div className="profileBody">
      <div>
        <h2 className="reserve">My Missions</h2>
        <div className="profileMissions">
          <ul>
            {reservedMission.length === 0 ? (
              <li className="no-reserved-mission">No Mission Reserved</li>
            ) : (
              reservedMission.map((mission) => (
                <li key={mission.mission_id} className="reserved-item">
                  <img
                    src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-rocket-online-marketing-xnimrodx-blue-xnimrodx.png"
                    alt="reserved"
                  />
                  <span className="name">{mission.mission_name}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <div>
        <h2 className="">My Rockets</h2>
        <div className="profileRockets">
          <ul className="reserve-rocket">
            {reservedRockets.length === 0 ? (
              <li className="no-reserved-rocket">No Rockets Reserved</li>
            ) : (
              reservedRockets.map((rocket) => (
                <li key={rocket.rocketId} className="reserved-item">
                  <img
                    src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-rocket-online-marketing-xnimrodx-blue-xnimrodx.png"
                    alt="reserved"
                  />
                  <span className="name">{rocket.rocketName}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <div>
        <h2 className="">My Dragons</h2>
        <div className="profileDragons">
          <>
            {/* <ul>
              {dragons.length === 0 ? (
                <li className="profileCard">
                  <p>No Dragons Reserved</p>
                </li>
              ) : (
                dragons
                  .filter(({ reserved }) => reserved === true)
                  .map((dragon) => (
                    <li key={dragon.id} className="profileCard">
                      <img
                        src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-rocket-online-marketing-xnimrodx-blue-xnimrodx.png"
                        alt="reserved"
                      />
                      <h3>{dragon.name}</h3>
                    </li>
                  ))
              )}
            </ul> */}
            {
        dragons.map((dragon) => (
          <div key={dragon.id} className="profileCard">
            {dragon.reserved && (
            <>
              <img src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-rocket-online-marketing-xnimrodx-blue-xnimrodx.png" alt="reserved" />
              <h3>{dragon.name}</h3>
            </>
            )}
          </div>
        ))
      }
          </>
        </div>
      </div>
    </div>
  );
}
