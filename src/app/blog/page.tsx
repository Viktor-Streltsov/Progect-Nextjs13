import React from 'react';
import style from './page.module.css';
import Link from "next/link";
import Image from "next/image";
const Blog = () => {
    return (
        <div className={style.mainContainer}>
            <Link href='blog/test' className={style.container} key='1'>
                <div className={style.imageContainer}>
                    <Image
                        src='https://www.freepik.com/free-vector/tiny-house-concept-illustration_25182811.htm#query=home&position=17&from_view=search&track=sph&uuid=1c30eca9-d045-4192-a304-2512ade9c68e'
                        alt=""
                        width={400}
                        height={250}
                        className={style.image}
                    />
                </div>
                <div className={style.container}>
                    <h1 className={style.title}>Title</h1>
                    <p className={style.desc}>Desc</p>
                </div>
            </Link>
            <Link href='blog/test2' className={style.container} key='2'>
                <div className={style.imageContainer}>
                    <Image
                        src='https://www.freepik.com/free-vector/tiny-house-concept-illustration_25182811.htm#query=home&position=17&from_view=search&track=sph&uuid=1c30eca9-d045-4192-a304-2512ade9c68e'
                        alt=""
                        width={400}
                        height={250}
                        className={style.image}
                    />
                </div>
                <div className={style.container}>
                    <h1 className={style.title}>Title</h1>
                    <p className={style.desc}>Desc</p>
                </div>
            </Link>
        </div>
    );
}

export default Blog;