import { handleActions } from "redux-actions";
import * as actions from "./actions";

export const INIT = {
  features: [],
  feature: {},
  error: {},
  loading: false,
};

export const featuresReducer = handleActions(
  {
    [actions.fetchFeatures]: (state) => ({
      ...state,
      loading: false,
    }),
    [actions.setFeatures]: (state, { payload }) => ({
      ...state,
      loading: false,
      features: payload,
    }),
    [actions.fetchFeatureByName]: (state) => ({
      ...state,
      loading: false,
    }),
    [actions.setFeature]: (state, { payload }) => ({
      ...state,
      loading: false,
      feature: payload,
    }),
    [actions.editFeature]: (state) => ({
      ...state,
      loading: false,
    }),
    [actions.setFeatureError]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
  INIT
);
