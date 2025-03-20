// import React, { useContext } from "react";
// import { todoContext } from "./context/ToDoProvider";

// const App = () => {
//   const {state, dispatch } = useContext(todoContext);
//   console.log(state);
//   return (
//     <div className="border-2 bg-gray-500">
//       {/* <h1>Title- {title}</h1> */}
// App
     
//       <button className="bg-red-500 p-3" onClick={()=>{
//         dispatch(900)
//       }}>Click</button>
//     </div>
//   );
// };

// export default App;
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Edit from './Edit'
import Home from './Home'

const App = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />


      </Routes>
    </div>
  )
}

export default App

