import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Container} from "./NavBar.styled";
import {Button} from "antd";

const Navbar = () => {
    const isLoggedIn = localStorage.getItem('token');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
        window.location.reload();
    };

    return (
        <Container>
            {isLoggedIn ? (
                <Button onClick={handleLogout}>Logout</Button>
            ) : (
                <div className={"buttons"}>
                    <Link to="/register">
                        <Button>Register</Button>
                    </Link>
                    <Link to="/login">
                        <Button>Login</Button>
                    </Link>
                </div>
            )}
        </Container>
    );
};

export default Navbar;