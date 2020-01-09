import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

export default function MeritsFlaws ( { meritsFlaws } ) {
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            { meritsFlaws.map( ( item ) => (
              <MeritFlaw name={item.name} value={item.value} note={item.notes} key={`${item.name}-${item.value}`} />
            ) ) }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export function MeritFlaw ( { name, value, note } ) {
  const absV = Math.abs( value );
  const display = ( value < 0 ) ? `${absV} point Flaw` : `${absV} point Merit`;

  return (
    <ListGroup.Item>
      <div>{name}</div>
      <div>{display}</div>
      { note &&
        <Card>
          <Card.Body>
            {note}
          </Card.Body>
        </Card> }
    </ListGroup.Item>
  )
}