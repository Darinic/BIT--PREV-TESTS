import React from 'react'
import { Navbar, Container } from "react-bootstrap";
import { FaCamera, FaBars } from 'react-icons/fa/index.esm';

export default function Header() {
  return (
    <>
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand style={{fontWeight:'bold'}}>
                    <FaCamera style={{paddingRight:'5px', fontSize:'23px'}}/>Kontaktai
                </Navbar.Brand>
                <Navbar.Collapse className='justify-content-end'>
                <FaBars/> Meniu
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}


//FaBars neatsiranda kažkodėl