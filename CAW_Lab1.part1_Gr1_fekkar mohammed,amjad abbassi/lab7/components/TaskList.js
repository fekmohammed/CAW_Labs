    // TaskList.js
    import React, { Component } from 'react';
    import NewTaskForm from '../components/newTaskForm';

    class TaskList extends Component {
    state = {
        tasks: [
        { title: "hire an assassin", subtasks: [], completed: false },
        { title: "start a company with hitman", subtasks: [], completed: false },
        { title: "buy a machine gun", subtasks: [], completed: false },
        ],
        newTaskTitle: '',
        newSubTask: '',
        editingTaskIndex: -1,
        addingSubTaskIndex: -1,
        submitClicked: false,
    };

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.editingTaskIndex === -1) {
        // Adding a new task
        this.setState((prevState) => ({
            tasks: [
            ...prevState.tasks,
            { title: prevState.newTaskTitle, subtasks: [], completed: false },
            ],
            newTaskTitle: '',
        }));
        } else {
        // Editing an existing task
        const updatedTasks = [...this.state.tasks];
        updatedTasks[this.state.editingTaskIndex].title = this.state.newTaskTitle;
        this.setState({
            tasks: updatedTasks,
            newTaskTitle: '',
            editingTaskIndex: -1,
        });
        }
    };

    handleAddSubTask = (taskIndex) => {
        this.setState({
        addingSubTaskIndex: taskIndex,
        });
    };

    handleSubTaskInputChange = (e) => {
        this.setState({
        newSubTask: e.target.value,
        });
    };

    handleSubTaskSubmit = () => {
        const { addingSubTaskIndex, newSubTask } = this.state;

        if (addingSubTaskIndex !== -1 && newSubTask.trim() !== '') {
        const taskWithSubTask = { ...this.state.tasks[addingSubTaskIndex] };
        taskWithSubTask.subtasks.push(newSubTask);

        const updatedTasks = [...this.state.tasks];
        updatedTasks[addingSubTaskIndex] = taskWithSubTask;

        this.setState({
            tasks: updatedTasks,
            newSubTask: '',
            addingSubTaskIndex: -1,
        });
        }
    };

    handleEditTask = (taskIndex) => {
        const taskToEdit = this.state.tasks[taskIndex];
        this.setState({
        newTaskTitle: taskToEdit.title,
        editingTaskIndex: taskIndex,
        });
    };

    handleDeleteTask = (taskIndex) => {
        const updatedTasks = [...this.state.tasks];
        updatedTasks.splice(taskIndex, 1);

        this.setState({
        tasks: updatedTasks,
        newTaskTitle: '',
        editingTaskIndex: -1,
        });
    };

    handleToggleTask = (taskIndex) => {
        const { tasks, submitClicked } = this.state;
    
        if (!submitClicked) {
        const updatedTasks = [...tasks];
        updatedTasks[taskIndex] = {
            ...updatedTasks[taskIndex],
            completed: !updatedTasks[taskIndex].completed,
        };
    
        this.setState({
            tasks: updatedTasks,
        });
        }
    };
    
    

    handleSubmitClick = () => {
        this.setState({
        submitClicked: true,
        });
    };

        render() {
            return (
            <div className='main'>
                <NewTaskForm
                className='NewTask'
                handleSubmit={this.handleSubmit}
                newTaskTitle={this.state.newTaskTitle}
                handleChange={this.handleChange}
                editingTaskIndex={this.state.editingTaskIndex}
                />
        
                {this.state.tasks.length > 0 && (
                <div className='task_list'>
                    <h1>Task List:</h1>
                    <ul>
                    {this.state.tasks.map((task, taskIndex) => (
                        <div className={`task ${task.completed ? 'completed' : ''}`} key={taskIndex}>
                    
                        <i
                            className={`far fa-circle${task.completed || this.state.submitClicked ? '-check text-success' : ''}`}
                            onClick={() => this.handleToggleTask(taskIndex)}
                            style={{ cursor: 'pointer' }}
                        />
                        
                        <span
                            style={{
                            textDecoration: task.completed || this.state.submitClicked ? 'line-through' : 'none',
                            marginLeft: '8px', // Add margin for spacing
                            }}
                        >
                            {task.title}
                        
                        <div className='edit'>
                            <i className="fas fa-plus" onClick={() => this.handleAddSubTask(taskIndex)}></i>
                            <i className="fas fa-pen" onClick={() => this.handleEditTask(taskIndex)}></i>
                            <i className="fas fa-trash-can" onClick={() => this.handleDeleteTask(taskIndex)}></i>
                        </div>
                        </span>
                        {task.subtasks.length > 0 && (
                            <ul>
                                {task.subtasks.map((subtask, subtaskIndex) => (
                                <li key={subtaskIndex} className="subtask-list-item">{subtask}</li>
                                ))}
                            </ul>
                        )}
                        {this.state.addingSubTaskIndex === taskIndex && (
                            <div className='subtask'>
                            <input
                                type="text"
                                value={this.state.newSubTask}
                                onChange={this.handleSubTaskInputChange}
                                placeholder="Enter a subtask"
                            />
                            <button onClick={this.handleSubTaskSubmit}>Add Subtask</button>
                            </div>
                        )}
                        
                        </div>
                    ))}
                    </ul>
                </div>
                )}  
                {/* <button onClick={this.handleSubmitClick}>Submit</button> */}
            </div>
            );
        }
        
    }

    export default TaskList;

