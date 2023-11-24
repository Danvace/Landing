import React from "react";

import {HeaderContainer} from "./Header.styled";
import {Button} from 'antd';

const Header = () => (
    <HeaderContainer>
        <h1><a href="http://localhost:3000/">DeLorean</a></h1>
        <Button>Contact us</Button>
    </HeaderContainer>
);

export default Header;