import React from 'react'
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
const Navbardata = ({ search, setSearch }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const hl = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    return <>
        <Navbar bg='dark' variant='dark' expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/home">JobMatch</Navbar.Brand>
                <Navbar.Toggle aria-controls='navvarScroll' />
                <Navbar.Collapse>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to="/">Register</Nav.Link>|<Nav.Link as={Link} to="/login">Login</Nav.Link>{''}
                        {
                            token && (
                                <>
                                    <Nav.Link as={Link} to="/home">Jobs</Nav.Link>
                                    <Nav.Link as={Link} to="/add">Add Job</Nav.Link>
                                     <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                                     <button onClick={hl}>Logout</button>

                                </>
                            )
                        }






                    </Nav>
                    <Form className='d-flex'>
                        <FormControl
                            type='search'
                            placeholder='Search'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Button variant='outline-success'>Search</Button>
                    </Form>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    </>
}

export default Navbardata