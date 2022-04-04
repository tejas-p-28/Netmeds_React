import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class MenuDisplay extends Component {
    
    orderId = []

    addItem = (id) => {
        this.orderId.push(id)
        this.props.finalOrder(this.orderId)
    }

    renderCart = (orders) => {
        if (orders){
            return orders.map((item,index) => {
                return(
                    <b key={index}>{item} &nbsp; </b>
                )
            })
        }
    }

    renderMenu = ({menuData}) => {
        if(menuData){
            return menuData.map((item) => {
                return(
                    <div key={item.care_id}>
                        <div className="row" style={{marginTop:'2%'}}>
                            <div className="col-md-12">
                                <button className="btn btn-success" onClick={() => {this.addItem(item.care_id)}}>+</button>&nbsp;
                                <Link to={`/`} className="btn btn-danger">
                                    Back
                                </Link> &nbsp;
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    render(){
        console.log(this.props)
        return(
            <>
                <div className="" style={{display:'inline-block', marginTop:'0%'}}>
                    Item Number {this.renderCart(this.orderId)}Added
                </div>
                <div className="" style={{marginTop:'0%'}}>
                    {this.renderMenu(this.props)}
                </div>
                <hr/>
            </>
        )
    }
}

export default MenuDisplay 