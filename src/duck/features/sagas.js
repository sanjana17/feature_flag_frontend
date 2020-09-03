import Api from "../../api";
import { all, takeEvery, put, call } from "redux-saga/effects";
import * as actions from "./actions";

export function* fetchFeatureWorker({ payload }) {
  const features = yield call(Api.get, `/getFeatures`);
  let res = [];
  for (let i = 0; i < features.data.length; i++) {
    res.push({
      ...convert(features.data[i].countries, "name"),
      flagName: features.data[i].flagName,
    });
  }
  yield put(actions.setFeatures(res));
}

export function* fetchFeatureByNameWorker({ payload }) {
  const feature = yield call(Api.get, `/getFeatures/${payload}`);
  let res = {
    ...convert(feature.data.countries, "name"),
    flagName: feature.data.flagName,
  };
  yield put(actions.setFeature(res));
}

export function* editFeatureWorker({ payload }) {
  const data = yield call(Api.post, "/editFeature", "POST", payload);
  if (data.statusCode === 200) {
    yield put(actions.fetchFeatureByName(payload.flagName));
  } else {
    yield put(actions.setFeatureError(data.data));
  }
}

function convert(arr, key) {
  let result = {};
  for (var i = 0; i < arr.length; i++) {
    result[arr[i][key]] = arr[i].value;
  }
  return result;
}

export function* featuresSaga() {
  yield all([takeEvery(actions.fetchFeatures, fetchFeatureWorker)]);
  yield all([takeEvery(actions.fetchFeatureByName, fetchFeatureByNameWorker)]);
  yield all([takeEvery(actions.editFeature, editFeatureWorker)]);
}
