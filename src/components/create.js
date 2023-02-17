import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

export default function Create() {
    const [Nome, setFirstName] = useState('');
    const [Sobrenome, setLastName] = useState('');
    const [Idade, setIdade] = useState('');
    const [Email, setEmail] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const limparCampos = () => {
        setFirstName('');
        setLastName('');
        setIdade('');
        setEmail('');
        setCheckbox(false);
    }

    const postData = () => {
        axios.post(`https://606b320df8678400172e5d57.mockapi.io/api/v1/MockData`, {
            Nome,
            Sobrenome,
            Idade,
            Email,
            checkbox
        })
        limparCampos();
    }
    
    const verifyData = () => {
        if (Nome === '' || Sobrenome === '' || Idade === '' || Email === '' || checkbox === false) {
            alert('Preencha todos os campos');
        } else {
            postData();
        }
    }

    return (
        <div>
            <Form className="create-form">
                <h2>Cadastro</h2>
                <Form.Group>
                    <Form.Field>
                        <label>Nome</label>
                        <input placeholder='Rafael' onChange={(e) => setFirstName(e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Sobrenome</label>
                        <input placeholder='Ramalho' onChange={(e) => setLastName(e.target.value)}/>
                    </Form.Field>
                </Form.Group>    
                <Form.Field>
                    <label>Idade</label>
                    <input placeholder='21' onChange={(e) => setIdade(e.target.value)} type='number'/>
                </Form.Field>
                <Form.Field>
                    <label>E-mail</label>
                    <input placeholder='email@email.com' onChange={(e) => setEmail(e.target.value)} type='email'/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Eu concordo com o Termos e Condições' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={verifyData} type='Login' className='btn-confirm'>Cadastrar</Button>
            </Form>
        </div>
    )
}