import React from  'react';
const Card = (props) => {
    return (

    <>

    <div className='col-12 mx-auto col-md-4 col-lg-3  itemBorder px-0 py-0'>
        <div className='row rowToPad'>
            <div className='col-12 col-md-12 col-lg-5 mt-lg-2 imgCss  pb-0 pt-0 '> 
                <img className='bg-warning img-fluid pt-0' src={props.image} alt={props.name} />
            </div>


            <div className='col-12 col-md-12 col-lg-7 px-lg-1 px-5' style={{color:'yellow',}}>
                <div className='pt-2 pb-2'>
                    <p className='title text-center'> {props.name}</p>

                    <p>{props.description}</p>
                </div>
            </div>
        </div>

            <div className='row '>
                <div className='col-12 col-md-6 col-lg-12 mx-auto d-flex flex-row justify-content-between px-5 py-2'>
                    <p className='priceTag'> {props.price}</p>
                    <button className='buttonClass bg-warning mb-1'>Buy</button>
                </div>
            </div>


                                
    </div>
        </>
    );
}

export default Card;
