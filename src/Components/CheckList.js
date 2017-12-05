/**
 * Created by maciej on 05.12.17.
 */
import React, { Component } from 'react'

class CheckList extends Component {
    render(){
        let tasks = this.props.tasks.map((task) => {
            return <li className="checklist__task">
                <input type="checkbox"/>
                {task.name}
                <a href="#" className="checklist__task--remove" />
            </li>
        });
        return(
            <div className="checklist">
                <ul>{tasks}</ul>
            </div>
        )
    }
}

export default CheckList;