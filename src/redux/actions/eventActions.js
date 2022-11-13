import axios from "axios";
import {
  CREATE_EVENT_FAIL,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  GET_MY_EVENTS_FAIL,
  GET_MY_EVENTS_REQUEST,
  GET_MY_EVENTS_SUCCESS,
} from "../constants/eventConstants";
export const getMyEvents = () => async (dispatch, getState) => {
  dispatch({ type: GET_MY_EVENTS_REQUEST });
  try {
    const token = getState()?.signInInfo?.userInfo?.token;
    const { data } = await axios.get(
      "http://localhost:5000/api/v1/events/school",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: GET_MY_EVENTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_MY_EVENTS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

export const createEvent = (event) => async (dispatch, getState) => {
  dispatch({ type: CREATE_EVENT_REQUEST });
  try {
    const token = getState()?.signInInfo?.userInfo?.token;
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/events",
      event,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: CREATE_EVENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_EVENT_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
