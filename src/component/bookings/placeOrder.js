import React,{Component} from 'react';
import './placeOrder.css';
import Header from '../../Header';

const url = "https://netmedsapi.herokuapp.com/menuItem";
const postData = "https://netmedsapi.herokuapp.com/placeorder"

class placeOrder extends Component{
    constructor(props){
        super(props);

        let userData = sessionStorage.getItem('userInfo')

        this.state={
            id:Math.floor(Math.random()*100000),
            product_name:this.props.match.params.prodName,
            name:userData? userData.split(',')[0]:'',
            email:userData? userData.split(',')[1]:'',
            cost:0,
            phone:userData? userData.split(',')[2]:'',
            address:'',
            menuItem:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    checkout = () => {
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('menu');
        fetch(postData,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        // .then(this.props.history.push('/viewBooking'))
        console.log('order taken')
    }


    renderMenu = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="orderItems" key={item.care_id}>
                        <img src={item.image} alt={item.name}/>
                        <p>{item.name}</p>
                        <p>Rs. {item.discount_cost}</p>
                    </div>
                )
            })
        }
    }

    render(){
        if(sessionStorage.getItem('loginStatus') === 'loggedOut'){
            return(
                <>
                    <Header/>
                    <center>
                        <h2>Login first to Place Order</h2>
                    </center>
                </>
            )
        }
        let abortController = new AbortController();
        abortController.abort();
        console.log(this.state)
        return(
            <>
                <Header/>
                <div className="container" style={{border:'3px solid #3390ec', marginTop:'3%', height:'auto'}}>
                        <div className="panel-heading">
                            <h4 style={{marginTop:'1%'}}>Your Order of {this.props.match.params.prodName}</h4>
                        </div>
                        <div className="panel-body">
                            <form action="https://developerpayment.herokuapp.com/paynow" method="POST">
                                <input type="hidden" name="cost" value={this.state.cost}/>
                                <input type="hidden" name="id" value={this.state.id}/>
                                <input type="hidden" name="hotel_name" value={this.state.product_name}/>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="fname">Name</label>
                                        <input id="fname" name="name" className="form-control"
                                        value={this.state.name} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="email">Email</label>
                                        <input id="email" name="email" className="form-control" 
                                        value={this.state.email} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="phone">Phone</label>
                                        <input id="phone" name="phone" className="form-control" 
                                        value={this.state.phone} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="address">Address</label>
                                        <input id="add" name="address" className="form-control" 
                                        value={this.state.address} onChange={this.handleChange}/>
                                    </div>
                                    {this.renderMenu(this.state.menuItem)}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h2>Total Price is Rs.{this.state.cost}</h2>
                                        </div>
                                    </div>
                                    <button className="btn btn-success" style={{height:'40px', width:'90px', marginLeft:'1%', marginBottom:'1%'}} onClick={this.checkout}>Checkout</button>
                                </div>
                            </form>
                        </div>
                </div>
            </>
        )
    }

    componentDidMount(){
        let menuItem = sessionStorage.getItem('menu')
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            let totalPrice = 0;
            data.map((item) => {
                totalPrice += parseFloat(item.discount_cost)
                return 'ok'
            })
            this.setState({cost: totalPrice, menuItem:data})
        })
    }

}

export default placeOrder