import React, { useState } from 'react';
const ToDo = () => {
    const [tasks, setTasks] = useState([
        { take: 'go to gym', completed: false },
        { take: 'go to gym', completed: false },
        { take: 'go to gym', completed: false },
        { take: 'go to gym', completed: false },
        { take: 'go to gym', completed: false },
        { take: 'go to gym', completed: false },
        { take: 'go to gym', completed: false }])

    return (
        <div className='h-screen bg-black text-white pt-10'>
            <div className='bg-[#111] rounded-2xl p-5 max-w-[600px] m-auto flex flex-col gap-5'>

                {/* lOGO */}
                <div className='text-green-400 text-3xl font-semibold'>
                    To Do App
                </div>
                {/* ----------------*/}

                {/*Input and Butoon*/}
                <div className="flex gap-2">
                    <input className='px-5 py-3 rounded-lg bg-[#222] outline-none w-full'
                        type='text' placeholder='Enter your task ....'></input>
                    <button className='px-5 py-3 bg-green-400 rounded-lg text-[#222]'>Add</button>
                </div>
                {/*------------------ */}


                {/*Filter Section*/}
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <span className='px-3 py-2 rounded-sm bg-green-400 text-[#222]'>All</span>
                        <span className='px-3 py-2 rounded-sm bg-[#222]'>Active</span>
                        <span className='px-3 py-2 rounded-sm bg-[#222]'>Completed</span>
                    </div>
                    <div className='text-xl'>
                        3 Tasks
                    </div>
                </div>


                {/* ----------------*/}
                {/*Container for all the tasks */}
                <div className='flex flex-col gap-3 h-[250px] overflow-y-scroll webkit-scrollbar '>
                    {
                        tasks.map((ele, index) => (
                            <div className='flex justify-between bg-[#222] px-4 py-3 rounded-lg'>
                                <div className='flex gap-2'>
                                    <input className='accent-green-400' type='checkbox' id={index} />
                                    <label for={index} className='text-xl cursor-pointer select-none'>{ele.take}</label>
                                </div>
                                <div className='flex gap-1'>
                                    <span className='h-5 w-5 bg-yellow-400 cursor-pointer rounded-full ' />
                                    <span className='h-5 w-5 bg-red-400 cursor-pointer rounded-full ' />
                                </div>
                            </div>
                        ))

                    }
                </div>
                {/*-----------------------*/}

                {/*Footer*/}
               <div className='flex gap-2'>
               <button className='px-3 py-2 rounded-lg bg-red-400 '>Clear Completed</button>
               <button className = 'px-3 py-2 rounded-lg bg-[#222]'>Clear All</button>
               </div>
           
                {/* ---------*/}

            </div>
        </div>
    );
}
export default ToDo;