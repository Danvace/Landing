import React from "react";
import {BrowserRouter as Router, NavLink, Route, Routes} from "react-router-dom"
import {LinkingWrapper} from "./Navigation.styled";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import SelectedCar from "../../component/SelectedCar/SelectedCar";
import CartPage from "../CartPage/CartPage";
import Checkout from "../Checkout/Checkout";
import Success from "../Success/Success";
import Register from "../../component/Registration/Registration";
import Login from "../../component/Login/Login";
import Header from "../App/Header/Header";

export const Navigation = () => {
    return (
        <Router>
            <Header/>
            <LinkingWrapper>
                <ul className={"nav-ul"}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/catalog">Catalog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cartPage">Cart Page</NavLink>
                    </li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/catalog" element={<Catalog/>}></Route>
                    <Route path="/car/*" element={<SelectedCar/>}></Route>
                    <Route path={"/cartPage"} element={<CartPage/>}></Route>
                    <Route path={"/checkout"} element={<Checkout/>}></Route>
                    <Route path={"/success"} element={<Success/>}></Route>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                </Routes>
            </LinkingWrapper>
        </Router>
    )
}

export default Navigation