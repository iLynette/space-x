import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import Proptypes from 'prop-types';
import fetchDragons from '../../redux/dragons/dragons';
// import { rocketDispatcher, reserveRocket,
// cancelRocketBooking } from '../../redux/dragons/dragons';

export function Dragon({ dragon }) {
  return (
    <div className="dragonCard" key={dragon.id}>
      <p className="">{dragon.name}</p>
      <p className="">{dragon.type}</p>
      <img src={dragon.flickr_images} alt="dragon" />
      <button type="button" value={dragon.id} id={dragon.reserved}>reserve</button>
    </div>
  );
}

Dragon.propTypes = {
  dragon: Proptypes.objectOf(Proptypes.string).isRequired,
};

export default function Dragons() {
  // const dragons = useSelector((state) => state.deragonsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragons());
  }, []);
  return (
    <>
      {/* {dragons.map((dragon) => (
        <Dragon key={dragon.id} dragon={dragon} />
      ))} */}
    </>
  );
}
