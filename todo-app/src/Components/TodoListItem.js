import React from 'react';
import cn from 'classnames';
import './TodoListItem.scss';
import '@fortawesome/fontawesome-free/js/all.js';

const TodoListItem = ({todo}) => {
    //todo 데이터는 통째로 props로 전달
    const {text, checked} = todo;
    return (
        <div class="TodoListItem">
            <div class={cn('checkbox', {checked})}>
                {checked? <i className="far fa-check-square"></i> : <i className="far fa-square"></i>}
              <div class="text">{text}</div>
            </div>
            <div class="remove">
              <i class="fas fa-eraser"></i>
            </div> 
        </div>
    );
};

export default TodoListItem;