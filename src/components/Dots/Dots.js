import React from "react";
import PropTypes from "prop-types";

import Dot from "./Dot";

export function Dots ( { value, max, keyName } ) {
  let dots = [];

  for( let i = 0; i < max; i++ ) {
    let key = `dots-${keyName}-${i}`;
    let isFilled = false;

    if( i < value ) {
      isFilled = true;
    }

    dots.push( <Dot isFilled={isFilled} key={key} />);
  }

  return (
    <div className="dots">{dots}</div>
  );
}

Dots.propTypes = {
  isEditable: PropTypes.bool,
  max: PropTypes.number,
  value: PropTypes.number.isRequired
};

Dots.defaultProps = {
  isEditable: false,
  max: 5
};

export default Dots;
