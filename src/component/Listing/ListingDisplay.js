import React from 'react';
import {Link} from 'react-router-dom'

const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0){
                return listData.map((item,index) => {
                    return(
                            <div className="col-md-12" style={{float:'left'}} key={index}>
                                <div className="card" style={{width:'80%', float:'left', marginLeft:'10%', height:'320px'}}>
                                    <img src={item.image} alt={item.name} style={{float:'left', height:'280px', width:'45%', borderRadius:'10px'}}/>
                                        <div className="card-body" style={{float:'left',width:'55%'}}>
                                            <Link to={`/details?prodId=${item._id}`}><p style={{fontSize:'25px', color:'black', textDecoration:'none'}}><u><b>{item.name}</b></u></p></Link>
                                            <p>Rs. {item.discount_cost}</p>
                                            <p>Average Rating: {item.average_rating} By 459 Customers</p>
                                            <div className="labelDiv">
                                                <span className="label label-success"> {item.sortType[0].name} </span>    
                                            </div>
                                        </div>
                                </div>
                            </div>
                    )
                })
            }else{
                return(
                    <>
                        <h2>No Data Available</h2>
                    </>
                )
            }
        }else{
            return(
                <>
                    <img src="/images/loader.gif" alt="Loader"/>
                    <h1>Loading....</h1>
                </>
            )
        }
    }
    return(
        <>
            <div className="">
                {renderData(props)}
            </div>
        </>
    )
}

export default ListingDisplay