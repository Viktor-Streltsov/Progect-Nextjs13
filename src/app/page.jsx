import React from 'react';
import style from './page.module.css';
import Button from "./components/button/Button";
import Image from "next/image";
import Hero from '../../public/hero.png';

const Home = () => {
  return (
    <main className={style.container}>
        <div className={style.item}>
            <h1 className={style.title}>The Future of AI in the next few years</h1>
            <p className={style.desc}>
                Turning your Idea into Reality. We bring together the teams from the
                global tech industry.
            </p>
            <Button text={'See Our Works'} url={'/portfolio'}/>
        </div>
        <div className={style.item}>
            <Image className={style.img} src={Hero} alt={'icon'}/>
        </div>
    </main>
  )
}


export default Home;