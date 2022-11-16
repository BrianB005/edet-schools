import {
  FEATURED_SCHOOLS_FAIL,
  FEATURED_SCHOOLS_REQUEST,
  FEATURED_SCHOOLS_SUCCESS,
  GET_ALL_SCHOOLS_FAIL,
  GET_ALL_SCHOOLS_REQUEST,
  GET_ALL_SCHOOLS_SUCCESS,
} from "../constants/schoolConstants";

export const searchSchoolsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_SCHOOLS_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_SCHOOLS_SUCCESS:
      return { ...state, loading: false, schools: action.payload };
    case GET_ALL_SCHOOLS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getFeaturedSchoolsReducer = (state = {}, action) => {
  switch (action.type) {
    case FEATURED_SCHOOLS_REQUEST:
      return { ...state, loading: true };
    case FEATURED_SCHOOLS_SUCCESS:
      return { ...state, loading: false, schools: action.payload };
    case FEATURED_SCHOOLS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
