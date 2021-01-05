import React from 'react';
import cn from 'classnames';
import './TodoListItem.scss';
import '@fortawesome/fontawesome-free/js/all.js';

const TodoListItem = ({todo, onRemove, onToggle, style}) => {
    //todo 데이터는 통째로 props로 전달
    const { id, text, checked } = todo;
    return (
      // virtualized 감싼 후 props로 받아온 style 적용
      <div class="TodoListItem-virtualized" style={style}>
        <div class="TodoListItem">
            <div class={cn('checkbox', {checked})} onClick={()=>{onToggle(id)}}>
                {checked? <i className="far fa-check-square"></i> : <i className="far fa-square"></i>}
              <div class="text">{text}</div>
            </div>
            <div class="remove" onClick={()=>onRemove(id)}>
              <i class="fas fa-eraser"></i>
            </div> 
        </div>
      </div>
    );
};

export default React.memo(
  TodoListItem,
  (prevProps, nextProps)=>prevProps.todo===nextProps.todo,);
//React.memo