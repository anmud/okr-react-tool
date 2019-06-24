import React, {Fragment} from 'react'
import Header from './table/Header'
import Body from './table/Body'
import useOkrTable from '../hooks/OkrTableHook';


const OkrTable = () => {

  const {objectives} = useOkrTable()

    return  (
     
       <Fragment>
         <table>
           <Header/>
           <Body/>
         </table>

         <pre>{JSON.stringify(objectives, null, 4)}</pre> 
       </Fragment>
    )
}

export default OkrTable;