import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todolist: PropTypes.array,
};
TodoList.defaultProps = {
    todolist: [],
};
function TodoList({ todolist }) {
    return (
        <div>
            <ul>
                {todolist.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;