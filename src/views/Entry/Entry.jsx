import React, { useState } from 'react'

import './entry.style.css'

import { Jumbotron } from 'react-bootstrap'
import LoginForm from '../../components/LoginForm/LoginForm'

import Swal from 'sweetalert2'
import PasswordReset from '../../components/PasswordReset/PasswordReset'

export const Entry = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formLoad, setFormLoad] = useState("login");

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break
            case 'password':
                setPassword(value);
                break
            default:
                break
        }

        console.log(name, value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return Swal.fire({
                icon: 'error',
                title: 'ERROR...',
                text: 'Debes completar todos los campos!',
                timer: 2000,
            })
            //CALL API TO SUBMIT THE FORM
        }
        console.log(email, password);
    }

    const handleOnResetSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            return Swal.fire({
                icon: 'error',
                title: 'ERROR...',
                text: 'Debes completar todos los campos!',
            })
            //CALL API TO SUBMIT THE FORM

        }
        console.log(email, password);
    }


    const formSwitcher = (formType) => {
        setFormLoad(formType);
    }

    return (
        <div className="entry-page bg-info">
            <Jumbotron className="jumbotron">
                {formLoad === "login" && <LoginForm handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} formSwitcher={formSwitcher} email={email} password={password}></LoginForm>}
                {formLoad === "reset" && <PasswordReset handleOnChange={handleOnChange} handleOnResetSubmit={handleOnResetSubmit} formSwitcher={formSwitcher} email={email}></PasswordReset>}
            </Jumbotron>
        </div>
    )
}
