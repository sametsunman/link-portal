import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toast, Table, Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Tr,Td, Button,ToastContainer, RemoveCol } from './../styles/LinkList.styles';


const LinkList = () => {

    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [toastShow, setToastShow] = useState(false);
    const { links } = useSelector((state) => state);


    const voteItem = (id, vote) => {
        dispatch({ type: 'VOTE_LINK', payload: { id: id, vote: vote } });
    }

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_LINK', payload: id });
        setToastShow(true);
    }


    const Paging = () => {
        let pages = [];
        for (let i = 0; i < links.length / 5; i++) {
            let currentPage = i;
            pages.push(<Pagination.Item key={currentPage} active={currentPage === page} onClick={() => {
                setPage(currentPage);
            }}>
                {currentPage + 1}
            </Pagination.Item>)
        }
        return pages
    }


    return (
        <div>
            <Table striped bordered hover size="sm">
                <tr>
                    <th>Bağlantı Adı</th>
                    <th>Bağlantı Adresi</th>
                    <th>Puan</th>
                    <th>Oyla</th>
                </tr>
                {links
                    .sort((a, b) => new Date(b.updatedDate) - new Date(a.updatedDate))
                    .sort((a, b) => b.vote - a.vote)
                    .slice(page * 5, (page + 1) * 5)
                    .map(item => {
                        return <Tr>
                            <Td>
                                {item.name}
                            </Td>
                            <Td>
                                {item.link}
                            </Td>
                            <Td>
                                {item.vote}
                            </Td>
                            <Td>
                                <Button><span onClick={() => voteItem(item.id, -1)}><FontAwesomeIcon icon={faThumbsDown} color='orange' /></span></Button>
                                <Button><span onClick={() => voteItem(item.id, 1)}><FontAwesomeIcon icon={faThumbsUp} color='blue' /></span></Button>
                                <Button><RemoveCol onClick={() => removeItem(item.id)}><FontAwesomeIcon icon={faTrash} color='red' /></RemoveCol></Button>
                            </Td>
                        </Tr>
                    })}
            </Table>
            <Pagination size='sm'><Paging /></Pagination>
            <ToastContainer>
            <Toast onClose={() => setToastShow(false)} show={toastShow} delay={3000} bg='success'  position='top-end' autohide>
                <Toast.Body className='text-white'>Bağlantı başarıyla silindi.</Toast.Body>
            </Toast>
            </ToastContainer>
        </div>
    )
}

export default LinkList
