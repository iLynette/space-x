const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

const fetch_request = () => ({
  type: FETCH_REQUEST,
});
const fetch_success = () => ({
  type: FETCH_SUCCESS,
  payload: missions,
});
const fetch_error = () => ({
  type: FETCH_ERROR,
  payload: error,
});

const initialState = {
  loading: false,
  mission: [],
  error: '',
};

export const missionReducer = ((state = initialState), action) => {
    switch (action.type)
    {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_SUCCESS:
            return{
                ...state,
                loading:false,
                mission:action.payload,
                error: '',
            };
        case FETCH_ERROR:
            return {
                ...state,
                loading:false,
                missions: [],
                error: action.payload,
            }
        default:
            return state;
    }
}

