import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import '../App.css'
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

var myVar = [];

function View() {
    const location = useLocation();
    const locationData = location.state.data;
    const [data, setData] = useState(locationData);
    console.log(locationData)
    console.log(data)
    useEffect(() => {         
        axios.get(`/users`).then(res => {
        myVar = res.data;
        console.log(myVar);
      })
    },[])

    function paginateData(data){
        if(data< myVar.length){
            console.log("data    ",data)
            console.log("persons    ",myVar[data])
            setData(myVar[data])
        }
        else{
            console.log("else")
        }
    }

    function paginateBackData(data){
        if(data< myVar.length){
           
        }
        else{
            console.log("else")
        }
    }
   
    return (
        <React.Fragment>
            <Row><Col>
            <Card className="border d-flex align-items-center justify-content-center">               
                <Card.Body>
                    <Card.Title>Name: {data.name}</Card.Title>
                    <Card.Title>Email :{data.email}</Card.Title>
                    <Card.Title>MobileNo :{data.phone}</Card.Title>
                    <Card.Title>Company :{data.company.name}</Card.Title>
                    <Card.Text>Address :{data.address.city},
                    </Card.Text>
                    <Button variant="primary" onClick={() => paginateBackData(data.id)}>Go Back</Button> {'     '}
                    <Button variant="success" onClick={() => paginateData(data.id)}>Next</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </React.Fragment>
    )
}

export default View
