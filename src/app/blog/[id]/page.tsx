import React from 'react';
import style from './page.module.css';
import Image from "next/image";
const BlogId = ({params}) => {
    return (
        <div className={style.container}>
            <div className={style.top}>
                <div className={style.info}>
                    <h1 className={style.title}>Title</h1>
                    <p className={style.desc}>Desc</p>
                    <div className={style.author}>
                        <Image
                            src=''
                            alt=""
                            width={40}
                            height={40}
                            className={style.avatar}
                        />
                        <span className={style.username}>Username</span>
                    </div>
                </div>
                <div className={style.imageContainer}>
                    <Image src='' alt="" fill={true} className={style.image} />
                </div>
            </div>
            <div className={style.content}>
                <p className={style.text}>Content</p>
            </div>
        </div>
    );
}

export default BlogId;