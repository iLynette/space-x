const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

const fetchRequest = () => ({
  type: FETCH_REQUEST,
});
const fetchSuccess = () => ({
  type: FETCH_SUCCESS,
  payload: missions,
});
const fetchError = () => ({
  type: FETCH_ERROR,
  payload: error,
});

const initialState = {
  loading: false,
  mission: [],
  error: '',
};

export const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        mission: action.payload,
        error: '',
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        missions: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchMissions = () => async (dispatch) => {
  dispatch(fetchRequest());
  const request = await fetch('https://api.spacexdata.com/v3/missions');
  try {
    const missions = await request.json();
    dispatch(fetchSuccess(missions));
  } catch (error) {
    const errorMsg = error.message;
    dispatch(fetchError(errorMsg));
  }
};

export default fetchMissions;
