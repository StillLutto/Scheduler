import "./TodoList.css";

function TodoList() {
    return (
        <div className="todo__list-container">
            <div className="todo__list-header">
                <h1 className="todo__list-header-title">To-Do Name</h1>
            </div>
            <ul className="todo__list">
                <li><p>hi</p></li>
                <li><p>hi</p></li>
                <li><p>hi</p></li>
            </ul>
        </div>
    );
}

export default TodoList;