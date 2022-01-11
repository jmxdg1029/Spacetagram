import React, {Component, useEffect, useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Apod.css';
import axios from 'axios';


function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000))
}     

export default class Apod extends Component{
    constructor(props){
        super(props)

        this.state = {
            apod: [],
            isLiked:true
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=cndGkd8qDgRWbgWZ9v5XT7wcekwVt5JygIab4dgl`)
        .then(res => {
            console.log(res.data);
            const apod = res.data
            this.setState({apod})
        })
    }

    handleClick(){
        this.setState(prevState => ({
            isLiked: !prevState.isLiked
        }))
    }

    render(){

        return(
            <div className='CardDesc'>
                <Card border="dark" style={{width: '35rem'}}>
                    <Card.Img variant="top" src={this.state.apod.hdurl} />
                    <Card.Header>{this.state.apod.date}</Card.Header>
                    <Card.Body>
                        <Card.Title><h1>{this.state.apod.title}</h1> </Card.Title>
                        <Card.Text>{this.state.apod.explanation}</Card.Text>
                        <Button  
                            onClick={this.handleClick}
                            className="Like " variant={this.state.isLiked ? 'outline-dark' : 'danger'}>
                            {this.state.isLiked ? 'Like' : '❤'}
                        </Button>
                    </Card.Body>      
                </Card>
            </div>
        )
    }
}