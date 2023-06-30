import React, {  useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './EnterInfo.css';
import 'bootstrap/dist/css/bootstrap.css';
import Display from "./Display";
import _ from "lodash";
function EnterInfo() {

    const [data, setData]= useState({ name: '', age: '', email: '', number: ''});
    const [formerror, setFormerror] = useState({});
    const [issubmit, setSubmit]= useState(false);

    const handlevalidation =(e)=>{
        const {name, value}= e.target;
        setData({...data, [name]: value});
    }

    const handlesubmit = (e)=>{
        e.preventDefault();
        setFormerror(validationform(data));
     
    }
    

    const validationform = (value)=>{
        const errors= {};
        const emailRegex = /^()[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
        const numberRegex = /^[0-9]{10}$/;
        const ageRegex = /^[0-9]{2}$/;
        

        if(!value.name){
            errors.name="Please Enter Name";
        }else if(!nameRegex.test(value.name))
        {
            errors.name = "Enter proper name format";
        }

        if(!value.age){
            errors.age ="Please Enter Age";
        }else if(!ageRegex.test(value.age))
        {
            errors.age = "Enter valid age";
        }

        if(!value.email){
            errors.email="Please Enter Email";
        } else if(!emailRegex.test(value.email))
        {
            errors.email="Enter Valid Email";
        }
        
        if(!value.number){
            errors.number="Please Enter Mobile Number";
        }else if(!numberRegex.test(value.number))
        {
            errors.number="Enter Valid Mobile Number without country code";
        }
        
        if(_.isEmpty(errors)){
        setSubmit(true);
        }

        return errors;
    }

    useEffect( ()=>{

        if(Object.keys(formerror).length===0 && issubmit)
        {
            console.log(data);
        }
    },[formerror, data, issubmit]
    )

 return (
    <React.Fragment>
      <Container>
      {!issubmit ? (
        <>
        <div className="container">
          <Row> <h1 className="header" >React Form</h1></Row> 
            <div className="form">
            <form onSubmit={ handlesubmit}>
                
                   <div className="element">
                   <Row>
                    <Col>
                    <label >Name<span className="astriccolor">*</span></label></Col>
                    <Col><input type="text" className="form-control" 
                    name="name" 
                    value={ data.name} 
                    placeholder = "Full Name" 
                    onChange={ handlevalidation} /></Col></Row>
                    <span className="text-danger">{ formerror.name } </span>
                    </div>

                    <div className="element">
                   <Row>
                    <Col>
                    <label >Age<span className="astriccolor">*</span></label></Col>
                    <Col><input type="text" className="form-control" 
                    name="age" 
                    value={ data.age} 
                    placeholder = "Age" 
                    onChange={ handlevalidation} /></Col></Row>
                    <span className="text-danger">{ formerror.age } </span>
                    </div>
                    
                    <div className="element">
                    <Row>
                    <Col>
                    <label>Email<span className="astriccolor">*</span></label></Col>
                    <Col><input 
                    type="text" 
                    className="form-control" 
                    name="email" 
                    value={ data.email} 
                    placeholder = "Email" 
                    onChange={ handlevalidation} />
                    </Col></Row>
                    <span className="text-danger">{ formerror.email}  </span>
                    </div>
                    

                    <div className="element">
                    <Row>
                    <Col>
                    <label>Mobile Number<span className="astriccolor">*</span></label></Col>
                    <Col><input  className="form-control" 
                    name="number" 
                    value={ data.number} 
                    placeholder = "Mobile Number" 
                    onChange={ handlevalidation}/></Col></Row>
                    <span className="text-danger">{ formerror.number}  </span>
                    </div>
      
                    
                   <div className="button">
                    <button className="btn btn-success">Submit</button> 
                    <span></span>
                    </div>
                </form>
                </div>
                </div>
                </>
                ) : (
                    <Display formValue = {data} />
                )}
      </Container>
    </React.Fragment>
  );
}

export default EnterInfo;