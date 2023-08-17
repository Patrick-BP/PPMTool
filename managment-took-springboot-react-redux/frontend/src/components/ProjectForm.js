import React, { useState } from 'react'

function ProjectForm() {
    const [newProject, setNewProjet] = useState({name:"", projectId:"", description:"", startDate:"", endDate:""});

    const handleChanges = (e)=>{
        const {name, value} = e.target
        setNewProjet(prev=> ({...prev,[name]: value}));
    }
    const onsubmit = (e)=>{
        e.preventDefault();
        console.log(newProject);
    }
    return (
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={onsubmit}>
            <input type="text" placeholder='Project Name' name="name" value={newProject.name} onChange={handleChanges} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"   />
            <input type="text" placeholder='Unique Project ID' name="projectId" value={newProject.projectId} onChange={handleChanges} className="shadow appearance-none border bg-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"  disabled/>
            <textarea  placeholder='Project Description' name="description" value={newProject.description} onChange={handleChanges} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" ></textarea>
            <label className="block text-gray-700 text-sm font-bold mb-1 mt-4" htmlFor="startDate">Start Date</label>
            <input type="date"  name="startDate" value={newProject.startDate} onChange={handleChanges} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id='startDate' />
            <label className="block text-gray-700 text-sm font-bold mb-1 mt-4" htmlFor="endDate">Estimated End Date</label>
            <input type="date"  name="endDate" value={newProject.endDate} onChange={handleChanges} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="endDate" />
            <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline mt-6 focus:outline-none w-full text-white font-semibold py-1 px-4 rounded" type="submit">Submit</button>
        </form>
    )
}

export default ProjectForm
