import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
  const {user, googleSignOut} = useFirebase();

  return (
    <nav className='navs_area'>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/register">Register</Link>
      {user?.uid ? <button onClick={googleSignOut}>SignOut</button> : <Link to="/login">Login</Link>}
      {user?.displayName}
      <img width={35} src={user?.photoURL} alt="" />
    </nav>
  );
};

export default Header;