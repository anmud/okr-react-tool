import React from 'react'
import useOkrTable from '../hooks/OkrTableHook'


const OkrTable = () => {


    const {objectives} = useOkrTable();



    return  (
     
        <div>
        
        <table>
    <thead>
      <tr>
        <th>Objectives/Key Results</th>
        <th>Progress</th>
        <th>Week</th>
      </tr>
    </thead>
    <tbody>
        {objectives.length > 0 ? 
        (objectives.map(objective => ( 
      <tr key={objective.id}>
        <td>{objective.name}</td>
        <td>{objective.progress}</td>
        <td></td>
        
      </tr>
        ))
        ) : (
        <tr>
        <td colSpan={3}>No books</td>
      </tr>
    )}
    </tbody>
  </table>


   
        </div>

 


    )
}

export default OkrTable;