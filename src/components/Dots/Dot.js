import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Dot = ( { isFilled, isClickable } ) => {
  const filledIcon = "fas fa-circle";
  const emptyIcon = "far fa-circle";

  return (
    <span className={classNames(
      "dot",
      { 
        [filledIcon]: isFilled,
        [emptyIcon]: !isFilled,
        "clickable": isClickable
      }
    )} />
  );
}

Dot.propTypes = {
  isFilled: PropTypes.bool.isRequired,
  isClickable: PropTypes.bool
};

Dot.defaultProps = {
  isClickable: false
};

export default Dot;