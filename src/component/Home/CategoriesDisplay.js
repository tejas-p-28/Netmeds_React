import React from 'react';
import {Link} from 'react-router-dom';
import './Categories.css'

const CategoriesDisplay = (props) => {

    const listProduct = ({productData}) => {
        if(productData){
            return productData.map((item) => {
                return(
                    <>
                        <Link to={`/listing/${item.type_id}`} key={item.type_id}>
                            <div className="col-md-4" style={{float:'left'}}>
                                <div className="card" style={{width:'80%'}}>
                                        <img src={item.image} alt={item.products_name} style={{width:'100%'}}/>
                                    <p style={{color:'black', fontSize:'20px'}}>{item.products_name}</p>
                                </div>
                            </div>
                           
                        </Link>
                    </>
                    
                )
            })
        }

    }

    return(
        <>
            {listProduct(props)}
        </>
    )
}

export default CategoriesDisplay