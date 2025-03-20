// import { createContext, useReducer, useState } from "react";
// export const todoContext= createContext()

// const initialState={
//   todos:[],
// }

// const todoReducer=(state, action)=>{
//   console.log(action)
//   console.log(state)
// }

// export const ToDoProvider= ({children})=>{
//   const [ state, dispatch]= useReducer(todoReducer, initialState)

//   return <todoContext.Provider value ={{state, dispatch}}>
//     {children}
//   </todoContext.Provider>;
// }
import { createContext, useReducer, useState } from "react";
import { Bounce, Slide, toast } from "react-toastify";

const initialState = {
  todos: [],
};

const todoReducer = (state, action) => {
  //action={type:"add",payload:e.target.value}
  switch (action.type) {
    case "addTodo": {
      const updateTodo = [...state.todos, action.payload];
      toast.success("Todo is added!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      return {
        todos: updateTodo,
      };

      return;
    }
    case "deleteTodo": {
    //   console.log(action.payload);

      toast.success("Todo is deleted!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });

      const filteredTodos = state.todos.filter((item, index) => {
        return index !== action.payload;
      });

      // alert("Item deleted:")
      return {
        todos: filteredTodos,
      };
    }
    case "editTodo": {
    //   console.log(action.payload.id);
    //   console.log(action.payload.data);
      const updatedTodo = state.todos.map((item, index) => {
        return index === action.payload.id ? action.payload.data : item;
      });
      toast.success("Todo is updated!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      return {
        todos: updatedTodo,
      };
    }
    default: {
      return state;
    }
  }
};

export const todoContext = createContext();

export const ToDoProvider = ({ children }) => {
  //    const [title,setTitle] = useState("mern")
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <todoContext.Provider value={{ state, dispatch }}>
      {children}
    </todoContext.Provider>
  );
};
