// NewTaskForm.js

import React, { Component } from 'react';

class NewTaskForm extends Component {
    render() {
        return (
            
                <form className='NewTask' onSubmit={this.props.handleSubmit}>
                    <h1>{this.props.editingTaskIndex === -1 ? 'ADD A NEW TASK' : 'EDIT A TASK'}</h1>
                    <input
                        type="text"
                        name="newTaskTitle"
                        value={this.props.newTaskTitle}
                        onChange={this.props.handleChange}
                        placeholder="Enter a new task"
                    />
                    <button type="submit">
                        {this.props.editingTaskIndex === -1 ? 'Add Task' : 'Edit Task'}
                    </button>
                </form>
            
        );
    }
}

export default NewTaskForm;
