import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

export default function Create() {
    const [Nome, setFirstName] = useState('');
    const [Sobrenome, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        axios.post(`https://606b320df8678400172e5d57.mockapi.io/api/v1/MockData`, {
            Nome,
            Sobrenome,
            checkbox
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Nome</label>
                    <input placeholder='Rafael' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Sobrenome</label>
                    <input placeholder='Ramalho' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Eu concordo com o Termos e Condições' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postData} type='Login'>Login</Button>
            </Form>
        </div>
    )
}