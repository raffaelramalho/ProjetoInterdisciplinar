//cria uma navbar
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default function Navbar() {
    return (
        <Menu className='menu-nav'>
            
                <Menu.Item>
                    <Link to='/home'>Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/about'>Sobre</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/read'>Tabela Geral</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/create'>Cadastro</Link>
                </Menu.Item>
            <Link to='/login' className='login-nav'>Entrar</Link>
                
        </Menu>
    )
}