import { connect } from "react-redux";
import { fetchFeatureByName, editFeature } from "../../duck/features/actions";
import EditFeature from "./EditFeature";

const mapStateToProps = (state) => ({
  feature: state.featuresReducer.feature,
  error: state.featuresReducer.error,
  loading: state.featuresReducer.loading,
});

const mapDispatchToProps = {
  fetchFeatureByName,
  editFeature
};

export default connect(mapStateToProps, mapDispatchToProps)(EditFeature);
