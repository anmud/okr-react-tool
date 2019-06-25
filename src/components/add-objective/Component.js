import React, {useState} from 'react';
import useOkrTable from '../../hooks/OkrTableHook'


function AddObjective() {

    const {objectives, setObjectives} = useOkrTable();

  const [newObjective, setNewObjective] = useState(
        {
        id: '',
        name: '',
        progress: 0,
        keyResults: [],
        },
        )

const handleInputChange = (event) => {
  const {name , value} = event.target
  setNewObjective({...newObjective, [name]: value})
}

const addObjective = newObjective => {
    newObjective.id = objectives.length + 1
    setObjectives([...objectives, newObjective])
}


  return (
    <div className="App">
    <h1>Add New Objective</h1>

   <form
         onSubmit={event => {
           event.preventDefault();

           ( ! newObjective.name)
           ? console.log("enter smth in the input")
           : addObjective(newObjective)
           setNewObjective(newObjective)
        
         }}
        >
  <label>Objective</label>
  <input type="text" name="name" value={newObjective.name} onChange={handleInputChange} />
  <br/>
  
<br/>
  <button type="submit"> Add </button>
 
</form>



 
    </div>
  );
}

export default AddObjective;
