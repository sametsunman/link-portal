import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';


const CreateLink = () => {

    const dispatch = useDispatch();
    const initialState = {
        name: '',
        link: ''
    };

    const [fields, setFields] = useState(initialState);
    const [alertShow, setAlertShow] = useState(false);

    const onFieldsChange = (name, value) => {
        setFields({
            ...fields,
            [name]: value
        })
    }

    const onFormSubmit = () => {
        dispatch({ type: 'CREATE_NEW_LINK', payload: fields });
        setFields(initialState);
        setAlertShow(true);
    }

    return (
        <div>
            <Alert variant="success" show={alertShow} onClose={() => setAlertShow(false)} dismissible autohide>
                <p>
                    Bağlantı başarıyla eklendi.
                </p>
            </Alert>
            <div style={{ marginTop: 10 }}>
                <h3>Yeni bağlantı ekle</h3>
                <div className="form-group">
                    <label>Bağlantı Adı:  </label>
                    <input
                        type="text"
                        className="form-control"
                        value={fields.name}
                        onChange={(e) => onFieldsChange("name", e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Bağlantı Adresi: </label>
                    <input type="text"
                        className="form-control"
                        value={fields.link}
                        onChange={(e) => onFieldsChange("link", e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="button" value="Kaydet" style={{ marginTop: 10, marginRight: 10 }} className="btn btn-primary" onClick={onFormSubmit} />
                    {alertShow && <Link to='/'><input type="button" value="Geri Dön" style={{ marginTop: 10 }} className="btn btn-secondary" /></Link>}
                </div>
            </div>

        </div>
    )
}

export default CreateLink
