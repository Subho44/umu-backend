import React from 'react'
import {Navbar,Nav,Container,Form,FormControl,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Navbardata = () => {

  return <>
    <Navbar bg='dark' variant='dark' expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/">JobMatch</Navbar.Brand>
            <Navbar.Toggle aria-controls='navvarScroll'/>
            <Navbar.Collapse>
                <Nav className='me-auto'>
                    <Nav.Link as={Link} to="/">Jobs</Nav.Link>
                    <Nav.Link as={Link} to="/add">Add Job</Nav.Link>

                </Nav>
                <Form className='d-flex'>
                    <FormControl
                        type='search'
                        placeholder='Search'
                    />
                    <Button variant='outline-success'>Search</Button>
                </Form>
            </Navbar.Collapse>

        </Container>
    </Navbar>
  </>
}

export default Navbardata