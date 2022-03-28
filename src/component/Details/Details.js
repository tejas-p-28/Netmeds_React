import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Details.css';
import MenuDisplay from './menuDisplay';

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


    render(){
    
        //let details = this.state.details
        let details = this.state.details
        return(
            <>
                <div className="main">
                    <div className="tileImage">
                        <div className="imageClass">
                            <img src={this.state.details.image} alt={details.name}/>
                        </div>
                    </div>
                    <div className="tileContent">
                        <div className="content">
                            <h3><u>{details.name}</u></h3>
                            <p>Old Price: <b>{details.original_cost}</b></p>
                            <p>New Price: <b>{details.discount_cost}</b></p>
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
                                    <p>Rating: {details.average_rating}</p>
                                </TabPanel>
                                
                            </Tabs>
                            <Link to={`/`} className="btn btn-danger">
                                Back
                            </Link> &nbsp;
                            <button className="btn btn-success">Proceed</button>
                            </div>
                        </div>
                    </div>
                    <MenuDisplay menuData={this.state.menuList}/>
                </div>
                
            </>
        )
    }

    async componentDidMount(){
        let prodid = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/${prodid}`)
        let prodData = await axios.get(`${menuUrl}/${prodid}`)
        this.setState({details:response.data[0], menuList:prodData.menuData})
    }
    
}

export default Details