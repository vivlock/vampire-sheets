import React from "react";
import PropTypes from "prop-types";

import ListGroup from "react-bootstrap/ListGroup";

import Dots from "../Dots/Dots";

export function StatListItem( { name, value, max } ) {
  return (
    <ListGroup.Item>
      <div>{name}</div>
      <Dots value={value} max={max} keyName={`${name}`} />
    </ListGroup.Item>
  )
}

StatListItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  max: PropTypes.number
};

StatListItem.defaultProps = {
  name: "",
  value: 0,
  max: 5
};

export default StatListItem;