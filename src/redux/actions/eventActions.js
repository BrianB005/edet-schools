import axios from "axios";
import {
  GET_SCHOOL_EVENTS_FAIL,
  GET_SCHOOL_EVENTS_REQUEST,
  GET_SCHOOL_EVENTS_SUCCESS,
} from "../constants/eventConstants";
export const getSchoolEvents = (school_id) => async (dispatch) => {
  dispatch({ type: GET_SCHOOL_EVENTS_REQUEST });
  try {
    const { data } = await axios.get(
      `https://edet-school.herokuapp.com/api/v1/events/school/${school_id}`
    );
    dispatch({ type: GET_SCHOOL_EVENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_SCHOOL_EVENTS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
