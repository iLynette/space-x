const GET_ROCKETS = 'space-x/redux/rockets/LIST_ROCKETS';

const defaultState = [];

export const addRocket = (rockets) => ({
  type: GET_ROCKETS,
  payload: rockets,
});

export const listRockets = () => async (dispatch) => {
  try {
      const fetchData = await fetch(
        'https://api.spacexdata.com/v3/rockets',
      );
      const apiRockets = await fetchData.json();
      dispatch({
          type: GET_ROCKETS,
          payload: apiRockets.map((rocket) => ({
              rocketId: rocket.id,
              rocketName: rocket_name,
              rocketDescription: rocket_description,
              rocketImage: rocket.flickr_images[0],
              rocketReserved: false,
          })),
      })
  }catch (error) {throw new Error(error)};
}

const rocketReducer = (state = defaultState, action) => {
  switch(action.type) {
    case GET_ROCKETS:
    return [
      ...action.payload 
    ];
    default:
      return state;
  }
}

export default rocketReducer;





