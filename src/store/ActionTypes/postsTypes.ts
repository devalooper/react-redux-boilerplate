export enum postTypes {
  FETCH_POST_REQUEST = "FETCH_POST_REQUEST",
  FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS",
  FETCH_POST_FAILURE = "FETCH_POST_FAILURE"
}
const createAction = (type: String) => ({
  SUCCESS: `${type}_SUCCESS`,
  FAILURE: `${type}_FAILURE`,
  REQUEST: `${type}_REQUEST`
});
