'use client'

import React from 'react';
import Link from "next/link";
import {links} from "../../constans/meny";
import style from './page.module.css';
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const NavBar = () => {
    return (
        <nav className={style.container}>
          <Link href={'/'} className={style.logo}>MyApp</Link>
            <div className={style.links}>
                <DarkModeToggle/>
                {links.map((link) => (
                    <Link href={link.url} key={link.id}>
                        {link.title}
                    </Link>
                ))}
                <button className={style.logout} onClick={() => console.log('hello')}>Logout</button>
            </div>
        </nav>
    );
};

export default NavBar;