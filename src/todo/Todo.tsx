import TodoTags from "./TodoTags";
import TodoList from "./TodoList";
import "./Todo.css"

function Todo() {
     return (
        <div className="todo-container section-container">
            <TodoTags />
            <TodoList />
        </div>
     );
}

export default Todo;