'use client'

import React, {useState, useEffect} from 'react';
import style from './page.module.css';
import useSWR from "swr";
import {any} from "prop-types";
const Dashboard = () => {
    // const [data, setData] = useState();
    // const [error, setError] = useState<boolean>();
    // const [isLoading, setLoading] = useState<boolean>();

    // useEffect(() => {
    //     const getDate = async () => {
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {cache: 'no-cache'});
    //
    //         if(!res.ok) {
    //             setError(true);
    //         }
    //
    //         const data = await res.json();
    //
    //         setData(data);
    //         setLoading(false);
    //     }
    //     getDate();
    // }, []);

    // @ts-ignore
    const fetcher = (...args: any) => fetch(...args).then((res) => res.json());
    const {data, error, isLoading} = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

    console.log(data);

    return (
        <div className={style.dashboard}>Dashboard</div>
    );
}

export default Dashboard;