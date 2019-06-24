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
                id: 1,
                name: 'Finish 1 udemy course',
                rating: '',
                calendarWeek: '20',
                progress: 0.54
            },
            {
                objectiveId: 1,
                id: 2,
                name: 'Go through 3 exam iterations',
                rating: '',
                calendarWeek: '20',
                progress: 0.54
            },
            {
                objectiveId: 1,
                id: 3,
                name: 'Schedule and attend the exam',
                rating: '',
                calendarWeek: '20',
                progress: 0.54
            }
        ]},
        {id: 2,
            name: 'Architecture drawing with focus on cost leadership',
            progress: 0.00,
            keyResults: [
                {
                    objectiveId: 2,
                    id: 1,
                    name: 'Create 3 different architectures with different components',
                    rating: '',
                    calendarWeek: '20',
                    progress: 0.54
                },
                {
                    objectiveId: 2,
                    id: 2,
                    name: 'Make 1 cost analysis with 3 different data plans',
                    rating: '',
                    calendarWeek: '20',
                    progress: 0.54
                },
                {
                    objectiveId: 2,
                    id: 3,
                    name: 'Make 1 final decision for the cheapest architecture and draw it',
                    rating: '',
                    calendarWeek: '20',
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