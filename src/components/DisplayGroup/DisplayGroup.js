import React from "react";
import Form from "react-bootstrap/Form"
import classNames from "classnames";

class DisplayGroup extends React.Component {
  handleChange = ( event ) => {
    const { fieldName, onChange } = this.props;
    onChange( fieldName, event.target.value );
  };

  isPristine = () => {
    const { value, pristine } = this.props;
    console.log( `isPristine, draft "${value}", pristine "${pristine}"` )

    // empty is empty
    if( !value && !pristine ) {
      return true;
    }

    return value === pristine;
  }

  render() {
    const { label, value, controlId, isEditing, fieldName } = this.props;
    const id = controlId ? controlId : fieldName;
    const isPristine = this.isPristine();
  
    return (
      <Form.Group controlId={id} className={classNames( "displayGroup", { "changed": !isPristine,  } )}>
        <Form.Label>{label}:</Form.Label>
        <Form.Control value={value} plaintext={!isEditing} readOnly={!isEditing} disabled={!isEditing} onChange={this.handleChange} />
      </Form.Group>
    );
  }
}

export default DisplayGroup;