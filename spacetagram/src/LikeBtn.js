import React, {Component, useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000))
}  

export default class LikeBtn extends Component{
    constructor(props){
        super(props)

        this.state = {
            isLiked:true
        }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(){
        this.setState(prevState => ({
            isLiked: !prevState.isLiked
        }))
    }

    render(){
        return(
        <Button  onClick={this.handleClick}  className="Like " variant={this.state.isLiked ? 'outline-dark' : 'danger'}>
        {this.state.isLiked ? 'Like' : '❤'}
        </Button>
        )
    }
}