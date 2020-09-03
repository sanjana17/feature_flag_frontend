import React from "react";
import PropTypes from "prop-types";
import Switch from "react-switch";

class Switcher extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    negative: PropTypes.string.isRequired,
    positive: PropTypes.string.isRequired,
    editable: PropTypes.bool,
    checked: PropTypes.bool,
    onColor: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    editable: true,
    checked: false,
    onColor: "#00847B",
  };

  handleChange = (checked) => {
    this.props.onChange(checked);
  };

  render() {
    const unchecked = (
      <span className="negative-switcher switch-icon">
        {this.props.negative}
      </span>
    );
    const checked = (
      <span className="positive-switcher switch-icon">
        {this.props.positive}
      </span>
    );
    return (
      <div className="form-group">
        <div className="switcher-wrapper">
          <p className="switcher-label">{this.props.label}</p>
          <Switch
            onChange={this.handleChange}
            checked={this.props.checked}
            className="switcher react-switch"
            onColor={this.props.onColor}
            checkedIcon={checked}
            uncheckedIcon={unchecked}
            width={150}
            height={40}
            disabled={!this.props.editable}
            id={this.props.label}
          />
        </div>
      </div>
    );
  }
}

export default Switcher;
