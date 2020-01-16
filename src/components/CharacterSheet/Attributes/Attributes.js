import React from "react";

import Dots from "../../Dots/Dots";

import { attributeNames, focusDisplayNames, displayNames } from "./helper";

export const Attributes = ( { attributes } ) => {
  return (
    <div className="row attributes">
      {attributeNames.map( a => {
        return (
          <Attribute key={a} type={a} data={attributes[a]} />
        );
      } ) }
    </div>
  );
}

export default Attributes;

export const Attribute = ( { type, data } ) => {
  return (
    <div>
      <h4>{displayNames[type]}</h4>
      <Dots max={10} value={data.value} />
      <Foci type={type} data={data}></Foci>
    </div>
  );
}

export const Foci = ( { type, data } ) => {
  let foci = [];

  for( let i = 1; i <= 3; i++ ) {
    const focus = data[`focus_${i}`];

    foci.push(
      <Focus type={type} index={i} value={focus} key={`${type}-${i}`} />
    );
  }

  return (
    <div className="focus">
      {foci}
    </div>
  );
}

export const Focus = ( { type, index, value } ) => {
  return (
    null
    // <Form.Check inline label={focusDisplayNames[type][index]} type="checkbox" checked={value} readOnly />
  );
}

/* 
  Character Sheet -> (one to many -- char sheet may have one active/approved set of attributes. Uses most recent approved)
  Attributes {
    physical {
      value
      focus_1
      focus_2
      focus_3
    }
    mental {
      value
      focus
    }
    social {
      value
      focus
    }
  }

  Note {
    note: text
    user
    date
    action ( approved, declined, note )
  }


*/