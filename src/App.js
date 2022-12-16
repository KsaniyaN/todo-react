import React, {useState} from "react";
import {nanoid} from "nanoid";
import ToDo from "./components/ToDo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {

    const [tasks, setTasks] = useState(props.tasks);
    const [filter, setFilter] = useState('All');

    // create ToDolist
    const tasklist = tasks.filter(FILTER_MAP[filter])
        .map((task) => (
            <ToDo id={task.id} name={task.name} completed={task.completed} key={task.id}
                  toggleTaskCompleted={toggleTaskCompleted}
                  deleteTask={deleteTask}
                  editTask={editTask} />
        ));

    // generate correct tasks heading
    let tasksNumber = tasklist.length;
    let tasksNoun = tasksNumber !== 1 ? 'tasks' : 'task';

    const filterList = FILTER_NAMES.map((name) => (
        <FilterButton key={name} name={name}
                      isPressed={name === filter}
                      setFilter={setFilter} />
    ));

    function addTask(name) {
        // create new task with the generated id
        const newTask = {id: `todo-${nanoid()}`, name, completed: false};
        // update the state - old tasks array + new task
        setTasks([...tasks, newTask]);
    }

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map((task) => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
                // use object spread to make a new object whose `completed` prop has been inverted
                return {...task, completed: !task.completed};
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
    }

    function editTask(id, newName) {
        const editedTasks = tasks.map((task) => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
                return {...task, name: newName}
            }
            return task;
        })
        setTasks(editedTasks);
    }

    return (
        <div className="todoapp stack-large">
            <h1>Getting things done</h1>

            <Form addTask={addTask} />

            <div className="filters btn-group stack-exception">
                {filterList}
            </div>

            <h2 id="list-heading">
                {tasksNumber} {tasksNoun} remaining
            </h2>

            {/*Accessibility - aria-labelledby - treating our list heading as the label
            that describes the purpose of the list beneath it*/}
            <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
                {tasklist}
            </ul>
        </div>
    );
}

export default App;
