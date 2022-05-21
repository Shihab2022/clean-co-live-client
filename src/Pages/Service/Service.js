import axios from 'axios';
import React, { useEffect, useState } from 'react';
import fetcher from '../../api';

const Service = () => {
    const [service,setService]=useState([])

    useEffect(()=>{
        fetcher.get('/services').then(res =>setService(res.data))
    },[])
    console.log(service)
    return (
        <div>
            <h1>this is service page </h1>
            <h1>this is service page </h1>
            <h1>this is service page </h1>
            <h1>this is service page </h1>
            <h1>this is service page </h1>
            <h1>this is service page </h1>
            <h1>this is service page </h1>
            <h1>this is service page </h1>
            <h1>this is service page </h1>
            <h1>this is service page </h1>
            <h1>this is service page </h1>
        </div>
    );
};

export default Service;