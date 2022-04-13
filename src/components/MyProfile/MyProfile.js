import React from 'react';
import { useSelector } from 'react-redux';

export default function MyProfile() {
  const dragons = useSelector((state) => state.dragonsReducer);
  const rockets = useSelector((state) => state.rocketReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.rocketReserved);

  return (
    <div className="profileBody">
      <div>
        <h2 className="">My Missions</h2>
        <div className="profileMissions">
          {/* list of missions */}
          {/* <img src="https://img.icons8.com/external-tone-royyan-wijaya/64/000000/external-flying-space-duotone-tone-royyan-wijaya.png"/> */}
        </div>
      </div>
      <div>
        <h2 className="">My Rockets</h2>
        <div className="profileRockets">
        <ul className="reserve-rocket">
            {(reservedRockets.length === 0)? (
              <li className="no-reserved-rocket">
                No Rockets Reserved
              </li>
            ) : (
              reservedRockets
                .map((rocket) => (
                  <li key={rocket.rocketId} className="reserved-item">
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
          {
          dragons.map((dragon) => (
            <>
              {dragon.reserved && (
                <div key={dragon.id} className="profileCard">
                  <img src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-rocket-online-marketing-xnimrodx-blue-xnimrodx.png" alt="reserved" />
                  <h3>{dragon.name}</h3>
                </div>
              )}
            </>
          ))
          }
        </div>
      </div>
    </div>
  );
}
