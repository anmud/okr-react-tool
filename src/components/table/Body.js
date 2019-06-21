import React, {Fragment} from 'react'
import useOkrTable from '../../hooks/OkrTableHook'


const Body = () => {

    const {objectives} = useOkrTable();

    
    
    return  (
    
<Fragment>

{objectives.length > 0  ?
       ( objectives.map(objective => ( 
       <Fragment key={objective.id}>
           <tbody>
          
            <tr key={objective.id}>
           <td className="w">{objective.name}</td>
           <td>{objective.progress}</td>
           <td></td>
           </tr>
          
          {objective.keyResults.map(result => (
              <tr key={result.resultId}>
                  <td>{result.name}</td>
                  <td>{result.progress}</td>
                  <td>{result.rating}</td>
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