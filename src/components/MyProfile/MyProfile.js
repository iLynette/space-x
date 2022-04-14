import React from 'react';
import { useSelector } from 'react-redux';

export default function MyProfile() {
  const dragons = useSelector((state) => state.dragonsReducer);

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
          {/* list of rockets */}
          {/* <img src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-rocket-transport-xnimrodx-blue-xnimrodx.png"/> */}
        </div>
      </div>
      <div>
        <h2 className="">My Dragons</h2>
        <div className="profileDragons">
          <>
            <ul>
              {dragons.length === 0 ? (
                <li className="profileCard">
                  <p>No Dragons Reserved</p>
                </li>
              ) : (
                dragons
                  .filter(({ reserved }) => reserved === true)
                  .map((dragon) => (
                    <li key={dragon.id} className="profileCard">
                      <img src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/000000/external-rocket-online-marketing-xnimrodx-blue-xnimrodx.png" alt="reserved" />
                      <h3>{dragon.name}</h3>
                    </li>
                  ))
              )}
            </ul>
          </>
        </div>
      </div>
    </div>
  );
}
