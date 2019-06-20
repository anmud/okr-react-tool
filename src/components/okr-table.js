import React, {Fragment} from 'react'
import Header from './table/Header'
import Body from './table/Body'


const OkrTable = () => {

    return  (
     
       <Fragment>
         <table>
           <Header/>
           <Body/>
         </table>
       </Fragment>
    )
}

export default OkrTable;