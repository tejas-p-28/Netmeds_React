import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Details.css';

const url = "https://netmedsapi.herokuapp.com/details"

class Details extends Component {
    constructor(props) {
        super(props)

        this.state={
            details:''
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
                            <h1>{details.name}</h1>
                            <h3>We Provide Best Service</h3>
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
                                    <Tab>Contact</Tab>
                                </TabList>

                                <TabPanel>
                                    <h2>{details.name}</h2>
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
                </div>
                
            </>
        )
    }

    async componentDidMount(){
        let prodid = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/${prodid}`)
        this.setState({details:response.data[0]})
    }
    
}

export default Details