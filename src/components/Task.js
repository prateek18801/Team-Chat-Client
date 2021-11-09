import { useState } from 'react';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../config/firebase';

import '../assets/Task.css';

export default function Task({ id, author, completed, created, description, due, modified, title }) {
    
    const [rotate, setRotate] = useState("material-icons-round rotate");
    const [display, setDisplay] = useState("task-desc display-none");
    const [status, setStatus] = useState("pending_actions");


    function toggleExpand(){
        if(rotate === "material-icons-round"){
            setRotate("material-icons-round rotate");
            setDisplay("task-desc display-none");
        }else{
            setRotate("material-icons-round");
            setDisplay("task-desc");
        }
    }

    function toggleStatus(){
        (status === "task_alt") ?
            setStatus("pending_actions")
            :
            setStatus("task_alt");
    }

    async function deleteTask(){
        await deleteDoc(doc(db, "todos", id));
    }

    return (
        <div id="task">
            <div className="task-header">
                <button className="btn expand-task" onClick={toggleExpand}><span className={rotate}>expand_more</span></button>
                <div className="task-status"><span className="material-icons-round">{status}</span></div> 
                <h3 className="task-title">{title}</h3>
                <button className="btn check-task" onClick={toggleStatus}><span className="material-icons-round">check</span></button>
                <button className="btn delete-task" onClick={deleteTask}><span className="material-icons-round">delete_outline</span></button>
            </div>
            <div className={display}>{description}</div>
            <div className="task-info">
                <div className="time">Date Created: {created}</div>
                <div className="time">Deadline: {due}</div>
                <div className="created-task">Created By: {author}</div>
                <div className="modified-task">Last Modified By: {modified}</div>
            </div>
        </div>
    )
}