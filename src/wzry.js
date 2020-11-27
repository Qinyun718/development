import React from 'react'
import ReactDOM from 'react-dom'
// import './fruit.css'
// import Button from '@material-ui/core/Button'

class WZRY extends React.Component{
    


    render(){
        return(
            <div>
                <h1>Name: {this.props.name}</h1>
                <img src={this.props.img} />
                <h3>Role: {this.props.role}</h3>
                
                
                
            </div>
            
        )
    }
}


export default WZRY;