import React, { useState } from 'react';
import Card from './Card';
import Menu from './Menu';
import Button from './Button';


const Ucategories = ['All', ...new Set( Menu.map( (val) => {
    return val.category;
} ))]

// console.log(Ucategories[0]);


const Gallery= () => {

    const [Item,setItem]= useState(Menu);

    const filterItem = (cat) => {

        if (cat==='All') {
            setItem(Menu);
            return;
        }


        const updatedItem= Menu.filter( (val) => {

            

            return val.category===cat;
            })

            setItem(updatedItem);
        }


    return ( 
        <>

        <div className='container styling'>
            <h1 className='my-4 text-center header'>Order Your foods</h1>

            <div className='d-flex f-row justify-content-around align-items-center mt-15  buttondiv'> 
              <Button filterItem={filterItem}/>

             </div>
        </div>

        <div className='container stylingAll '>
            <div className='row mt-5'>
                <div className='col-11 mx-auto '>
                    <div className='row gy-5 mt-2 mb-4' >

                    { Item.map( (val) => {
                        const {id,name,category,image,price,description}=val;

                        return (
                            <Card image={image} id={id} name={name} category={category} price={price} description={description} />
                        )

                    } )


                    }
                    </div>
                </div>
            </div>
            

        </div>


        </>
    );
}

export default Gallery;
export {Ucategories};