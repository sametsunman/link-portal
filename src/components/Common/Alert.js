import React from 'react';
import { Alert as Alrt } from 'react-bootstrap';

const Alert = ({variant,show,onClose,content}) => {
    return (
        <Alrt variant={variant} show={show} onClose={onClose} dismissible autohide>
        <p>
            {content}
        </p>
        </Alrt>
    )
}

export default Alert
