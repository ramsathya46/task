import React, { useEffect, useRef, useState } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Api(props) {
    const history = useHistory();
    const [data, setData] = useState([]);
    console.log(data)
    useEffect(() => {         
        axios.get(`/users`).then(res => {
        const persons = res.data;
        console.log(persons)
        setData(persons)
      })
    },[])

    function sayHello(x) {
        console.log(x)
        history.push({
            pathname: `/data/${x.id}`,
            state: { data: x }
        })
      }
   
    return (
        <React.Fragment>
            <Table striped bordered hover size="md" responsive>
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
                    {data.map((x,index) => (                        
                        <tr key={index} onClick={() => sayHello(x)}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.email}</td>
                            <td>{x.phone}</td>
                            <td>{x.address.city}</td>
                        </tr>
                        ))}
                    
                     </tbody>
            </Table>
             
                        
        </React.Fragment>
    );
}

export default Api;

