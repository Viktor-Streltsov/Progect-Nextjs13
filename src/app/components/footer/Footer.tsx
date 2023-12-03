import React from 'react';
import style from './page.module.css';
import Image from "next/image";

const Footer = () => {
    return (
        <div className={style.container}>
            <div>2023 MyApp. All rights reserved</div>
            <div className={style.social}>
                <Image src={'/vk.png'} alt={'img'} width={15} height={15} className={style.icon}/>
                <Image src={'/inst.png'} alt={'img'} width={15} height={15} className={style.icon}/>
                <Image src={'/twitter.png'} alt={'img'} width={15} height={15} className={style.icon}/>
                <Image src={'/yt.png'} alt={'img'} width={15} height={15} className={style.icon}/>
            </div>
        </div>
    );
};

export default Footer;