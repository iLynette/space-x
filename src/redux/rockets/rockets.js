const GET_ROCKETS = 'space-x/redux/rockets/LIST_ROCKETS';
const rocketApi = 'https://api.spacexdata.com/v3/rockets';

const defaultState = [];

export const addRocket = (rockets) => ({
  type: GET_ROCKETS,
  payload: rockets,
});

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





