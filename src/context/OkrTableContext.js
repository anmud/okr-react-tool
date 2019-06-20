import React, {createContext, useState} from 'react'


const OkrTableContext = createContext()

const OkrTableProvider = (props) => {

    const [objectives, setObjectives] = useState([
        {id: 1,
        name: 'AWS Big Data Certificate',
        progress: 0.00,
        keyResults: [
            {
                objectiveId: 1,
                resultId: 1,
                name: 'Finish 1 udemy course',
                rating: 0.33,
                progress: 0.54
            },
            {
                objectiveId: 1,
                resultId: 2,
                name: 'Go through 3 exam iterations',
                rating: 0.15,
                progress: 0.54
            },
            {
                objectiveId: 1,
                resultId: 3,
                name: 'Schedule and attend the exam',
                rating: 0.00,
                progress: 0.54
            }
        ]},
        {id: 2,
            name: 'Architecture drawing with focus on cost leadership',
            progress: 0.00,
            keyResults: [
                {
                    objectiveId: 2,
                    resultId: 1,
                    name: 'Create 3 different architectures with different components',
                    rating: 0.33,
                    progress: 0.54
                },
                {
                    objectiveId: 2,
                    resultId: 2,
                    name: 'Make 1 cost analysis with 3 different data plans',
                    rating: 0.1,
                    progress: 0.54
                },
                {
                    objectiveId: 2,
                    resultId: 3,
                    name: 'Make 1 final decision for the cheapest architecture and draw it',
                    rating: 0.4,
                    progress: 0.54
                }
            ]}
    ])

    


return (
    <OkrTableContext.Provider value={[objectives, setObjectives]}>
        {props.children}
    </OkrTableContext.Provider>
)

}

export {OkrTableContext, OkrTableProvider}