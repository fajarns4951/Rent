import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react"

const InvoicePage = () => {
    useEffect(() => {
        getOrder();
    }, []);

    const getOrder = async () => {
        try {
            const response = await axios.get("http://localhost:3000/buyers");
            console.log(response.data);
        } catch (err) {
            console.log("wrong");
        }
    }

    return (
        <div>
            
        </div>
    )
}

export default InvoicePage