import '../assets/Task.css';

export default function Task({title, desc, date}) {
    return (
        <div id="task">
            <h3 className="task-title">{title}</h3>
            <div className="task-desc">{desc}</div>
            <div className="task-info">
                <div className="time">{date}</div>
            </div>
        </div>
    )
}
