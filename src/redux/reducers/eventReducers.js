import {
  GET_SCHOOL_EVENTS_FAIL,
  GET_SCHOOL_EVENTS_REQUEST,
  GET_SCHOOL_EVENTS_SUCCESS,
} from "../constants/eventConstants";

export const getSchoolEventsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SCHOOL_EVENTS_REQUEST:
      return { ...state, loading: true };
    case GET_SCHOOL_EVENTS_SUCCESS:
      return { ...state, loading: false, events: action.payload };
    case GET_SCHOOL_EVENTS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
