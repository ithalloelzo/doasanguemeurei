import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Doe Seu Sangue, Meu Rei</Navbar.Brand>
        <Navbar.Text>
          Ajude a salvar vidas com a sua doação de sangue!
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Header;
