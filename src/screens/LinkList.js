import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const LinkList = () => {

    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const { links } = useSelector((state) => state);


    const voteItem = (id, vote) => {
        dispatch({ type: 'VOTE_LINK', payload: { id: id, vote: vote } });
    }

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_LINK', payload: id });
    }


    const Paging = () => {
        let pages = [];
        for (var i = 0; i < links.length/5; i++) {
            let page = i;
            pages.push(<div onClick={()=>setPage(page)}>{page+1}</div>)
        }
        return <div>{pages}</div>
    }


    return (
        <div>
            <table>
                <tr>
                    <th>Bağlantı Adı</th>
                    <th>Bağlantı Adresi</th>
                    <th>Puan</th>
                    <th>İşlemler</th>
                </tr>
                {links.sort((a, b) => b.vote - a.vote)
                    .sort((a, b) =>  new Date(b.updatedDate) - new Date(a.updatedDate))
                    .slice(page * 5, (page + 1) * 5)
                    .map(item => {
                    return <tr>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.link}
                        </td>
                        <td>
                            {item.vote}
                        </td>
                        <td>
                            <span onClick={() => voteItem(item.id, 1)}>Up</span>
                            <span onClick={() => voteItem(item.id, -1)}>Down</span>
                            <span onClick={() => removeItem(item.id)}>Remove</span>
                        </td>
                    </tr>
                })}
            </table>
            <Paging />
        </div>
    )
}

export default LinkList
