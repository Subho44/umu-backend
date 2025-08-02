import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Col, Container,Row } from 'react-bootstrap'
import Jobcard from '../components/Jobcard';
import Jobform from '../components/Jobform';
const Home = ({}) => {
 const [jobs,setJobs] = useState([]);
 const [selectedjob,setSelectedjob] = useState(null);
 const fetchjobs = async()=>{
  const res = await axios.get('http://localhost:5700/api/jobs');
  setJobs(res.data);
 };
  
 useEffect(()=>{
  fetchjobs();
 },[]);

  return <>
  <Container>
    <h2 className='my-4'>Job Details</h2>
    <Row>
      {jobs.map(x=>(
        <Col md={3}>
        <Jobcard key={x._id} job={x} fetchjobs={fetchjobs} setSelectedjob={setSelectedjob}/>
        </Col>
      ))}
    </Row>
    <hr/>
    <Jobform fetchjobs={fetchjobs} selectedjob={selectedjob} setSelectedjob={setSelectedjob}/>
  </Container>
  
  </>
}

export default Home