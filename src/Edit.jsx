import React, { useContext, useState } from 'react'
import { todoContext } from './context/ToDoProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {
  const navigate= useNavigate()
   const { state, dispatch } = useContext(todoContext);

  const location = useLocation()


  // console.log(location.state.data)
  // console.log(location.state.id)
  const [input, setInput]= useState(location.state.data)

  const editTodo =()=>{
    dispatch({type: "editTodo", payload: {id: location.state.id, data:input}})
    navigate("/")
  }
  return (
    <div>
      <div className="shadow-2xl border-2 border-gray-600 m-auto mt-10 w-96 p-5  shadow-gray-600">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            className=" p-2 rounded-2xl outline-none border-2"
            placeholder="Enter your to do"
            required
          />
          <button
            onClick={() => {
              editTodo();
            }}
            className="bg-black text-white p-2 ml-3 rounded-2xl"
          >
            Update Todo
          </button>
        </div>
    </div>
  )
}

export default Edit
