import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";


const Backdrop = props => {

    return <div className={classes.backdrop}></div>
}

const ModalOverlay = props => {
    return (
    <div className={classes.modal} onClick={props.onClose}>
    <div className={classes.context}>{props.children}</div>
    </div>
    );
}

const portalElement = document.getElementById("overlays");

const Modal = props => {
    return (
        <React.Fragment>
            {createPortal(<Backdrop onClose={props.onClose}></Backdrop>,portalElement)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </React.Fragment>
    );
}

export default Modal;
