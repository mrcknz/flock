import React, { Component } from 'react';
import styled from 'react-emotion';
import { Link } from "react-router-dom";


const NavProfileImage = styled('div')`
border: 1px solid #000;
background-image: url('https://graph.facebook.com/1897429313675048/picture?type=small');
background-size: cover;
border-radius: 50%;
height: 100%;
width: 100%;
// margin: 0 10px;
`;

class Navigation extends Component {
  render() {
    return (
        <Link to="/profile">
          <NavProfileImage  />
        </Link>
    );
  }
}

export default Navigation;