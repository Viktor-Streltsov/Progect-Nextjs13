'use client'

import React, {useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/navigation";
import style from './page.module.css';


const Register = () => {
    const [err, setErr] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            const res = await fetch('/api/auth/register', {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })
            res.status === 201 && router.push('/dashboard/login?success=Account has been created')
        } catch (error) {
            setErr(error);
        }
    }


    return (
        <div className={style.container}>
            <h1 className={style.title}>Create an Account</h1>
            <h2 className={style.subtitle}>Please sign up to see dashboard</h2>
            <form className={style.form} onSubmit={handleSubmit}>
                <input type='text' placeholder='Username' required className={style.input}/>
                <input type='email' placeholder='Email' required className={style.input}/>
                <input type='password' placeholder='Password' required className={style.input}/>
                <button className={style.button}>Register</button>
                {err && 'Something went wrong!'}
            </form>
            <span className={style.or}>- OR -</span>
            <Link className={style.link} href='/dashboard/login'>Login with an existing account</Link>
        </div>);
}

export default Register;