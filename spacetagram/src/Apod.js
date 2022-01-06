import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Apod.css';
import axios from 'axios';

export default class Apod extends Component{
    constructor(props){
        super(props)

        this.state = {
            apod: []
        }
    }

    componentDidMount(){
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=cndGkd8qDgRWbgWZ9v5XT7wcekwVt5JygIab4dgl`)
        .then(res => {
            console.log(res.data);
            const apod = res.data
            this.setState({apod})
        })
    }

    render(){
        return(
            <div className='Card'>
                <Card border="dark" style={{width: '35rem'}}>
                    <Card.Img variant="top" src={this.state.apod.hdurl} />
                    <Card.Header>{this.state.apod.date}</Card.Header>
                    <Card.Body>
                        <Card.Title><h1>{this.state.apod.title}</h1> </Card.Title>
                        <Card.Text>{this.state.apod.explanation}</Card.Text>
                        <Button variant="outline-dark">Like</Button>
                    </Card.Body>      
                </Card>
            </div>
        )
    }
}