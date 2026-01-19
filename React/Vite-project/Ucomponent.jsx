import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form,Table,Row,Col,Container,Button } from 'react-bootstrap';

const Ucomponent=()=>{
    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const[salary,setSalary]=useState("")
    const[data,setData]=useState([])
    const[id,setId]=useState("")
    
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const saveData=(e)=>{
        e.preventDefault();
        if(id!=""){
          let res=data.map((i,index)=>{
              if(index===id){
                i.name=name
                i.age=age
                i.salary=salary
              }
              return i
          })
        }
        else
        setData([...data,{
            "name":name,
            "age":age,
            "salary":salary
        }])
    }
   
    const delData=(id)=>{
        let res=data.filter((i,index)=>{
            return index !=id
        })
        setData(res)
    
    }
        
    const editData=(id)=>{
        let res=data.find((i,index)=>{
            return index ==id
        })
        setName(res.name)
        setAge(res.age)
        setSalary(res.salary)
        setId(id);
    }
    
    



return(
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
        <Form.Label >Age:</Form.Label>
        <Form.Control type="number" placeholder="Enter Age" name="age" 
        onChange={(e)=>setAge(e.target.value)} value={age} />
        </Form.Group>
         
         <Form.Group  className="mb-3" controlId="formPlaintextPassword">
          <Form.Label >Salary:</Form.Label> 
        <Form.Control type="number" placeholder="Enter salary" name="salary" 
        onChange={(e)=>setSalary(e.target.value)} value={salary} />  
        </Form.Group>

    <Button  variant="primary" type="submit"> Save </Button>
    <Button  variant="danger" type="reset">Cancel</Button>
    </Form>
            </Col>
            
            <Col>
            <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
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
                    <td>{i.age}</td>
                    <td>{i.salary}</td>
                    <td>
                         <Button variant="danger" type="submit" onClick={()=>delData(index)}>Delete</Button>
                         <Button variant="primary" type="reset" onClick={()=>editData(index)}>Edit</Button>
                    </td>
                </tr>
            )
          }

          )
        }
      </tbody>
      </Table>
            </Col>
        </Row>
    </Container>
</div>
)
}
export default Ucomponent;