import {useContext} from 'react'
import {OkrTableContext} from '../context/OkrTableContext'

const useOkrTable = () => {

    const [objectives, setObjectives] = useContext(OkrTableContext)
    





    return {
        objectives,
        
    }
}

export default useOkrTable;