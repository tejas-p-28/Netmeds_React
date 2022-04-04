import React,{Component} from 'react';
import axios from 'axios'
import orderDisplay from './orderDisplay'

const url = "https://netmedsapi.herokuapp.com/orders"

class viewOrder extends Component{
    constructor(props){
        super(props);

        rhis.state={
            orders:''
        }
    }
    render(){
        return(
            <orderDisplay orderData={this.state.orders}/>
        )
    }
    componentDidMount(){
        axios.get(`${url}`).then((res) => {this.setState({orders:res.data})})
    }
}

export default viewOrder;