import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./checkBox.scss";

class CheckBox extends React.Component {
  handleChange = () => {
    if (!this.props.editable) {
      return;
    }
    this.props.onChange(!this.props.checked);
  };
  render() {
    return (
      <div className="custom-checkbox">
        <input
          className="checkbox-control hidden-checkbox"
          id={this.props.id}
          type="checkbox"
          checked={this.props.checked}
          onChange={this.handleChange}
        />
        <label className="checkbox-label" htmlFor={this.props.id}>
          <span
            className={classNames("checkbox-value", {
              "checkbox-highlight": this.props.highlight && this.props.checked,
            })}
          >
            {this.props.label}
          </span>
          <span className="checkbox-icon" />
        </label>
      </div>
    );
  }
}

export default CheckBox;

CheckBox.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string,
  checked: PropTypes.number,
  editable: PropTypes.bool,
  onChange: PropTypes.func,
  highlight: PropTypes.bool,
};

CheckBox.defaultProps = {
  highlight: false,
  checked: false,
  editable: true,
  onChange: () => {},
};
