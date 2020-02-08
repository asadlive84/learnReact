import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Todo List</h1>
                <Link to="/">Home</Link>{' '}
                |{' '}
                <Link to="/about/">About</Link>
                |{' '}
                <Link to="/contact/">Contact Us</Link>
            </React.Fragment>
        )
    }
}

export default Header
