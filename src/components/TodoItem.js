import React,{Component} from 'react';
import './TodoItem.css'
import checkImg from '../images/checked.svg'
import unCheckImg from '../images/unChecked.svg'

export default class TodoItem extends Component{
    render(){
        const {todo,itemClick} = this.props;
        return (
            <div onClick ={itemClick} className={todo.isComplete?"TodoItem TodoItem-Completed":"TodoItem"}>
                <img  src={todo.isComplete?checkImg:unCheckImg}/>
                <p>{todo.title}</p>
            </div>
        );
    };
}
