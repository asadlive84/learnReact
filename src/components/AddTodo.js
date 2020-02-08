import React, { Component } from 'react'

export class AddTodo extends Component {

    state={
        name:'',
        title:'',
    }

    onSubmit=(e)=>{
        e.preventDefault()
        this.props.addTodo(this.state.name, this.state.title)
        this.setState({name:'',title:''})
    }

    onChangeTitle=(e)=>{
        this.setState({title:e.target.value})
        console.log(this.state);
        
    }
    onChangeName=(e)=>{
        this.setState({name:e.target.value})
        console.log(this.state);
        
    }

    
    render() {
        return (
            <div>
                <React.Fragment>
                    <form onSubmit={this.onSubmit}>
                        <label for="title">Job Title</label>
                        <input type="text" name="title" id="title" onChange={this.onChangeTitle} value={this.state.title}/>
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" onChange={this.onChangeName} value={this.state.name}/>
                        <input type="submit" value="Submit"/>
                    </form>
                </React.Fragment>
            </div>
        )
    }
}

export default AddTodo
