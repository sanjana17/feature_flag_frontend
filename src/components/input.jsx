import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./input.scss";

class Input extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    classes: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})])
      .isRequired,
    onFocusOutTrimSpaces: PropTypes.bool,
    editable: PropTypes.bool,
    errors: PropTypes.string,
    required: PropTypes.bool,
    inputType: PropTypes.string,
    appendValue: PropTypes.string,
    pattern: PropTypes.string,
    maxLength: PropTypes.number,
  };

  static defaultProps = {
    classes: "",
    placeholder: null,
    maxLength: null,
    value: "",
    pattern: "",
    appendValue: "",
    editable: true,
    errors: "",
    required: false,
    onFocusOutTrimSpaces: false,
    inputType: "text",
  };

  handleChange = (e) => {
    const { value } = e.target;
    if (!this.props.pattern || value.match(this.props.pattern) !== null) {
      this.props.onChange(e, value);
    }
  };

  handleFocusOut = (e) => {
    const value = e.target.value.trim();
    this.props.onChange(e, value);
  };

  render() {
    const {
      label,
      id,
      placeholder,
      classes,
      editable,
      name,
      errors,
      required,
      onFocusOutTrimSpaces,
      inputType,
      appendValue,
      maxLength,
      pattern,
    } = this.props;
    const inValid = !!errors;

    return (
      <div className={classNames(`form-group ${classes}`)}>
        <label
          htmlFor={id}
          className={classNames("input-label", { "invalid-label": inValid })}
        >
          {label}
          {required ? (
            <span>
              <span className="required">*</span>:
            </span>
          ) : (
            ":"
          )}
        </label>
        <div className="input-group">
          <input
            type={inputType}
            name={name}
            className={classNames("custom-input form-control", {
              "invalid-field": inValid,
            })}
            id={id}
            placeholder={placeholder}
            value={this.props.value}
            onChange={this.handleChange}
            onBlur={
              onFocusOutTrimSpaces ? (e) => this.handleFocusOut(e) : () => {}
            }
            readOnly={!editable}
            maxLength={maxLength}
            pattern={pattern}
          />
          {appendValue && (
            <div className="input-group-prepend">
              <span className="append-value">{appendValue}</span>
            </div>
          )}
        </div>
        {inValid && (
          <p className="input-invalid-feedback error-tooltip">{errors}</p>
        )}
      </div>
    );
  }
}

export default Input;
