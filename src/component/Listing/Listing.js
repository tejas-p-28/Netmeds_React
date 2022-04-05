import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import TypeFilter from '../filters/typeFilter';
import './Listing.css';
const prodUrl = "https://netmedsapi.herokuapp.com/category?type_id="

class Listing extends Component {
    constructor(props){
        super(props);

        this.state={
            productList:''
        }
    }

    setDataPerFilter = (data) => {
        this.setState({productList:data})
    }

    render(){
        return(
            <>
                <div className="container1">
                    <div className="filter">
                        <center><h3>Filter</h3></center>
                        <TypeFilter typeId={this.props.match.params.typeId}
                        prodPerSort={(data) => {this.setDataPerFilter(data)}}/>
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