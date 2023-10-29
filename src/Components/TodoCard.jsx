import React, { useEffect, useState } from 'react'

function TodoCard() {
    const [todo, setTodo] = useState([]);
    const [newTask, SetNewTask] = useState('');
    // console.log(newTask)

    const addTask = (e) => {
        e.preventDefault()
        setTodo([...todo, newTask])
        console.log(todo)
    }
    const deleteTask=(index)=>{
        const list=[...todo]
        if (index > -1) { // only splice array when item is found
            list.splice(index, 1); // 2nd parameter means remove one item only
            setTodo(list)
          }
          console.log(todo)
    }
    useEffect(()=>{

    },[todo])

    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen w-screen">
                <div className='flex items-center justify-center h-screen w-96'>
                    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form className="space-y-6" action="#">
                            <h5 className="text-xl font-medium text-gray-900 dark:text-white">To do list</h5>
                            <div>
                                <label for="todo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your To-do list</label>
                                <input value={newTask || ""} onChange={e => SetNewTask(e.target.value)} type="text" name="todo" id="todo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Add to do" required />
                            </div>

                            <button type="submit" onClick={(e) => addTask(e)} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                        </form>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center w-2/3 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
                    <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">To do list:</h2>
                    <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                        {todo?.length > 0 ? todo?.map((item,index) => (
                            <li class="flex items-center">
                                <svg class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                {item}
                               <button onClick={()=>deleteTask(index)}> <i class="fa fa-trash ms-5" aria-hidden="true"></i></button>
                            </li>
                        ))
                            : <p>
                                Nothing to display
                            </p>
                        }
                    </ul>
                </div>
            </div>

        </>
    )
}

export default TodoCard