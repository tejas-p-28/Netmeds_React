import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';

const purl = "https://netmedsapi.herokuapp.com/product";
const turl = "https://netmedsapi.herokuapp.com/category?type_id="

class Header extends Component {

    constructor(props){
        super(props);
        console.log("inside constructor")

        this.state={
            product:'',
            categoryData:''
        }
    }

    renderProduct = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.products_id} key={item.products_id}>{item.products_name}</option>
                )
            })
        }
    }

    renderCategory = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.products_id} key={item._id}>{item.name}</option>
                )
            })
        }
    }

    handleProduct = (event) => {
        let productId = event.target.value;
        fetch(`${turl}${productId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({categoryData:data})
        })
    }

    render() {
        console.log("inside render",this.state.product)
        return (
            <>
                <div className="form-horizontal">
                    <div className="container-fluid">
                        <div className="header">
                            <Link to={"/home"} className="navbar-brand" href="index.html">Pharmaco</Link>
                            <form className="example" action="">
                                <input type="text" placeholder="Search medicines/Healthcare products @18% OFF" name="search"/>
                                    <button type="submit"></button>
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