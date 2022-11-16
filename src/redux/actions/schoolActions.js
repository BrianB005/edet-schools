import axios from "axios";
import {
  FEATURED_SCHOOLS_FAIL,
  FEATURED_SCHOOLS_REQUEST,
  FEATURED_SCHOOLS_SUCCESS,
  GET_ALL_SCHOOLS_FAIL,
  GET_ALL_SCHOOLS_REQUEST,
  GET_ALL_SCHOOLS_SUCCESS,
} from "../constants/schoolConstants";

export const searchSchools = (school) => async (dispatch) => {
  dispatch({ type: GET_ALL_SCHOOLS_REQUEST });
  try {
    const { data } = await axios.get(
      `https://edet-school.herokuapp.com/api/v1/schools/search?school=${school}`
    );
    dispatch({ type: GET_ALL_SCHOOLS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_SCHOOLS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
export const getFeatured = () => async (dispatch, getState) => {
  dispatch({ type: FEATURED_SCHOOLS_REQUEST });
  try {
    const { data } = await axios.get(
      "https://edet-school.herokuapp.com/api/v1/schools/featured"
    );
    dispatch({ type: FEATURED_SCHOOLS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FEATURED_SCHOOLS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
