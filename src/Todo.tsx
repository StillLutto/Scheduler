import "./Todo.css"

function Todo() {
     return (
        <main className="todo-container section-container">
            <div className="todo__tags-container">
                <h1 className="todo__tags-title">To-Do Tags</h1>
                <ul className="todo__tags">
                    <li>hi</li>
                    <li>hi</li>
                        <li>hi</li>
                </ul>
            </div>

            <div className="todo__list-container">
                <h1 className="todo__list-title">To-Do Name</h1>
                <ul className="todo__list">
                    <li><p>hi</p></li>
                    <li><p>hi</p></li>
                    <li><p>hi</p></li>
                </ul>
            </div>
        </main>
     );
}

export default Todo;