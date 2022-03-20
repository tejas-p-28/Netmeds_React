import React from 'react';


const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0){
                return listData.map((item,index) => {
                    return(
                        <div className="card">
                            <img src={item.image} alt={item.name}/>
                                <div className="card-body">
                                    <p>{item.name}</p>
                                    <p>{item.discount_cost}</p>
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