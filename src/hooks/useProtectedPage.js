import React from "react";
import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { gotToLogin } from "../routes/coordinator";

const useProtectedPage = () => {
    const history = useHistory()
    useLayoutEffect(()=> {
        const token = localStorage.getItem('token')
        if(!token) {
            // gotToLogin(history)
        }
    }, [history])
}

export default useProtectedPage