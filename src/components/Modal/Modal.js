import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import  styles from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component{
// слушатели;
componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
}
componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
}

// закритие окна по Escape;
handleKeyDown = e => {
    if (e.code === 'Escape') {
        this.props.onClose();
    }
};

// закритие окна по клику на Backdrop;
handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
        this.props.onClose();
    }
}

render(){
    return createPortal (
        <div className={styles.Overlay} onClick={this.handleBackdropClick}>
            <div className={styles.Modal}>
                <img src="" alt="" />
            </div>
        </div>,
        modalRoot ,
)}
}

Modal.defaultProps = {
  children: null,
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
  
export default Modal;


