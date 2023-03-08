import React from 'react'
import { Form } from 'semantic-ui-react'
//error={{ content: 'Please enter your first name', pointing: 'below' }}
export default function Login() {

    return(
        <div>
            <Form className="create-form">
                <h2>Entrar</h2>
                <Form.Field>
                        <label>Nome</label>
                        <input placeholder='Gustavo' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                        <label>Sobrenome</label>
                        <input placeholder='Delicinha' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Button onClick={verifyData} type='Login' className='btn-confirm'>Cadastrar</Button>
            </Form>
        </div>
    )
    
}