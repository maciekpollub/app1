/**
 * Created by maciej on 05.12.17.
 */
import React, { Component } from 'react';
import List from './List.js'

class KanbanBoard extends Component {

    render(){
        return(
            <div className="app">

                <List id="todo" title="To do:" cards={
                    this.props.cards.filter((card) => card.status = 'to do')
                } />

                <List id="in-progress" title="In-progress:" cards={
                    this.props.cards.filter((card) => card.status = 'in-progress')
                } />

                <List id="done" title="Done" cards={
                    this.props.cards.filter((card) => card.status = 'done')
                } />

            </div>

        );
    }
}

export default KanbanBoard;

