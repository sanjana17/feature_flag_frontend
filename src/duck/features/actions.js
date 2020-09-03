import { createAction } from "redux-actions";

export const fetchFeatures = createAction("FETCH_FEATURES");
export const setFeatures = createAction("SET_FEATURES");

export const fetchFeatureByName = createAction("FETCH_FEATURE");
export const setFeature = createAction("SET_FEATURE");

export const editFeature = createAction('EDIT_FEATURE');
export const setFeatureError = createAction('SET_FEATURE_ERROR');
