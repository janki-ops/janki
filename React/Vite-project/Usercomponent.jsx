import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form,Button,Row,Col,Container,Table } from 'react-bootstrap';



const Usercomponent=()=>{
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[pwd,setPassword]=useState("")
  const[data,setData]=useState([])
  const[id,setId]=useState("")
  const handleName=(e)=>{
    setName(e.target.value)
  }
  const saveData=(e)=>{
    e.preventDefault();
    if(id!==""){
      //update
      let res=data.map((i,index)=>{
        if(index===id){
          i.name=name
          i.email=email
          i.salary=pwd
        }
        return i
      })
    }else//insert
    setData([...data,{
      "name":name,
      "email":email,
      "pwd":pwd
    }])
    setName("");
    setEmail("");
    setPassword("");
    setId("");
}
  
  const delData=(id)=>{
    let res=data.filter((i,index)=>{
      return index !=id
    })
    setData(res)
  }
  

  const editData=(id)=>{
    let res=data.find((i,index)=>{
      return index==id
    })
    setName(res.name)
     setEmail(res.email)
      setPassword(res.pwd)
      setId(id);
  }
  
  
    return (
      <div>
        <Container Fluid>
            <Row>
                <Col>
                <h3>User Form</h3>
         <Form name="frm" method="post" action="#" onSubmit={saveData}>
      <Form.Group  className="mb-3" controlId="formPlaintextEmail">
        <Form.Label >Name: </Form.Label>
        <Form.Control type="text" 
        placeholder="Enter Name" 
        name="name" 
        onChange={handleName}value={name}/>
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formPlaintextPassword">
        <Form.Label >Email:</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" name="email" 
        onChange={(e)=>setEmail(e.target.value)} value={email} />
        </Form.Group>
         
         <Form.Group  className="mb-3" controlId="formPlaintextPassword">
          <Form.Label >password:</Form.Label> 
        <Form.Control type="password" placeholder="Enter Password" name="pwd" 
        onChange={(e)=>setPassword(e.target.value)} value={pwd} />  
        </Form.Group>

    <Button  variant="primary" type="submit"> Save </Button>
    <Button  variant="danger" type="reset">Cancel</Button>
    </Form>
    
    </Col>
    <Col>
        <h3>User List</h3>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Action</th>
          
         
          
          
        </tr>
      </thead>
      <tbody>
          {
            data.map((i,index)=>{
              return(
                <tr>
                  <td>{index+1}</td>
                  <td>{i.name}</td>
                  <td>{i.email}</td>
                  <td>{i.pwd}</td>
                  <td> <Button  variant="danger" type="submit" onClick={()=>delData(index)}> Delete </Button>
                  <Button  variant="primary" type="submit" onClick={()=>editData(index)}> Edit</Button></td>
                </tr>
              )
            })
          }
      </tbody>
      </Table>
    </Col>
    </Row>
    
    </Container>
      </div>
    );
  };
export default Usercomponent;
