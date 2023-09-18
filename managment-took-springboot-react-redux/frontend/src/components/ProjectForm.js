import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { projectAdded } from '../Slices/projectsSlice';
import { useNavigate } from 'react-router-dom';

function ProjectForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [newProject, setNewProjet] = useState({projectName:"", projectIdentifier:"", description:"", start_date:"", end_date:""});

    const handleChanges = (e)=>{
        const {name, value} = e.target
        setNewProjet(prev=> ({...prev,[name]: value}));
    }
    const onsubmit = (e)=>{
        e.preventDefault();
        dispatch(projectAdded(newProject));
        navigate("/")
    }
    return (
        <form className='bg-white  rounded px-8 pt-6 pb-8 mb-4' onSubmit={onsubmit}>
            <input type="text" placeholder='Project Name' name="projectName" value={newProject.projectName} onChange={handleChanges} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"   />
            <input type="text" placeholder='Unique Project ID' name="projectIdentifier" value={newProject.projectIdentifier} onChange={handleChanges} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" />
            <textarea  placeholder='Project Description' name="description" value={newProject.description} onChange={handleChanges} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" ></textarea>
            <label className="block text-gray-700 text-sm font-bold mb-1 mt-4" htmlFor="startDate">Start Date</label>
            <input type="date"  name="start_date" value={newProject.start_date} onChange={handleChanges} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id='startDate' />
            <label className="block text-gray-700 text-sm font-bold mb-1 mt-4" htmlFor="endDate">Estimated End Date</label>
            <input type="date"  name="end_date" value={newProject.end_date} onChange={handleChanges} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="endDate" />
            <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline mt-6 focus:outline-none w-full text-white font-semibold py-1 px-4 rounded" type="submit">Submit</button>
        </form>
    )
}



export default ProjectForm;
