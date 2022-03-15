import React, { Component } from 'react';
import './Categories.css';
import {Link} from 'react-router-dom';
const url = "https://netmedsapi.herokuapp.com/category?type_id=8"

class Categories extends Component {
    constructor(){
        super()

        this.state={
            sortType:''
        }
    }
    
    render() {
        return (
            <>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i.ibb.co/xhN1RPX/slideshow1.jpg" alt="Los Angeles" className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/WKGw6mR/slideshow2.jpg" alt="Chicago" className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/3CZFh38/slideshow3.jpg" alt="New York" className="d-block w-100"/>
                        </div>
                    </div>
                    <div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
                <div className="categories">
                    <p>Top categories</p>
                    <div className="imgcategory">
                        <div className="categoriesContainer">
                            <Link to="/Listing/:typeId" className="img"><img src="images/categories images/Accucheck-Devices.jpg"
                                alt="Devices" className="img"/></Link>
                        </div>
                        <div className="categoriesContainer">
                            <Link to="/Listing/:typeId" className="img"><img src="images/categories images/Nutrition-drinks.jpg" alt="Nutrition Drinks"
                                className="img"/></Link>
                        </div>
                        <div className="categoriesContainer">
                            <Link to="/Listing/:typeId" className="img"><img src="images/categories images/Baby-Mom-care.jpg" alt="Baby and Mom Care"
                                className="img"/></Link>
                        </div>
                        <div className="categoriesContainer">
                            <Link to="/Listing/:typeId" className="img"><img src="images/categories images/Ayurvedic-care.jpg" alt="Ayurvedic Care"
                                className="img"/></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({sortType:data})
        })
    }
}

export default Categories