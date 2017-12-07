/**
 * Created by maciej on 05.12.17.
 */
import React, { Component } from 'react'

class CheckList extends Component {

    renderTasks(tasks) {
        return <div>
            {tasks.map((task) =>
                <li key={task.id}>
                    <input type="checkbox" defaultChecked={task.done} />
                    {task.name}
                    <a href="#" className="checklist__task--remove" />
                </li>)}
        </div>;
    }

    render() {
        return (
            <div className="checklist">
                <ul>{this.renderTasks(this.props.tasks)}</ul>
            </div>
        )
    }
}

export default CheckList;