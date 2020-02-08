import React, { Component } from 'react'
import TodoItem from './TodoItem';
export class Todo extends Component {
    render() {
        
        
        return (
            
                <TodoItem todo={this.props.todo} deleteRow={this.props.deleteRow} addTodo={this.props.addTodo}/>
            
        )
    }
}

export default Todo
