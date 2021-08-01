import React, { useState } from 'react'
import { useDispatch } from 'react-redux';


const CreateLink = () => {

    const dispatch = useDispatch();
    const initialState = {
        name: '',
        link: ''
    };

    const [fields, setFields] = useState(initialState);

    const onFieldsChange = (name,value) => {
        setFields({
            ...fields,
            [name]: value
        })
    }

    const onFormSubmit = () => {
        dispatch({type: 'CREATE_NEW_LINK', payload: fields});
        setFields(initialState);
    }

    return (
        <div>
            <div style={{ marginTop: 10 }}>
              <h3>Add New Business</h3>
                  <div className="form-group">
                      <label>Bağlantı Adı:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={fields.name}
                        onChange={(e)=> onFieldsChange("name",e.target.value)}
                        />
                  </div>
                  <div className="form-group">
                      <label>Bağlantı Adresi: </label>
                      <input type="text" 
                        className="form-control"
                        value={fields.link}
                        onChange={(e)=> onFieldsChange("link",e.target.value)}
                        />
                  </div>
                  <div className="form-group">
                      <input type="button" value="Kaydet" className="btn btn-primary" onClick={onFormSubmit} />
                  </div>
          </div>
        </div>
    )
}

export default CreateLink
