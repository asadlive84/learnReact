import React, { Component } from 'react'

export class TodoItem extends Component {

    

    render() {
        const {id, title, name}=this.props.todo
        return (
            
            <tr>
                <td>{title}</td>
                <td>{name}</td>
                <td style={{cursor:'pointer'}} onClick={this.props.deleteRow.bind(this, id)} >Delete</td>
            </tr>
            
        )
    }
}

export default TodoItem
