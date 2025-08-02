import React,{useState,useEffect} from 'react';
import { Form,Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Jobform = ({fetchjobs,selectedjob,setSelectedjob}) => {
  const [formdata,setFormdata] = useState({
    title:'',
    company:'',
    location:'',
    description:'',
    salary:''

  });
  const navigate = useNavigate();

  useEffect(()=>{
    if(selectedjob) setFormdata(selectedjob);
  },[selectedjob]);

  const hc = (e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value});
  };
  const hs = async(e) => {
    e.preventDefault();
    if(selectedjob  && selectedjob._id){
      await axios.put(`http://localhost:5700/api/jobs/${selectedjob._id}`,formdata);

    }else {
      await axios.post('http://localhost:5700/api/jobs',formdata);
      navigate('/');
    }
    fetchjobs();
    setFormdata({
    title:'',
    company:'',
    location:'',
    description:'',
    salary:''

  });
  setSelectedjob(null);
  };

  return <>
    <Form onSubmit={hs}>
    <Form.Group>
      <Form.Label>Job Title</Form.Label>
      <Form.Control
       type='text'
       name='title'
       value={formdata.title}
       onChange={hc}
       required
       />
    </Form.Group>
    <Form.Group>
      <Form.Label>Company</Form.Label>
      <Form.Control
       type='text'
       name='company'
       value={formdata.company}
       onChange={hc}
       required
       />
    </Form.Group>
    <Form.Group>
      <Form.Label>Location</Form.Label>
      <Form.Control
       type='text'
       name='location'
       value={formdata.location}
       onChange={hc}
       required
       />
    </Form.Group>
    <Form.Group>
      <Form.Label>Job Description</Form.Label>
      <Form.Control
       type='text'
       name='description'
       value={formdata.description}
       onChange={hc}
       required
       />
    </Form.Group>
    <Form.Group>
      <Form.Label>Salary</Form.Label>
      <Form.Control
       type='text'
       name='salary'
       value={formdata.salary}
       onChange={hc}
       required
       />
       <br></br>
       <Button variant='dark' type='submit'>
        {selectedjob ? 'Update Job' :'Add Job'}
       </Button>
    </Form.Group>
    </Form>
  </>
}

export default Jobform