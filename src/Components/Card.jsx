import React from  'react';
const Card = (props) => {
    return (

    <>

    <div className='col-12 mx-auto col-md-4 col-lg-3  itemBorder px-0 py-0'>
        <div className='row rowToPad'>
            <div className='col-12 col-md-12 col-lg-5 mt-1 my-lg-5 imgCss  pb-0 pt-0 '> 
                <img className='bg-warning img-fluid pt-0' src={props.image} alt={props.name} />
            </div>


            <div className='col-12 col-md-12 col-lg-7' style={{color:'yellow',}}>
                <div className='pt-4 pb-3'>
                    <p className='title'> {props.name}</p>

                    <p>{props.description}</p>
                </div>

                <div className='d-flex f-row justify-content-between'>

                    <p className='priceTag'> {props.price}</p>
                    <button className='buttonClass bg-warning mb-1'>Buy</button>
                </div>

            </div>


                                
        </div>
    </div>
        </>
    );
}

export default Card;
