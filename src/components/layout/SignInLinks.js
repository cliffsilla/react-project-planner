import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignInLinks = (props) => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <ul className="right">
                <li><NavLink to='/create'>Create Project</NavLink></li>
                <li><button className="btn" onClick={props.signOut}>Log Out</button></li>
                <li><NavLink to='/' className="btn btn-floating pink lighten-1">
                    {props.profile.initials}
                </NavLink></li>
            </ul>
        </nav>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignInLinks)