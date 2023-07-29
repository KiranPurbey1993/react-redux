import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
  return (
    <div className='ui fixed menu'>
        <div className='ui container center'>
            <Link to="/">
                <h2>FakeShopp</h2>
            </Link>
        </div>
    </div>
  )
}

export default Header
