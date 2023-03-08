import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

export default function Create() {
    const [Nome, setFirstName] = useState('');
    const [Sobrenome, setLastName] = useState('');
    const [Apelido, setApelido] = useState('');
    const [Idade, setIdade] = useState('');
    const [Altura, setAltura] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const limparCampos = () => {
        setFirstName('');
        setLastName('');
        setIdade('');
        setAltura('');
        setTelefone('');
        setCheckbox(false);
    }

    const postData = () => {
        axios.post(`https://606b320df8678400172e5d57.mockapi.io/api/v1/MockData`, {
            Nome,
            Sobrenome,
            Apelido,
            Idade,
            Altura,
            Telefone,
            checkbox
        })
        limparCampos();
    }
    
    const verifyData = () => {
        if (Nome === '' || Sobrenome === '' || Idade === '' || Altura === '' || checkbox === false || Apelido === '' || Telefone === '') {
            alert('Preencha todos os campos');
        } else {
            postData();
        }
    }

    return (
        <div>
            <Form className="create-form">
                <h2>Cadastro de Modelos</h2>
                <Form.Field>
                        <label>Nome</label>
                        <input placeholder='Gustavo' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                        <label>Sobrenome</label>
                        <input placeholder='Delicinha' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field className='field-form'>
                    <label>Apelido da Casa</label>
                    <input placeholder='Bumbum Gula' onChange={(e) => setApelido(e.target.value)} type='text'/>
                </Form.Field>    
                <Form.Field>
                    <label>Idade</label>
                    <input placeholder='21' onChange={(e) => setIdade(e.target.value)} type='number' step={.01}/>
                </Form.Field>
                <Form.Field>
                    <label>Altura</label>
                    <input placeholder='1,64' onChange={(e) => setAltura(e.target.value)} type='number'/>
                </Form.Field>
                <Form.Field>
                    <label>Telefone</label>
                    <input placeholder='(31)98266-6635' onChange={(e) => setTelefone(e.target.value)} type='tel'/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Possui algum tipo de DST?' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={verifyData} type='Login' className='btn-confirm'>Cadastrar</Button>
            </Form>
        </div>
    )
}