import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form,Button,Row,Col,Container,Table } from 'react-bootstrap';



const Employeecom=()=>{
    const[data,setData]=useState({
        name:"",
        age:"",
        salary:""
    });


    const[alldata,setAllData]=useState([]);
    const[id,setId]=useState("");
    const handleChange=(e)=>{
        let{name,value}=e.target;
        //let nm=e.target.name
        //let val=e.target.value
        setData({
            ...data,
            [name]:value,
            //[nm]:val
        });
    };
    const saveData=(e)=>{
        e.preventDefault();
        if(id!=""){
            let res=alldata.map((i,index)=>(index==id)?i=data:i)
            // let res=alldata.map((i,index)=>{
            //     if(index==id){
            //         i=data;
            //     }
            //     return i;
            // });
            setAllData(res)
            
        }else{
        setAllData([...alldata,data]);
        }
        setId("");
        setData({

            name:"",
            age:"",
            salary:"",
        });
    };
    const delData=(id)=>{
        let res=alldata.filter((i,index) => index!=id)
        setAllData(res)
    }
    const editData=(id)=>{
        let res=alldata.find((i,index)=>index==id);
        setData(res);
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
        name="name"  value={data.name}
        onChange={handleChange} />
        </Form.Group>

      <Form.Group  className="mb-3" controlId="formPlaintextPassword">
        <Form.Label >Age:</Form.Label>
        <Form.Control type="number" placeholder="Enter Age" name="age"  
        value={data.age} onChange={handleChange} />
        </Form.Group>
         
         <Form.Group  className="mb-3" controlId="formPlaintextPassword">
          <Form.Label >Salary:</Form.Label> 
        <Form.Control type="number" placeholder="Enter salary" name="salary" 
        value={data.salary} onChange={handleChange}/>
    
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
          <th>Age</th>
          <th>Salary</th>
          <th>Action</th>
          </tr>
      </thead>
      <tbody>
        {
            alldata.map((i,index)=>{
                return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>{i.salary}</td>
                        <td>
                            <Button  variant="danger" type="submit" onClick={()=>delData(index)}> Delete</Button>
                            <Button  variant="primary" type="reset" onClick={()=>editData(index)}>Edit</Button>
                        </td>

                    </tr>
                )
            })}
        
      </tbody>
      </Table>
    </Col>
                    
                </Row>
                </Container> 
        </div>
    )
}
export default Employeecom;