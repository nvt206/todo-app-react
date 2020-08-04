import React,{Component} from 'react';
import './TodoItem.css'

export default class TodoItem extends Component{
    render(){
        const {todo,itemClick} = this.props;
        return (
            <div onClick ={itemClick} className={todo.isComplete?"TodoItem TodoItem-Completed":"TodoItem"}>
                <p>{todo.title}</p>
            </div>
        );
    };
}
