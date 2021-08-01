import React from 'react';
import { Toast as Tst } from 'react-bootstrap';

const Toast = ({onClose, show, content}) => {
    return (
    <Tst onClose={onClose} show={show} delay={3000} bg='success' position='top-end' autohide>
        <Tst.Body className='text-white'>{content}</Tst.Body>
    </Tst>
    )
}

export default Toast
