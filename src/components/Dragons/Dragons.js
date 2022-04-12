import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Proptypes from 'prop-types';
import { fetchDragons, reserve } from '../../redux/dragons/dragons';

export function Dragon(props) {
  const {
    id, image, type, name, description, reserved,
  } = props;

  const dragons = useSelector((state) => state.dragonsReducer);
  const dispatch = useDispatch();

  return (
    <div className="dragonCard">
      <img className="dragonImage" src={image} alt="dragon" />
      <div className="dragonInfo">
        <h2>{name}</h2>
        <h3>{type}</h3>
        <p>{description}</p>
        {!reserved && (
        <button type="button" id={id} onClick={() => dispatch(reserve(dragons, id))}>Reserve</button>
        )}
        {reserved && (
        <button type="button" id={id} onClick={() => dispatch(reserve(dragons, id))}>Cancel Reservation</button>
        )}
      </div>
    </div>
  );
}

Dragon.propTypes = {
  id: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
  reserved: Proptypes.bool.isRequired,
};

function Dragons() {
  const dragons = useSelector((state) => state.dragonsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDragons());
  }, []);
  return (
    <>
      {dragons.map((Item) => (
        <Dragon
          key={Item.id}
          id={Item.id.toString()}
          name={Item.name}
          type={Item.type}
          description={Item.description}
          image={Item.image}
          reserved={Item.reserved}
        />
      ))}
    </>
  );
}

export default Dragons;
