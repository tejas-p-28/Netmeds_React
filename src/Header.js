import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './Header.css';

const purl = "https://netmedsapi.herokuapp.com/category";

class Header extends Component {

    constructor(){
        super()
 
        this.state={
            title:'Pharmaco',
            keywords:'Search medicines/Healthcare products @18% OFF'
        }
     }


    handleChange = (event) => {
        this.setState({keywords:event.target.value?event.target.value:'Search medicines/Healthcare products @18% OFF'})
        this.props.userInput(event.target.value);
    }

    render() {
        console.log("inside render")
        return (
            <>
                <div className="form-horizontal">
                    <div className="container-fluid">
                        <div className="header">
                            <Link to={"/home"} className="navbar-brand" >Pharmaco</Link>
                            <form className="example" action="">
                                <input onChange={this.handleChange} type="text" placeholder="Search medicines/Healthcare products @18% OFF" name="search"/>
                            </form>
                            <div className="weather">
                                <p id="icon"></p>
                            </div>
                            <button className="btn btn-danger1" id="myDark" >Mode</button>
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item pe-5">
                                    <Link to={'/home1'} className="nav-link" href="medicine.html">Order Medicines</Link>
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
    componentDidMount(){
        console.log("inside component")
        fetch(purl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({product:data})
        })
    }
}

export default Header