import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Update() {
    const [Nome, setFirstName] = useState('');
    const [Sobrenome, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [id, setID] = useState(null);
    const updateAPIData = () => {
        axios.put(`https://606b320df8678400172e5d57.mockapi.io/api/v1/MockData/${id}`, {
            Nome,
            Sobrenome,
             checkbox
        })
    }
    useEffect(() => {
            setID(localStorage.getItem('ID'))
            setFirstName(localStorage.getItem('Nome'));
            setLastName(localStorage.getItem('Sobrenome'));
            setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []);
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Nome</label>
                    <input placeholder='Nome' value={Nome} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Sobrenome</label>
                    <input placeholder='Sobrenome' value={Sobrenome} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Eu concordo com o Termos e Condições' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData} >Atualizar</Button>
            </Form>
        </div>
    )
}