import React from 'react';
import logo from "../../assets/logo/main.png";
import NavItem from '../navItens/navItem.tsx';
import { NavItemProps } from '../navItens/navItem.tsx';
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
        {
            url: '/',
            label: 'sou técnico',
        }
    ]

    const [openMenu, setOpenMenu] = React.useState<boolean>(false);

    return (
        <header id='navbar'>
            <nav className="navbar">
                <a href='/'>
                    <img
                        src={logo}
                        alt="Praça da Ciência" />
                </a>
                <div className={`mobileMenu ${openMenu ? 'active' : ''}`} onClick={() => setOpenMenu(!openMenu)}>
                    <a>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </a>
                </div>
                <ul className="navItens" id={openMenu ? 'active' : ''}>
                    {items.map((item, index) => (
                        <NavItem
                            key={index}
                            url={item.url}
                            label={item.label}
                        />
                    ))}
                </ul>


            </nav>
        </header>
    );
}
