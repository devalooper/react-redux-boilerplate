import { all, fork } from "redux-saga/effects";
import postsSaga from "./postsSagas/postsSaga";

export function* rootSaga() {
  yield all([fork(postsSaga)]);
}
