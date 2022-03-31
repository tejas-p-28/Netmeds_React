import React,{Component} from 'react'

class MenuDisplay extends Component {
    
    orderId = []

    addItem = (id) => {
        this.orderId.push(id)
        this.props.finalOrder(this.orderId)
    }
    removeItem = (id) => {
        if(this.orderId.indexOf(id) > -1){
            this.orderId.splice(this.orderId.indexOf(id),1)
        }
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
                            <div className="col-md-7">
                                <b>{item.care_id}.</b>
                                <img src={item.image} alt={item.name} style={{width:'80', height:'80'}}/>
                                &nbsp; {item.name}- Rs. {item.discount_cost}
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-success" onClick={() => {this.addItem(item.care_id)}}>+</button>&nbsp;
                                <button className="btn btn-danger" onClick={() => {this.removeItem(item.care_id)}}>-</button>
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
                <div className="col-md-12" style={{display:'inline-block',backgroundColor:'#dff0d8'}}>
                    <h1>Item Added</h1>
                    Item Number {this.renderCart(this.orderId)}Added
                </div> 
                <div className="col-md-12" style={{backgroundColor:'#d9edf7', marginTop:'0%'}}>
                    {this.renderMenu(this.props)}
                </div>
                <hr/>
            </>
        )
    }
}

export default MenuDisplay 