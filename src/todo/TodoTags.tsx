import "./TodoTags.css";

function TodoTags() {
    return (
        <div className="todo__tags-container">
            <div className="todo__tags-header">
                <h1 className="todo__tags-header-title">To-Do Tags</h1>
                <button className="todo__tags-header-button"><i className="fa-solid fa-plus button-icon"></i></button>
            </div>
            <ul className="todo__tags">
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
            </ul>
        </div>
    );
}

export default TodoTags;