import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form,Button } from 'react-bootstrap';

const Register = () => {
  const [form,setForm] = useState({name:"",email:"",password:""});
  const navigate = useNavigate();
  const hc = (e)=> setForm({...form,[e.target.name]:e.target.value});
  const hs = async(e)=> {
    e.preventDefault();
    await axios.post('http://localhost:5700/api/auth/register',form);
    alert('register successfully');
    navigate('/login');
  }
  return <>
     <Form onSubmit={hs}>
    <Form.Group>
      <Form.Label>Name</Form.Label>
      <Form.Control
       type='text'
       name='name'
       onChange={hc}
       required
       />
    </Form.Group>
   <Form.Group>
      <Form.Label>Email</Form.Label>
      <Form.Control
       type='email'
       name='email'
       onChange={hc}
       required
       />
    </Form.Group>
     <Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Control
       type='password'
       name='password'
       onChange={hc}
       required
       />
    </Form.Group>
    <br></br>
    <Button variant='primary' type='submit'>Register</Button>
    </Form>
  </>
}

export default Register