import React, { useState } from 'react'

function RegisterForm() {
    const [newuser, setNewUser] = useState({fullname:"", username:"", password:""});
    const [comfPassword, setComfPassword ] = useState("")

    const handleChanges = (e)=>{
        const {name, value} = e.target
        setNewUser(prev=> ({...prev,[name]: value}));
    }

    const handleComfirPass = (e)=>{
        const {value} = e.target
        setComfPassword(value);
    }

    const onsubmit = (e)=>{
        e.preventDefault();
        console.log(newuser);
    }
    return (
        <form className='bg-white  rounded px-8 pt-6 pb-8 mb-4 w-1/2 mx-auto' onSubmit={onsubmit}>
            <input type="text" placeholder='Full Name' name="fullname" value={newuser.fullname} onChange={handleChanges} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"   />
            <input type="text" placeholder='Username / Email Address' name="username" value={newuser.username} onChange={handleChanges} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"   />
            <input type="password" placeholder='Password' name="password" value={newuser.password} onChange={handleChanges} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" />
            <input type="password" placeholder='Confirm Password' name="password" value={comfPassword} onChange={handleComfirPass} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" />
           <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline mt-6 focus:outline-none w-full text-white font-semibold py-1 px-4 rounded" type="submit">Submit</button>
        </form>
    )
}

export default RegisterForm
