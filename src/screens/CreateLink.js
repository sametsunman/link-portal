import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Alert from './../components/Common/Alert'


const CreateLink = () => {

    const dispatch = useDispatch();
    const initialState = {
        name: '',
        link: ''
    };

    const [fields, setFields] = useState(initialState);
    const [successAlertShow, setSuccessAlertShow] = useState(false);
    const [unsuccessAlertShow, setUnsuccessAlertShow] = useState(false);

    const onFieldsChange = (name, value) => {
        setFields({
            ...fields,
            [name]: value
        })
    }

    const onFormSubmit = () => {
        if(fields.name!=='' && fields.link!=='')
        {
            dispatch({ type: 'CREATE_NEW_LINK', payload: fields });
            setFields(initialState);
            setSuccessAlertShow(true);
            setUnsuccessAlertShow(false);
        }
        else
        {
            setSuccessAlertShow(false);
            setUnsuccessAlertShow(true);
        }

    }

    return (
        <div>
            <Alert variant="success" show={successAlertShow} onClose={() => setSuccessAlertShow(false)} content="Bağlantı başarıyla eklendi." />
            <Alert variant="danger" show={unsuccessAlertShow} onClose={() => setUnsuccessAlertShow(false)} content="Bağlantı adı veya adres boş olamaz!" />
            <div style={{ marginTop: 10 }}>
                <h3>Yeni bağlantı ekle</h3>
                <FormGroup>
                    <label>Bağlantı Adı:  </label>
                    <input
                        type="text"
                        className="form-control"
                        value={fields.name}
                        onChange={(e) => onFieldsChange("name", e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Bağlantı Adresi: </label>
                    <input type="text"
                        className="form-control"
                        value={fields.link}
                        onChange={(e) => onFieldsChange("link", e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <input type="button" value="Kaydet" style={{ marginTop: 10, marginRight: 10 }} className="btn btn-primary" onClick={onFormSubmit} />
                    {successAlertShow && <Link to='/'><input type="button" value="Geri Dön" style={{ marginTop: 10 }} className="btn btn-secondary" /></Link>}
                </FormGroup>
            </div>

        </div>
    )
}

export default CreateLink
