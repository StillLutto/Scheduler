import "./TodoTags.css";

function TodoTags() {
    return (
        <div className="todo__tags-container">
            <div className="todo__tags-header">
                <h1 className="todo__tags-header-title">To-Do Tags</h1>
                <div className="title-button-container">
                    <a href="/" className="title-button"><i className="fa-solid fa-plus"></i></a>
                </div>
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