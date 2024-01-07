import React from 'react';
import style from './page.module.css';
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-cache'});

    if(!res.ok) {
        throw new Error('Filed to fetch data');
    }

    return res.json();
}


const Blog = async () => {

    const data = await getData();

    return (
        <div className={style.mainContainer}>
            {data.slice(95).map((item) => (
                <Link href={`blog/${item.id}`} className={style.container} key={item.id}>
                <div className={style.imageContainer}>
                    <Image
                        src='https://img.freepik.com/free-vector/tiny-house-concept-illustration_25182811.htm#query=home&position=17&from_view=search&track=sph&uuid=1c30eca9-d045-4192-a304-2512ade9c68e'
                        alt=""
                        width={400}
                        height={250}
                        className={style.image}
                    />
                </div>
                <div className={style.container}>
                    <h1 className={style.title}>{item.title}</h1>
                    <p className={style.desc}>{item.body}</p>
                </div>
            </Link>
            ))}
        </div>
    );
}

export default Blog;