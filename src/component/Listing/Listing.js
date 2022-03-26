import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import './Listing.css';
const prodUrl = "https://netmedsapi.herokuapp.com/category?type_id="

class Listing extends Component {
    constructor(props){
        super(props);

        this.state={
            productList:''
        }
    }
    render(){
        return(
            <>
                <div className="container1">
                    <div className="filter">
                        <h3>Filter</h3>
                    </div>
                    <div className="filterContent">
                        <ListingDisplay listData={this.state.productList}/>
                    </div>
                </div>
            </>
        )
    }
    componentDidMount(){
        let typeId = this.props.match.params.typeId;
        axios.get(`${prodUrl}${typeId}`)
        .then((res) => {this.setState({productList:res.data})})
    }
}

export default Listing