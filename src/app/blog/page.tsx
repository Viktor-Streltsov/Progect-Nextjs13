import React from 'react';
import style from './page.module.css';
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/posts', {cache: 'no-cache'});

    if(!res.ok) {
        throw new Error('Filed to fetch data');
    }

    return res.json();
}


const Blog = async () => {

    const data = await getData();
    console.log(data)
    return (
        <div className={style.mainContainer}>
            {data.map((item) => (
                <Link href={`blog/${item._id}`} className={style.container} key={item._id}>
                <div className={style.imageContainer}>
                    <Image
                        src={item.image}
                        alt=""
                        width={400}
                        height={250}
                        className={style.image}
                    />
                </div>
                <div className={style.container}>
                    <h1 className={style.title}>{item.title}</h1>
                    <p className={style.desc}>{item.content}</p>
                </div>
            </Link>
            ))}
        </div>
    );
}

export default Blog;