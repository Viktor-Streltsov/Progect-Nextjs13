import React from 'react';
import style from './page.module.css'
import Button from "../../components/button/Button";
import Image from "next/image";
const Category = ({params}) => {
    return (
        <div className={style.category}>
            <h1 className={style.catTitle}>{params.category}</h1>
            <div className={style.item} key='1'>
                <div className={style.content}>
                    <h1 className={style.title}>test</h1>
                    <p className={style.desc}>desc</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={style.imgContainer}>
                    <Image
                        className={style.img}
                        fill={true}
                        src='https://www.freepik.com/free-vector/tiny-house-concept-illustration_25182811.htm#query=home&position=17&from_view=search&track=sph&uuid=1c30eca9-d045-4192-a304-2512ade9c68e'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
}

export default Category;