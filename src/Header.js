import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';
const url = "";

class Header extends Component {
    render() {
        return (
            <>
                <div className="form-horizontal">
                    <div className="container-fluid">
                        <div className="header">
                            <a className="navbar-brand" href="index.html">Pharmaco</a>
                            <select id="product" style={{textAlign: 'center'}} onChange="productList()">
                                <option>Products Available</option>
                            </select>
                            <form className="example" action="action_page.php">
                                <input type="text" placeholder="Search medicines/Healthcare products" name="search"/>
                                    <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                            <div className="weather">
                                <p onload="geolocation()">
                                    <p id="icon"></p>
                                    <p id="address"></p>
                                </p>
                            </div>
                            <button className="btn btn-danger1" id="myDark" onclick="changeMode()">Mode</button>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item pe-5">
                                    <a className="nav-link" href="medicine.html">Order Medicines</a>
                                </li>
                                <li className="nav-item pe-5">
                                    <a className="nav-link" href="product.html">Healthcare Products</a>
                                </li>
                                <li className="nav-item pe-5">
                                    <a className="nav-link" href="#">Login / Signup</a>
                                </li>
                                <li className="nav-item pe-5">
                                    <a className="nav-link" href="#"><i className="fa fa-cart-plus"
                                        style={{justifyContent: 'flex-end'}}></i></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}

export default Header