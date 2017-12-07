/**
 * Created by maciej on 07.12.17.
 */
import React, { Component } from 'react'
import KanbanBoard from './KanbanBoard.js'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {cardList: []};
    }
    componentDidMount(){
        this.loadData();
    }
    loadData(){
        this.setState({cardList: [
            {
                id: 1,
                title: 'Read the book',
                description: 'I need to read the entire book',
                status: 'in-progress',
                tasks: [
                    {
                        id: 1,
                        name: 'jurij'
                    }
                ]
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
                status: 'to do',
                tasks: [
                    {
                        id: 1,
                        name: 'sdadf',
                        done: 'false'
                    }
                ]
            }
        ]
        }
        )
    }
    render(){
        return(
            <div>
                <KanbanBoard cards={this.state.cardList} />
            </div>
        )

    }
}

export default App;