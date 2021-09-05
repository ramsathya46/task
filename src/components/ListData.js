import React, { useEffect, useRef, useState } from 'react'
import logo from '../logo.svg';
import '../App.css';
import { Button, Card, Form } from 'react-bootstrap';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'

let num = 0;
let fnameData;
let lnameData;
const ListData =({ props })=>{   
   const [value, setValue] = useState({ getData: [] });  
   console.log("value",value.getData) 
    let val = props.qp;    
    var getData = value.getData;
    console.log("getData", getData)
    console.log(val)
    console.log(fnameData)
    console.log(lnameData)
    if ((val.firstName && val.lastName != '' && getData == '' )) {       
        console.log("val", val, JSON.stringify(getData))      
        getData.push(val)
        console.log("getData", getData);
        setValue({ getData: getData }) ;
        fnameData = getData[0].firstName;
        lnameData = getData[0].lastName;
    }
    else if(val.firstName != fnameData && val.lastName != lnameData){
        console.log("EIF",val)
        console.log("getData", getData);
        getData.push(val)
        //Object.assign({}, obj)
        let numvalue = getData.length;
        setValue({ getData: getData }) ;
        fnameData = val.firstName;
        lnameData = val.lastName;
        console.log("else",fnameData)
        console.log("else",lnameData)
    }


    
    
    
  
    return (
        <React.Fragment>
         <Table striped bordered hover size="md" responsive>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                    </tr>
                    </thead>
                    <tbody>
                    {value.getData.map((x,index) => (                        
                        <tr key={index}>
                            <td>{x.firstName}</td>
                            <td>{x.lastName}</td>
                        </tr>
                        ))}
                    
                     </tbody>
            </Table>
        </React.Fragment>
    );
}


export default ListData;



  /**
   * const [value, setValue] = useState({ getData: [] });  
   console.log(value.getData) 
    let val = props.qp;   
    const getData = [...value.getData];
    console.log("getData", getData)
    console.log(val)
    if ((val.firstName && val.lastName != '' && getData == '' )) {       
        console.log("val", val, JSON.stringify(getData))      
        getData.push(val)
        console.log("getData", getData);
        setValue({ getData: getData }) 
    }  
   */


    /**
     * if ((val.firstName && val.lastName != '' && getData == '' )) {       
        console.log("val", val, JSON.stringify(getData))      
        getData.push(val)
        console.log("getData", getData);
        setValue({ getData: finalArray }) ;
        fnameData = getData[0].firstName;
        lnameData = getData[0].lastName;
    }  
    

    else if(val.firstName != fnameData && val.lastName != lnameData){
        console.log("EIF",val)
        getData.push(val)
        console.log("getData", value.getData.length);
        let numvalue = value.getData.length;
        setValue({ getData: getData }) ;
        fnameData = getData[numvalue].firstName;
        lnameData = getData[numvalue].lastName;
        console.log("else",fnameData)
        console.log("else",lnameData)
    }
     */