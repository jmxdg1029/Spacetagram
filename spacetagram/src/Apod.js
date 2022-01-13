import React, {Component, useEffect, useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Apod.css';
import axios from 'axios';
import LikeBtn from './LikeBtn';




export default class Apod extends Component{
    constructor(props){
        super(props)

        this.state = {
            apod: [],
            
        }

       
    }

    componentDidMount(){
        
        axios.get(`https://api.nasa.gov/planetary/apod?start_date=2021-12-25&api_key=cndGkd8qDgRWbgWZ9v5XT7wcekwVt5JygIab4dgl`)
        .then(res => {
            console.log(res.data);
            const apod = res.data
            this.setState({apod})
        })
    }

 

    render(){

        return(
            <div className='CardDesc'>
                {
                    this.state.apod.map(u=> (
                <Card border="dark" style={{width: '35rem'}}>
                    <Card.Img variant="top" src={u.hdurl} />
                    <Card.Header>{u.date}</Card.Header>
                    <Card.Body>
                        <Card.Title><h1>{u.title}</h1> </Card.Title>
                        <Card.Text>{u.explanation}</Card.Text>
                        <LikeBtn/>
                    </Card.Body>      
                </Card>
                    ))
                }
            </div>
        )
    }
}