import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import '../App.css'
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";

var myVar = [];

function View() {
    const history = useHistory();
    const location = useLocation();
    let { id } = useParams();
    console.log(id)
    console.log(location)
    console.log(history)
    const locationData = location.state.data;
    const [data, setData] = useState(locationData);
    const prevCount = usePrevious(data)
    console.log("prevCount", prevCount)

    useEffect(() => {         
        axios.get(`/users`).then(res => {
        myVar = res.data;
      })
    },[])

    function paginateData(data){
        if(data< myVar.length){
            setData(myVar[data]) 
                       
        }
        else{
            console.log("else")
        }
    }

    function paginateBack(){
        if((data != undefined)){
            setData(prevCount)
            console.log("back",data)
        }
       
    }

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
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
                    <Button variant="primary" onClick={() => paginateBack()}>Go Back</Button> {'     '}
                    <Button variant="success" onClick={() => paginateData(data.id)}>Next</Button>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </React.Fragment>
    )
}

export default View