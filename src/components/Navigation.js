import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <Nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        </Nav>
      </div>
    </div>
  );
};

export default Navigation;


const Nav = styled.div`
margin:0 auto;
width:30%;
display:flex;
justify-content:space-between;
`