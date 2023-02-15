import React, { useEffect, useState } from 'react';
import { Table , Button} from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    const getData = () => {
        axios.get(`https://606b320df8678400172e5d57.mockapi.io/api/v1/MockData`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }
    const [APIData, setAPIData] = useState([]);
        useEffect(() => {
            axios.get(`https://606b320df8678400172e5d57.mockapi.io/api/v1/MockData`)
            .then((response) => {
                setAPIData(response.data);
            }) 
        }, [])
        const setData = (data) => {
            let { id, Nome, Sobrenome, checkbox } = data;
            localStorage.setItem('ID', id);
            localStorage.setItem('First Name', Nome);
            localStorage.setItem('Last Name', Sobrenome);
            localStorage.setItem('Checkbox Value', checkbox)
        }
        const onDelete = (id) => {
            axios.delete(`https://606b320df8678400172e5d57.mockapi.io/api/v1/MockData/${id}`)
            .then(() => {
                getData();
            })
          }
    return (
        
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>Sobrenome</Table.HeaderCell>
                        <Table.HeaderCell>Checado</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.HeaderCell>Atualizar</Table.HeaderCell>

                <Table.Body>
                {APIData.map((data) => {
                    return (
                    <Table.Row>
                        <Table.Cell>{data.firstName}</Table.Cell>
                        <Table.Cell>{data.lastName}</Table.Cell>
                        <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                        <Link to='/update'>
                        <Table.Cell> 
                            <Button onClick={() => setData(data)}> Atualizar </Button>
                        </Table.Cell>
                        <Table.Cell>
                            <Button onClick={() => onDelete(data.id)}>Deletar</Button>
                        </Table.Cell>
                        </Link>
                        </Table.Row>
                )})}
                </Table.Body>
            </Table>
        </div>
    )
}