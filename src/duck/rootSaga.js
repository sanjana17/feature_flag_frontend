import { fork } from "redux-saga/effects";
import { featuresSaga } from "./features/sagas";

export default function* rootSaga() {
  yield fork(featuresSaga);
}
