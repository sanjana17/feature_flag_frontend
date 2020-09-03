import React from "react";
import Header from "../../components/Header";
import { Button, Form, Card } from "react-bootstrap";
import { editableFeaturesColumns } from "./FeaturesMetaData";
import Input from "../../components/input";
import Switcher from "../../components/Switcher";

class EditFeature extends React.Component {
  state = {
    isEditMode: false,
    isInitialized: false,
    feature: {
      flagName: "",
      Asia: 0,
      America: 0,
      Korea: 0,
      Europe: 0,
      Japan: 0,
    },
  };

  static getDerivedStateFromProps = (props, state) => {
    if (!state.isEditMode && !state.isInitialized) {
      return {
        ...state,
        feature: {
          ...props.feature,
        },
        isInitialized: true,
      };
    }
    return null;
  };

  componentDidMount() {
    if (this.props.match.params.name) {
      this.props.fetchFeatureByName(this.props.match.params.name);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.feature !== this.props.feature) {
      this.reload();
    }
  }

  reload = () => {
    this.setState({ isInitialized: false });
  };

  setCountry = (country, value) => {
    this.setState({
      feature: { ...this.state.feature, [country]: value ? 1 : 0 },
    });
  };
  setFlagName = (event) => {
    this.setState({
      feature: { ...this.state.feature, flagName: event.target.value },
    });
  };

  getContent = () => {
    if (this.state.isEditMode) {
      return editableFeaturesColumns(true);
    }
    return editableFeaturesColumns(false);
  };

  handleSave = () => {
    const { feature } = this.state;
    let res = [];
    Object.keys(feature)
      .filter((name) => name !== "flagName")
      .map((val) => res.push({ name: val, value: feature[val] }));
    this.props.editFeature({ flagName: feature.flagName, countries: res });
    this.setState({ isEditMode: false });
  };

  toggleEdit = () => {
    if (this.state.isEditMode) {
      this.reload();
    }
    this.setState({ isEditMode: !this.state.isEditMode });
  };
  render() {
    const { feature, isEditMode } = this.state;
    const { flagName } = feature;
    return (
      <div>
        <Header title=" Create/Edit Features" />
        <div className="features-table">
          <h2 className="block-title">Feature Flag Information</h2>
          <span style={{ fontSize: "12px" }}>
            In this section we can add disable and enable and also create a new
            flag
          </span>
          <Card className="card">
            <Form className="form">
              <Input
                label="Name "
                value={flagName}
                id={flagName}
                onChange={this.setFlagName}
                editable={isEditMode}
                name="FlagName"
                onFocusOutTrimSpaces
                required
              />
              {Object.keys(feature)
                .filter((name) => name !== "flagName")
                .map((value, ind) => {
                  return (
                    <Switcher
                      id={value + "" + ind}
                      checked={feature[value] === 1}
                      label={value}
                      className="stretch"
                      key={value + "" + ind}
                      editable={isEditMode}
                      negative="disabled"
                      positive="enabled"
                      onChange={(val) => this.setCountry(value, val)}
                    />
                  );
                })}
            </Form>
          </Card>
        </div>
        {this.state.isEditMode ? (
          <div>
            <Button
              style={{ float: "right", marginRight: "100px" }}
              onClick={this.toggleEdit}
            >
              {" "}
              CANCEL
            </Button>
            <Button
              style={{ float: "right", marginRight: "10px" }}
              onClick={this.handleSave}
            >
              {" "}
              SAVE
            </Button>
          </div>
        ) : (
          <Button
            style={{ float: "right", marginRight: "100px" }}
            onClick={this.toggleEdit}
          >
            {" "}
            EDIT
          </Button>
        )}
      </div>
    );
  }
}

export default EditFeature;
