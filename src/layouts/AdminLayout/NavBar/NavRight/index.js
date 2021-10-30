import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import axios from 'axios';


import { API_SERVER } from '../../../../config/constant';
import { LOGOUT } from './../../../../store/actions';


const NavRight = () => {
    const account = useSelector((state) => state.account);
    const dispatcher = useDispatch();
    const handleLogout = () => {dispatcher({ type: LOGOUT })}
       
    return (
        <React.Fragment >
             <Link to="#" className="navbar-nav mr-5" onClick={handleLogout}>
                                        <i className="feather icon-log-out" /> 
            </Link>
        </React.Fragment>
    );
};

export default NavRight;
