const GET = 'get';
const RESERVE = 'reserve';

export const fetchDragons = () => async (dispatch) => {
  const res = await fetch('https://api.spacexdata.com/v3/dragons');
  const dragons = await res.json();
  dispatch({
    type: GET,
    payload: dragons.map((Item) => ({
      id: Item.id,
      image: Item.flickr_images[0],
      type: Item.type,
      name: Item.name,
      description: Item.description,
      reserved: false,
    })),
  });
};

const dragonsReducer = (state = [], action) => {
  switch (action.type) {
    case GET:
      return [
        ...action.payload,
      ];

    case RESERVE:
      return [
        ...action.payload,
      ];

    default:
      return state;
  }
};

export const get = (data) => ({
  type: GET,
  payload: data,
});

export const reserve = (state, id) => (dispatch) => {
  const dragons = [...state];

  for (let i = 0; i < dragons.length; i += 1) {
    if (dragons[i].id === id) {
      if (!dragons[i].reserved) {
        dragons[i].reserved = true;
      } else {
        dragons[i].reserved = false;
      }
    }
  }
  dispatch({
    type: RESERVE,
    payload: dragons,
  });
};

export default dragonsReducer;
