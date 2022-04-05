import React,{Component} from 'react';
import axios from 'axios';

const url = "https://netmedsapi.herokuapp.com/filter";

class TypeFilter extends Component {

    typeFilter = (event) =>{
        let sortId = event.target.value;
        let typeId = this.props.typeId
        let sortUrl = ""
        if(sortId === ""){
            sortUrl = `${url}/${typeId}`
        }else{
            sortUrl = `${url}/${typeId}?sort=${sortId}`
        }
        axios.get(sortUrl)
        .then((res) => {this.props.prodPerSort(res.data)})
    }

    render(){
        return(
            <>
                <center>Type Filter</center>
                <div style={{marginLeft:'3%'}} onChange={this.typeFilter}>
                    <label className="radio">
                        <input type="radio" value="" name="type"/>All
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="1" name="type"/>Medicines
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="2" name="type"/>Healthcare Devices
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="3" name="type"/>Nutrition Drinks
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="4" name="type"/>Ayurvedic Care
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="5" name="type"/>Covid Essentials
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="6" name="type"/>Sexual Wellness
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="7" name="type"/>Home Care
                    </label><br/>
                    <label className="radio">
                        <input type="radio" value="8" name="type"/>Personal Care
                    </label>
                </div>
            </>
        )
    }
}

export default TypeFilter