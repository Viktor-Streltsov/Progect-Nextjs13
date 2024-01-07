import React from 'react';
import style from './page.module.css';
import Image from "next/image";

const getData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {cache: 'no-cache'});

    if(!res.ok) {
        throw new Error('Filed to fetch data');
    }

    return res.json();
}

const BlogId = async ({params}) => {

    const data = await getData(params.id);

    return (
        <div className={style.container}>
            <div className={style.top}>
                <div className={style.info}>
                    <h1 className={style.title}>{data.title}</h1>
                    <p className={style.desc}>{data.body}</p>
                    <div className={style.author}>
                        <Image
                            src='https://img.freepik.com/free-vector/tiny-house-concept-illustration_25182811.htm#query=home&position=17&from_view=search&track=sph&uuid=1c30eca9-d045-4192-a304-2512ade9c68e'
                            alt=""
                            width={40}
                            height={40}
                            className={style.avatar}
                        />
                        <span className={style.username}>Username</span>
                    </div>
                </div>
                <div className={style.imageContainer}>
                    <Image src='https://img.freepik.com/free-vector/tiny-house-concept-illustration_25182811.htm#query=home&position=17&from_view=search&track=sph&uuid=1c30eca9-d045-4192-a304-2512ade9c68e' alt="" fill={true} className={style.image} />
                </div>
            </div>
            <div className={style.content}>
                <p className={style.text}>Content</p>
            </div>
        </div>
    );
}

export default BlogId;