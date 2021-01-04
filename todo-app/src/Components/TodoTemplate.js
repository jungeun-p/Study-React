import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({children}) => {
    return (
        <div class="TodoTemplate">
            <div class="app-title">TodoList</div>
            {/*TodoInsert, TodoList is children*/}
            <div class="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;