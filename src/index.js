/**
 * Created by maciej on 05.12.17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import KanbanBoard from './Components/App.js'

let cardList = [
    {
        id: 1,
        title: 'Read the book',
        description: 'I need to read the entire book',
        status: 'in-progress',
        tasks: []

    },
    {
        id: 2,
        title: 'write a bit of code...',
        description: 'I will write down the code from exercises in the book',
        status: 'done',
        tasks: [
            {
                id: 1,
                name: 'Example of contact list',
                done: 'true'
            },
            {
                id: 2,
                name: 'Kanban example',
                done: 'false'
            },
            {
                id: 3,
                name: 'My experiments',
                done: 'false'
            }
        ]
    },
    {
        id: 3,
        title: 'children',
        description: 'I will pick up children from school and daycare',
        status: 'to do'
    }
];




ReactDOM.render(<KanbanBoard cards={cardList} />, document.getElementById('root'));