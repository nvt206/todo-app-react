import React,{Component} from 'react';
import './TodoItem.css'
import checkImg from '../images/checked.svg'
import unCheckImg from '../images/unChecked.svg'
import deleteImg from '../images/delete.svg'

export default class TodoItem extends Component{
    render(){
        const {todo,checkboxClick,deleteClick} = this.props;
        return (
            <div className={todo.isComplete?"TodoItem TodoItem-Completed":"TodoItem"}>
                <img onClick ={checkboxClick} src={todo.isComplete?checkImg:unCheckImg}/>
                <p>{todo.title}</p>
                <div className="wrap-delete">
                <img src ={deleteImg} onClick={deleteClick}/>
                </div>
            </div>
        );
    };
}
