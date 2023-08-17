import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

    const navigate = useNavigate();

    const addProjectBtn = ()=>{
        navigate("/projectform")
    }
    return (
        <div>
        <div className='w-2/3 mx-auto'>
            <h1 className='font-light text-5xl m-4  flex justify-center'>Projects</h1>
            <button className='bg-sky-500 mt-8 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded' onClick={addProjectBtn}>Create a project</button>
            <hr className='mt-3'></hr>
        </div>
            
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
        </div>
    )
}

export default Dashboard
