import React from "react";

import {HeaderContainer} from "./Header.styled";
import {Button} from 'antd';
import Navigation from "../../Navigation/Navigation";

const Header = () => (
    <HeaderContainer>
        <h1><a href="">DeLorean</a></h1>
        <Button>Contact us</Button>
    </HeaderContainer>
);

export default Header;