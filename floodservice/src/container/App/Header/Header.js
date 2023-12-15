import React from "react";

import {HeaderContainer} from "./Header.styled";
import NavBar from "../../../component/NavBar/NavBar";

const Header = () => (
    <HeaderContainer>
        <h1><a href="http://localhost:3000/">DeLorean</a></h1>
        <NavBar/>
    </HeaderContainer>
);

export default Header;