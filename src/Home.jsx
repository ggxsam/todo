import { useContext, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { todoContext } from "./context/ToDoProvider";
import { useNavigate } from "react-router-dom";


// import { authContext } from "./context/AuthProvider";
function Home() {
  const Navigate= useNavigate()
  const { state, dispatch } = useContext(todoContext);
  // console.log(state.todos);
 
  //  const {islogin, setIslogin}=useContext(authContext)
  // console.log(state);
  // console.log(islogin);

  const [inputVal, setInputVal] = useState("");

  const addTodo = () => {
    dispatch({ type: "addTodo", payload: inputVal });
    setInputVal("");
  };

  const deleteTodo=(id)=>{
    dispatch({type: "deleteTodo", payload: id});

    // setInputVal("");
  }

 
  return (
    <>
      <div>
        <div className="shadow-2xl border-2 border-black m-auto w-96 mt-10 p-5  shadow-gray-600">
          <input
            onChange={(e) => setInputVal(e.target.value)}
            type="text"
            value={inputVal}
            className=" p-2 rounded-2xl outline-none border-2"
            placeholder="Enter your to do"
            required
          />
          <button
            onClick={() => {
              addTodo();
            }}
            className="bg-gray-500 text-white p-2 ml-3 rounded-2xl"
          >
            Add Todo
          </button>
        </div>

        <div className="flex justify-center">
          <div>
            {state.todos.map((todo, index) => {
              return (
                <div
                  className="text-center mt-5 text-xl w-96 shadow-2xl shadow-gray-600"
                  key={index}
                >
                  <ul>
                    <li className="border-2  flex justify-between shadow-3xl border-gray-100 shadow-gray-900 rounded-2xl p-2 my-2 ">
                      {todo}

                      <div>
            <button onClick={()=>{
             Navigate('/edit', {state: {id:index, data:todo}});
            }}>
            <FaEdit size={32} color="green" />

            </button>
            <button onClick={()=>{
              deleteTodo(index);

            }}>
            <MdDeleteForever size={32} color="red" />


            </button>
          </div>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>

          
        </div>
      </div>
    </>
  );
}

export default Home;