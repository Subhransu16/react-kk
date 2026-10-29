import React from 'react'

function app(){
  const[task,setTask] = useState("")
  const[todos,setTodos] = useState([])
  const[editId,setEditId] = useState(null)

 function handleSubmit ()
        if(task.trim() === ""){
          return;
        }if(editId !== null ){

        }

  return (
    <div>App</div>
  )
}

export default App