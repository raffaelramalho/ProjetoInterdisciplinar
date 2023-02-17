import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Update() {
    const [Nome, setFirstName] = useState('');
    const [Sobrenome, setLastName] = useState('');
    const [Idade, setIdade] = useState('');
    const [Email, setEmail] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [id, setID] = useState(null);
    const updateAPIData = () => {
        axios.put(`https://606b320df8678400172e5d57.mockapi.io/api/v1/MockData/${id}`, {
            Nome,
            Sobrenome,
            Idade,
            Email,
            checkbox
        })
    }
    return (
        <div>
            <Form className="create-form">
            <h2>Atualizar Informações</h2>
                <Form.Group>
                    <Form.Field>
                        <label>Nome</label>
                        <input placeholder='' onChange={(e) => setFirstName(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Sobrenome</label>
                        <input placeholder='' onChange={(e) => setLastName(e.target.value)}/>
                    </Form.Field>
                </Form.Group>    
                <Form.Field>
                    <label>Idade</label>
                    <input placeholder='' onChange={(e) => setIdade(e.target.value)} type='number'/>
                </Form.Field>
                <Form.Field>
                    <label>E-mail</label>
                    <input placeholder='' onChange={(e) => setEmail(e.target.value)} type='email'/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Eu concordo com o Termos e Condições' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData} >Atualizar</Button>
            </Form>
        </div>
    )
}