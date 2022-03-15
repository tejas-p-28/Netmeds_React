import React from 'react';

const ListingDisplay = (props) => {

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0){
                return listData.map((item) => {
                    return(
                        <div className="filterContent">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <img src={item.image}/>
                                            <div className="card-body">

                                            </div>
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
}

export default ListingDisplay