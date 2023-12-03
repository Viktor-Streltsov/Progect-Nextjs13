import React from 'react';
import style from './page.module.css';
import Image from "next/image";
import Button from "../components/button/Button";
const About = () => {
    return (
        <>
            <div className={style.imgContainer}>
                <Image
                    src={'https://img.freepik.com/free-photo/paper-people-chain-on-green-grass-unity-concept_632805-35.jpg?w=1380&t=st=1685890833~exp=1685891433~hmac=46f15c2161ca525e238313ec9dc0812864411c64035b664d7abecd75e33494e1'}
                    alt={'icon'}
                    fill={true}
                    className={style.img}
                />
                <div className={style.imgText}>
                    <h1 className={style.imgTitle}>Lorem ipsum dolor sit</h1>
                    <h2 className={style.imgDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                </div>
            </div>
            <div className={style.textContainer}>
                <div className={style.item}>
                    <h1 className={style.title}>Who Are We?</h1>
                    <p className={style.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
                        beatae, a suscipit eos. Animi quibusdam cum omnis officiis
                        <br />
                        <br />
                        voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
                        esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
                        officiis voluptatum quo ea eveniet?
                    </p>
                </div>

                <div className={style.item}>
                    <h1 className={style.title}>What We Do?</h1>
                    <p className={style.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
                        Creative Illustrations
                        <br />
                        <br /> - Dynamic Websites
                        <br />
                        <br /> - Fast and Handy
                        <br />
                        <br /> - Mobile Apps
                    </p>
                    <Button text={'Contact'} url={'/contact'}/>
                </div>
            </div>
        </>
    );
}

export default About;