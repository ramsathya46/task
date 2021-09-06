import React, { useEffect, useRef, useState }  from 'react'
import '../App.css';
import { Button, Card, Form } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function Login() {
    const userName = useRef(null);
    const password = useRef(null);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        userName.current.focus();
        password.current.focus();
        console.log(userName.current.value, password.current.value)
        if((userName.current.value == 'Ram')&&(password.current.value == 'ram1234')){
            history.push({
                pathname: `/home`,
            })
        }
        else{
            e.preventDefault();
            alert("Invalid username or password", userName, password)
        }

    }

    return (
        <div>
        <Card className="Sample">
        <Form onSubmit={handleSubmit}>
            <Row>
            <Col>
                <label>UserName
                <input placeholder="UserName " ref={userName} />
                </label><br></br>
            </Col>
            </Row>
            <Row>
            <Col>
                <label>Password
                <input type="password" placeholder="Password" ref={password} />
                </label><br></br>
            </Col>
            </Row>
            <Row>
            <Col>
                <div className="d-grid gap-2">
                <Button variant="outline-primary" type="submit">Submit</Button>
                </div>
            </Col>
            </Row>

        </Form>
    </Card >            
</div>
    )
}

export default Login

