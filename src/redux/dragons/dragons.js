const GET = 'get';

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
    default:
      return state;
  }
};

export const get = (data) => ({
  type: GET,
  payload: data,
});

export default dragonsReducer;
