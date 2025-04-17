import React from 'react';
import './navItem.css';

export interface NavItemProps {
    url: string;
    label: string;
}

export default function NavItem(props: NavItemProps) {
    return(
        <li className="navItem">
            <a href={props.url} className="navLink">
                {props.label}
            </a>
        </li>
    )
}