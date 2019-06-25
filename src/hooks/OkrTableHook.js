import {useContext} from 'react'
import {OkrTableContext} from '../context/OkrTableContext'

const useOkrTable = () => {

    const [objectives, setObjectives] = useContext(OkrTableContext)
    

    const setRating = (name, value, id, oId) => {

    const newResults = objectives.filter(objective => objective.id === oId ).map(objective => objective.keyResults)[0].map(result => result.id === id ? ({...result, [name]: value}) : result)

    const newObjectives = objectives.map(objective => objective.id === oId ? ({...objective, keyResults: [...newResults]}) : objective)

    setObjectives(newObjectives)

}





    return {
        objectives,
        setObjectives,
        setRating,

        
    }
}

export default useOkrTable;