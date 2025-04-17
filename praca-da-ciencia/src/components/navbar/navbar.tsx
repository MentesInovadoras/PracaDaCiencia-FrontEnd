import React from 'react';
import logo from "../../assets/logo/main.png";
import NavItem, { NavItemProps } from '../navItens/navItem.tsx';
import './navbar.css';

export default function Navbar() {
    const items: NavItemProps[] = [
        {
            url: '/',
            label: 'Início',
        },
        {
            url: '/sobre',
            label: 'Sobre',
        },
        {
            url: '/contato',
            label: 'Contato',
        },
    ] 


    return (
        <header id='navbar'>
            <nav className="navbar">
                <a href='/'>
                    <img
                        src={logo}
                        alt="Praça da Ciência" />
                </a>
                <div className='mobileMenu'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
                <ul className='navItens'>
                    {items.map((item, index) => (
                        <NavItem
                            key={index}
                            url={item.url}
                            label={item.label}
                        />
                    ))}
                </ul>

                <button className='btnLogin'>Sou Técnico</button>
            </nav>
        </header>
    );
}
