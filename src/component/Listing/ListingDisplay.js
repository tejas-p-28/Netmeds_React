import React from 'react';
import {Link} from 'react-router-dom'

const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0){
                return listData.map((item,index) => {
                    return(
                            <div className="col-md-6" style={{float:'left'}}>
                                <div className="card" style={{width:'80%', float:'left', marginLeft:'10%', height:'400px'}}>
                                    <Link to={`/details?prodId=${item._id}`} style={{color:'blue'}}><h4><b>{item.name}</b></h4></Link>
                                    <img src={item.image} alt={item.name}/>
                                        <div className="card-body">
                                            <p>{item.name}</p>
                                            <p>{item.discount_cost}</p>
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