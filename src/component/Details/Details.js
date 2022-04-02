import React,{Component} from 'react';
import MenuDisplay from './menuDisplay';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Details.css';

const url = "https://netmedsapi.herokuapp.com/details";
const menuUrl = "https://netmedsapi.herokuapp.com/menu"

class Details extends Component {
    constructor(props) {
        super(props)

        this.state={
            details:'',
            menuList:''
            
        }
    }

    addToCart = (data) => {
        console.log(">>>>",data)
        this.setState({userItem:data})
    }

    proceed = () => {
        sessionStorage.setItem('menu',this.state.userItem)
        this.props.history.push(`/placeOrder${this.state.details.name}`)
    }


    render(){
    
        // //let details = details
        let details = this.state.details
        let abortController = new AbortController();
        abortController.abort();
        return(
            <>
                <div className="main">
                    <div className="tileImage">
                        <div className="imageClass">
                            <img src={details.image} alt={details.name}/>
                        </div>
                    </div>
                    {/* <div className="tileContent">
                        <div className="content">
                            <h3><u>{details.name}</u></h3>
                            <p>Old Price: <strike><b>{details.original_cost} Rs</b></strike></p>
                            <p>New Price: <b>{details.discount_cost} Rs</b></p>
                            <h4>We Provide Best Service</h4>
                            <div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/2FbpqtH/sentizied.jpg" alt="sentizied"/>
                                </div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/s56LLF9/homedelivery.png" alt="homedelivery"/>
                                </div>
                            </div>
                            <div>
                            <Tabs>
                                <TabList>
                                    <Tab>Details</Tab>
                                    <Tab>Ratings</Tab>
                                </TabList>

                                <TabPanel>
                                    <h5>{details.name}</h5>
                                    <p>
                                        <b>{details.name}</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                    </p>
                                </TabPanel>
                                <TabPanel>
                                    <p>Rating: <b>{details.average_rating} Stars</b></p>
                                </TabPanel>
                                
                            </Tabs>
                            <Link to={`/`} className="btn btn-danger">
                                Back
                            </Link> &nbsp;
                            <button className="btn btn-success" onClick={this.proceed}>Proceed</button>
                            </div>
                        </div>
                    </div> */}
                    <MenuDisplay menuData={this.state.menuList}
                    finalOrder = {(data) => {this.addToCart(data)}}/>
                </div>
                
            </>
        )
    }

    async componentDidMount(){
        let prodid = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/${prodid}`)
        let prodData = await axios.get(`${menuUrl}/${prodid}`)
        this.setState({details:response.data[0], menuList:prodData.data})
    }
    
}

export default Details