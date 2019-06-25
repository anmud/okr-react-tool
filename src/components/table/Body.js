import React, {Fragment} from 'react'
import useOkrTable from '../../hooks/OkrTableHook'


const Body = () => {

    const {objectives, setRating} = useOkrTable();

    const handleChange = ({event, id, oId}) => {
        const { name, value} = event.target
       return setRating(name, value, id, oId)
      }
    
    return  (
    
        <Fragment>

{objectives.length > 0  ?
       ( objectives.map(objective => ( 
       <Fragment key={objective.id}>
           <tbody>
          
            <tr key={objective.id}>
           <td className="w">{objective.name} <button>Add result</button></td>
           <td>{objective.progress}</td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           <td></td>
           </tr>
          
{objective.keyResults.map(result => (
              <tr key={result.id}>
              <td>{result.name}</td>
              <td>{result.progress}</td>
              <td ><input type="text" name='rating' value={result.rating} onChange={(event) => handleChange({id: result.id, oId: objective.id, event: event})}/></td>
              <td ><input type="text" /></td>
              <td ><input type="text" /></td>
              <td ><input type="text" /></td>
              <td ><input type="text" /></td>
              <td ><input type="text" /></td>
              <td ><input type="text" /></td>
              </tr>
          ))}
           
        </tbody>
          
       </Fragment> 
           ))
       ) : (
           <p>no objectives</p>
       )
    } 


</Fragment>


    

  
    )
}

export default Body;