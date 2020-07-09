import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <nav>
        <Link to="/">
          <img src={logo} alt="Logo Star Wars" />
        </Link>
      </nav>
    </Container>
  );
}

export default Header;
