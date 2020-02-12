import React from "react";
import { FormGroup, InputGroup } from "@blueprintjs/core";

export default function Input( { label, onChange, required, value, inputId } ) {
  return (
    <FormGroup
      label={label}
      labelInfo={ required ? "*" : ""}
      labelFor={inputId}
    >
      <InputGroup
        id={inputId}
        onChange={onChange}
        value={value}
      />
    </FormGroup>
  )
}