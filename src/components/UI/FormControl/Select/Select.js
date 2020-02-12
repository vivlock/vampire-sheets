import React from "react";
import PropTypes from "prop-types";

import ReactSelect from 'react-select';
import { FormGroup } from "@blueprintjs/core";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export default function Select( { label, value, options, onChange, isSearchable, required, disabled } ){
  return (
    <FormGroup
      label={label}
      labelInfo={ required ? "*" : ""}
    >
      <ReactSelect
        isDisabled={disabled}
        isSearchable={isSearchable}
        onChange={onChange}
        options={options}
        value={value}
      />
    </FormGroup>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.object,
  
  onChange: PropTypes.func,
  
  disabled: PropTypes.bool,
  isSearchable: PropTypes.bool,
  required: PropTypes.bool,
};

Select.defaultProps = {
  disabled: false,
  isSearchable: false,
  required: false,
  value: undefined,
};