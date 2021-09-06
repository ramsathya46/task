import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import Table from 'react-bootstrap/Table'
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

    function paginateData(value){
        if(value< myVar.length){
            setData(myVar[value]) 
            history.push({
                pathname:`/data/${value + 1}`,
                state:{data:data}
            })
                       
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
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>                       
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td>{data.address.city}</td>
                        </tr>
                    </tbody>
            </Table>

            <Button variant="secondary" onClick={() => paginateBack(data.id)}>Go Back</Button> 
            <Button variant="info" onClick={() => paginateData(data.id)}>Next</Button>
             
                        
        </React.Fragment>
    )
}

export default View