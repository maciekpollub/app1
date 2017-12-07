/**
 * Created by maciej on 05.12.17.
 */
import React, { Component } from 'react'

class CheckList extends Component {
    render(){
        let tasks = this.props.tasks.map((task) => {
           return (
            <li key={task.id}>
                /*<input type="checkbox" />*/
                {task.name}
                /*<a href="#" />*/
            </li>
           )
        });
        return(
            <div>
                <ul>{tasks}</ul>
            </div>
        )
    }
}

export default CheckList;