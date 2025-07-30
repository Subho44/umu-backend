import React from 'react'
import { Card,Button } from 'react-bootstrap'
const Jobcard = ({job,onDelete,onEdit}) => {

  return <>
  <Card>
  <Card.Body>
  <Card.Title> {job.title}</Card.Title>
  <Card.Subtitle>{job.company}</Card.Subtitle>
  <Card.Text>{job.description}</Card.Text>
  <Card.Text><b>Location:</b>{job.location}</Card.Text>
  <Card.Text><b>Salary:</b>{job.salary}</Card.Text>
  <Button variant='danger' onClick={()=>onDelete(job._id)}>Delete</Button>
 <Button variant='primary' onClick={()=>onEdit(job)}>Edit</Button>
  </Card.Body>

  </Card>
   
  </>
}

export default Jobcard