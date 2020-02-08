import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                <h3>&copy; {new Date().getFullYear()} asad</h3>
                </React.Fragment>
            </div>
        )
    }
}

export default Footer
