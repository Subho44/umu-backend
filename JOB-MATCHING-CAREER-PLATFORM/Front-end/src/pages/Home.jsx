import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Col, Container,Row } from 'react-bootstrap'
import Jobcard from '../components/Jobcard';
const Home = () => {
 const [jobs,setJobs] = useState([]);
 const [editjob,setEditjob] = useState(null);
 const fetchjobs = async()=>{
  const res = await axios.get('http://localhost:5700/api/jobs');
  setJobs(res.data);
 };
  const deletejobs = async(id)=>{
  await axios.delete(`http://localhost:5700/api/jobs/${id}`);
  fetchjobs();
  
 };
 useEffect(()=>{
  fetchjobs();
 },[]);

  return <>
  <Container>
    <h2 className='my-4'>Job Details</h2>
    <Row>
      {jobs.map(x=>(
        <Col>
        <Jobcard key={x._id} job={x} onDelete={deletejobs} onEdit={editjob}/>
        </Col>
      ))}
    </Row>
  </Container>
  
  </>
}

export default Home