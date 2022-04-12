const fetchDragons = () => async () => {
  const res = await fetch('https://api.spacexdata.com/v3/dragons');
  const dragons = await res.json();
  const dragonList = [];
  dragons.forEach((Item) => {
    const flickrImage = Item.flickr_images[0];
    dragonList.push({
      id: Item.id,
      name: Item.name,
      type: Item.type,
      image: flickrImage,
      reserved: false,
    });
  });
  // console.log(dragonList);
  return dragonList;
};

const GET = 'get';

export const dragonsReducer = (state = [], action) => {
  switch (action.type) {
    case GET:
      return [...state, {
        ...action.payload,
      }];
    default:
      return state;
  }
};

export const get = (data) => ({
  type: GET,
  payload: data,
});

// export const dragonDispatcher = () => async (dispatch) => {
//   const dragons = fetchDragons();
//   dispatch(get(dragons));
// };

export default fetchDragons;
