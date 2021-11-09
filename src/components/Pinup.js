import React, { useState } from 'react';
import Task from './Task';
import '../assets/Pinup.css';

export default function Pinup() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dnt, setDnt] = useState("");
    const [tasks, setTasks] = useState([]);
    const [display, setDisplay] = useState(true);

    function addTask() {
        setDisplay(!display);
        const date = new Date();
        setDnt(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + '@' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
        setTasks([...tasks, { title: title, desc: description, date: dnt }]);
    }

    return (
        <div id="pinup">
            <h2>List of tasks</h2>

            <div id="tasks">
                {tasks.map((task) => {
                    return (<Task title={task.title} desc={task.desc} date={task.date} />);
                })}
            </div>

            {(display) ?
                <button className="btn" id="btn-plus" onClick={()=>{setDisplay(!display)}}><span className="material-icons-round">add_box</span></button>
                :
                <form id="add-task" onSubmit={(e) => { e.preventDefault() }}>
                    <input className="inp inp-title" type="text" placeholder="title" onChange={(e) => { setTitle(e.target.value) }} />
                    <button className="btn btn-addtask" onClick={addTask}>add task</button>
                    <input className="inp inp-desc" type="text" placeholder="description" onChange={(e) => { setDescription(e.target.value) }} />
                    <input className="inp inp-date" type="datetime-local" />
                </form>
            }
        </div>
    )
}
