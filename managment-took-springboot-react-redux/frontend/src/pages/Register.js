import React from 'react'
import RegisterForm from '../components/RegisterForm'

function Register() {
    return (
        <>
        <h1 className='text-5xl p-6 font-light flex justify-center'>Sign Up</h1>
        <span className='text-sm  font-light flex justify-center'>Create your Account</span>
            <RegisterForm/>
        </>
    )
}

export default Register
