import React, { Component } from 'react'
import uuid from 'uuid'
import Todo from './Todo';
import AddTodo from './AddTodo';
export class Home extends Component {

    state={
        todos:[]
    }

    deleteRow=(id)=>{
        this.setState({todos:this.state.todos.filter(name=>name.id!==id)})
        
    }

    addTodo=(name, title)=>{
        console.log(name,title);
        const newTodo={name, title, id:uuid.v4(), completed:false}
        this.setState({todos:[...this.state.todos, newTodo] })
        
    }

    render() {
        console.log(this.state.todos)
        return (
            
            
            <div>
                <AddTodo addTodo={this.addTodo}/>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                    {this.state.todos.map((todo) => <Todo todo={todo} deleteRow={this.deleteRow}/> )}
                </table>
            </div>
        )
    }
}

export default Home
