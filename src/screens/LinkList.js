import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Pagination } from 'react-bootstrap';
import Toast from './../components/Common/Toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faTrash, faArrowUp, faArrowDown, faLink } from '@fortawesome/free-solid-svg-icons';
import { Tr, Td, Button, ConnectionLink, ToastContainer, RemoveCol } from './../styles/LinkList.styles';


const LinkList = () => {

    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [sortByVote, setSortByVote] = useState(true);
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
                    <th>Puan
                        <FontAwesomeIcon icon={faArrowUp} color={sortByVote ? 'black' : 'gray'} onClick={() => setSortByVote(true)} />
                        <FontAwesomeIcon icon={faArrowDown} color={sortByVote ? 'gray' : 'black'} onClick={() => setSortByVote(false)} />
                    </th>
                    <th>Oyla</th>
                </tr>
                {links
                    .sort((a, b) => new Date(b.updatedDate) - new Date(a.updatedDate))
                    .sort((a, b) => sortByVote ? b.vote - a.vote : a.vote - b.vote)
                    .slice(page * 5, (page + 1) * 5)
                    .map(item => {
                        return <Tr>
                            <Td>
                                {item.name}
                            </Td>
                            <Td>
                                <ConnectionLink href={item.link} >{item.link}<span style={{display:'none'}}><FontAwesomeIcon icon={faLink} color='black' /></span></ConnectionLink>
                            </Td>
                            <Td>
                                {item.vote}
                            </Td>
                            <Td>
                                <Button><span onClick={() => voteItem(item.id, -1)}><FontAwesomeIcon icon={faThumbsDown} color='orange' /></span></Button>
                                <Button><span onClick={() => voteItem(item.id, 1)}><FontAwesomeIcon icon={faThumbsUp} color='blue' /></span></Button>
                                <RemoveCol><Button><span onClick={() => removeItem(item.id)}><FontAwesomeIcon icon={faTrash} color='red' /></span></Button></RemoveCol>
                            </Td>
                        </Tr>
                    })}
            </Table>
            <Pagination size='sm'><Paging /></Pagination>
            <ToastContainer>
                <Toast onClose={() => setToastShow(false)} show={toastShow} content='Bağlantı başarıyla silindi.'/>
            </ToastContainer>
        </div>
    )
}

export default LinkList
