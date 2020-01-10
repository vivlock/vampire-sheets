import React from 'react';
import classNames from 'classnames';

export default function Dialog( { title, onSubmit, onCancel, isOpen, children } ) {
  const classes = classNames( 'modal', { 'is-active': isOpen } );
  
  return (
    <div className={classes}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" aria-label="close" onClick={onCancel}></button>
        </header>
        <section className="modal-card-body">
          {...children}
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={onSubmit}>Submit</button>
          <button className="button" onClick={onCancel}>Cancel</button>
        </footer>
      </div>
    </div>
  );
}