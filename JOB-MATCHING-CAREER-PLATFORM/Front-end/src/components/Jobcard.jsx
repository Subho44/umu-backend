import axios from 'axios'
import React from 'react'
import { Card,Button } from 'react-bootstrap'
const Jobcard = ({job,fetchjobs,setSelectedjob}) => {

  const hd = async()=>{
    await axios.delete(`http://localhost:5700/api/jobs/${job._id}`);
    fetchjobs();
  }

  return <>
  <Card>
  <Card.Body>
  <Card.Title> {job.title}</Card.Title>
  <Card.Subtitle>{job.company}</Card.Subtitle>
  <Card.Text>{job.description}</Card.Text>
  <Card.Text><b>Location:</b>{job.location}</Card.Text>
  <Card.Text><b>Salary:</b>{job.salary}</Card.Text>
  <Button variant='danger' onClick={hd}>Delete</Button>
 <Button variant='primary' onClick={()=>setSelectedjob(job)}>Edit</Button>
  </Card.Body>

  </Card>
   
  </>
}

export default Jobcard