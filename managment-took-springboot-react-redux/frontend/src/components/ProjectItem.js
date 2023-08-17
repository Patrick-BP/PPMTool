import React from 'react'

function ProjectItem() {
    return (
        <div className='w-2/3 mx-auto flex border  bg-sky-50 rounded-md mt-4 justify-around'>
            <div className='mt-3 text-medium font-semibold'>React</div>
            <div className='p-3'>
                <h1 className='text-2xl font-bold'>Spring / React project</h1>
                <span className='text-sm'>project to create a Kanban Board with spring Boot and React</span>
            </div>
            <div className='w-1/3 p-4 '>
                <div className='flex border border-gray-400 cursor-pointer bg-white rounded-sm p-2 w-full text-blue-600 text-sm mb-1 italic hover:bg-gray-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>
                    Project Board</div>
                    <div className='flex border border-gray-400 cursor-pointer bg-white rounded-sm p-2 w-full text-sky-600 text-sm mb-1 italic hover:bg-gray-300'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    update Project Info</div>
                    <div className='flex  border border-gray-400 cursor-pointer bg-white rounded-sm p-2 w-full text-red-600 text-sm mb-1 italic hover:bg-red-300'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Delete project</div>
            </div>
        </div>
    )
}

export default ProjectItem
