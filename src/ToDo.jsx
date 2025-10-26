import React, { useState } from 'react';
const ToDo = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([
        { task: 'go to gym', completed: false },
        { task: 'go to gym', completed: false },
    ])
    const [editIndex, setEditIndex] = useState("")
    const [editTask, setEditTask] = useState("")
    const addTask = () => {
        setTasks([...tasks, { task: task, completed: false }])
        setTask("")
    }
    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i != index)
        setTasks(newTasks);
    }
    const clearAll = () => {
        setTasks([])
    }
    const clearCompleted = () => {
        const newTasks = tasks.filter((ele) => ele.completed === false)
        setTasks(newTasks)
    }
    const editingTaks = (index) => {
        if (editIndex === index) {
            tasks[editIndex].task = editTask
            setEditTask("")
            setEditIndex("")
        }
        else {
            setEditTask(tasks[index].task)
            setEditIndex(index)
        }
    }
    const toggleTask = (index) => {
        setTasks(
            tasks.map((ele, i) =>
                i === index ? { ...ele, completed: !ele.completed } : ele
            )
        );
    };

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
                    <input
                        value={task}
                        onChange={(e) => { setTask(e.target.value); }}
                        className='px-5 py-3 rounded-lg bg-[#222] outline-none w-full'
                        type='text'
                        placeholder='Enter your task ....'>      
                        </input>
                    <button onClick={addTask} className='px-5 py-3 bg-green-400 rounded-lg text-[#222]'>Add</button>
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
                        {tasks.length} Tasks
                    </div>
                </div>


                {/* ----------------*/}
                {/*Container for all the tasks */}
                <div className='flex flex-col gap-3 h-[250px] overflow-y-scroll webkit-scrollbar '>
                    {
                        tasks.map((ele, index) => (
                            <div className='flex justify-between bg-[#222] px-4 py-3 rounded-lg gap-5'>
                                {
                                    editIndex === index ? (
                                        <input
                                            autoFocus={true}
                                            value={editTask}
                                            onChange={(e) => setEditTask(e.target.value)}
                                            onKeyDown={(e) => { e.key == 'Enter' && editingTaks(index) }}
                                            className='w-full bg-transparent text-xl border-b-2 border-green-400 outline-none focus:border-green-300 transition-all' />

                                    ) :
                                        <div className='flex gap-2'>
                                            <input
                                                className='accent-green-400'
                                                type='checkbox'
                                                id={index}
                                                checked={ele.completed}
                                                onChange={() => toggleTask(index)}
                                            />
                                            <label for={index}
                                                className={`text-xl cursor-pointer select-none ${ele.completed && 'line-through'}`}
                                            >
                                                {ele.task}
                                            </label>
                                        </div>
                                }
                                <div className='flex gap-1'>
                                    <span
                                        onClick={() => deleteTask(index)}
                                        className='h-5 w-5 bg-red-400 cursor-pointer rounded-full ' />
                                    <span
                                        onClick={() => editingTaks(index)}
                                        className={`h-5 w-5 cursor-pointer rounded-full ${editIndex === index ? 'bg-green-400' : 'bg-yellow-300'}`} />
                                </div>
                            </div>
                        ))

                    }
                </div>
                {/*-----------------------*/}

                {/*Footer*/}
                <div className='flex gap-2'>
                    <button onClick={clearCompleted} className='px-3 py-2 rounded-lg bg-red-400 cursor-pointer'>Clear Completed</button>
                    <button onClick={clearAll} className='px-3 py-2 rounded-lg bg-[#222] cursor-pointer'>Clear All</button>
                </div>

                {/* ---------*/}

            </div>
        </div>
    );
}
export default ToDo;