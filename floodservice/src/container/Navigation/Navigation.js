import React from "react";
import {BrowserRouter as Router, NavLink, Route, Routes} from "react-router-dom"
import {LinkingWrapper} from "./Navigation.styled";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";

export const Navigation = () => {
    return (
        <Router>
                <LinkingWrapper>
                    {/*<h1 className={"title-main"}><a href="">DELORIAN</a></h1>*/}
                    <ul className={"nav-ul"}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/catalog">Catalog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Cart">Cart</NavLink>
                        </li>
                    </ul>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/catalog" element={<Catalog/>}></Route>
                    </Routes>
                </LinkingWrapper>
        </Router>

    )
}

export default Navigation