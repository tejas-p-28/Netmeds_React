import React,{Component} from 'react'


class MenuDisplay extends Component {
    orderId = []

    addItem = () => {}
    removeItem = () => {}

    renderMenu = ({menuData}) => {
        if(menuData){
            return menuData.map((item) => {
                return(
                    <div key={item.care_id}>
                        <div className="col-md-7">
                            <b>{item.name}</b>
                            {item.image}
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
                    Item Number Added
                </div>
                <div className="col-md-12" style={{backgroundColor:'#d9edf7'}}>
                    {this.renderMenu(this.props)}
                </div>
            </>
        )
    }
}

export default MenuDisplay 