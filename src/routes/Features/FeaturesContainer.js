import { connect } from "react-redux";
import { fetchFeatures } from "../../duck/features/actions";
import Features from "./Features";

const mapStateToProps = (state) => ({
  features: state.featuresReducer.features,
  loading: state.featuresReducer.loading,
});

const mapDispatchToProps = {
  fetchFeatures,
};

export default connect(mapStateToProps, mapDispatchToProps)(Features);
