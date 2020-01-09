import React from "react";
import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import StatListItem from "./StatListItem";

export function StatList ( { list, itemProps, ...props } ) {
  return (
    <Container {...props}>
      <Row>
        <Col>
          <ListGroup>
            {
              list.map( ( item ) => (
                <StatListItem name={item.name} value={item.value} {...itemProps} key={`stat-${item.name}-${item.value}`} />
              ) )
            }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

StatList.propTypes = {
  list: PropTypes.array.isRequired,
  itemProps: PropTypes.object
};

StatList.defaultProps = {
  itemProps: undefined
};

export default StatList;