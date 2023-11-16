import React from "react";
import {BrowserRouter as Router, NavLink, Route, Routes} from "react-router-dom"
import {LinkingWrapper} from "./Navigation.styled";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import SelectedCar from "../../component/SelectedCar/SelectedCar";

export const Navigation = () => {
    return (
        <Router>
                <LinkingWrapper>
                    <ul className={"nav-ul"}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/catalog">Catalog</NavLink>
                        </li>
                    </ul>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/catalog" element={<Catalog/>}></Route>
                        <Route path="/car/*" element={<SelectedCar/>}></Route>
                    </Routes>
                </LinkingWrapper>
        </Router>
    )
}

export default Navigation