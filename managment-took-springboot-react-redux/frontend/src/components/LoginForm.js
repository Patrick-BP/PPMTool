import React, { useState } from 'react'

function LoginForm() {
    const [credentiels, setCredentiels] = useState({username:"", password:""});

    const handleChanges = (e)=>{
        const {name, value} = e.target
        setCredentiels(prev=> ({...prev,[name]: value}));
    }
    const onsubmit = (e)=>{
        e.preventDefault();
        console.log(credentiels);
    }
    return (
        <form className='bg-white  rounded px-8 pt-6 pb-8 mb-4 w-1/2 mx-auto' onSubmit={onsubmit}>
            <input type="text" placeholder='Username / Email Address' name="username" value={credentiels.username} onChange={handleChanges} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"   />
            <input type="password" placeholder='Password' name="password" value={credentiels.password} onChange={handleChanges} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" />
           <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline mt-6 focus:outline-none w-full text-white font-semibold py-1 px-4 rounded" type="submit">Submit</button>
        </form>
    )
}

export default LoginForm
