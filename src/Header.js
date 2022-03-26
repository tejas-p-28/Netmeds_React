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

    
    showPosition(data) {
        console.log(data)
        let lat = data.coords.latitude;
        let long = data.coords.longitude
        var url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                data.list.map((item) => {
                    let y = document.getElementById("address");
                    let z = document.getElementById('icon')
                    console.log(item.temp.day)
                    y.innerText = `${item.temp.day}°C`
                    z.innerHTML = `<img className='card-img-top' src='https://openweathermap.org/img/w/${item.weather[0].icon}.png' alt='weather'/>`
                })

            })
    }


    geolocation(showPosition) {
        let x = document.getElementById("out")
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition)
        } else {
            x.innerText = "Geo Not Supported"
        }
    }

    
    // changeMode() {
    //     var mybody = document.body;
    //     mybody.classList.toggle("mydark")
    
    // }

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
                            <Link to={`/`} className="navbar-brand" style={{color:'white'}}>Pharmaco</Link>
                            <form className="example" action="">
                                <input onChange={this.handleChange} type="text" placeholder="Search medicines/Healthcare products @18% OFF" name="search"/>
                            </form>
                            <div className="weather">
                                <div onLoad="geolocation(showPosition)">
                                    <p id="icon"></p>
                                    <p id="address"></p>
                                </div>
                            </div>
                            {/* <button className="btn btn-danger1" id="myDark" onClick="changeMode()">Mode</button> */}
                        </div>
                    </div>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item pe-5">
                                    <Link to={`/`} className="nav-link">Order Medicines</Link>
                                </li>
                                <li className="nav-item pe-5">
                                    <Link to={`/`} className="nav-link">Healthcare Products</Link>
                                </li>
                                <li className="nav-item pe-5">
                                    <Link to={`/`} className="nav-link">Login / Signup</Link>
                                </li>
                                <li className="nav-item pe-5">
                                    <Link to={`/`} className="nav-link"><i className="fa fa-cart-plus"
                                        style={{justifyContent: 'flex-end'}}></i></Link>
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