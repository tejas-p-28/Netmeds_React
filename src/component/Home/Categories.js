import React, { Component } from 'react';
import './Categories.css';

const purl = "https://netmedsapi.herokuapp.com/product"

class Categories extends Component {

    constructor(props){
        super(props);

        this.state={
            product:''
        }
    }
    render() {
        return (
            <>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://i.ibb.co/xhN1RPX/slideshow1.jpg" alt="Los Angeles" class="d-block w-100"/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.ibb.co/WKGw6mR/slideshow2.jpg" alt="Chicago" class="d-block w-100"/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.ibb.co/3CZFh38/slideshow3.jpg" alt="New York" class="d-block w-100"/>
                        </div>
                    </div>
                    <div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
                <div class="categories">
                    <p>Top categories</p>
                    <div class="imgcategory">
                        <div class="categoriesContainer">
                            <a href="devices.html" class="img"><img src="images/categories images/Accucheck-Devices.jpg"
                                alt="Devices" class="img"/></a>
                        </div>
                        <div class="categoriesContainer">
                            <a href="nutrition.html" class="img"><img src="images/categories images/Nutrition-drinks.jpg" alt="Nutrition Drinks"
                                class="img"/></a>
                        </div>
                        <div class="categoriesContainer">
                            <a href="#" class="img"><img src="images/categories images/Baby-Mom-care.jpg" alt="Baby and Mom Care"
                                class="img"/></a>
                        </div>
                        <div class="categoriesContainer">
                            <a href="#" class="img"><img src="images/categories images/Ayurvedic-care.jpg" alt="Ayurvedic Care"
                                class="img"/></a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    componentDidMount(){
        
    }
}

export default Categories