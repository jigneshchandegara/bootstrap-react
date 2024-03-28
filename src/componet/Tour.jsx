import React from 'react';
import { tourdata } from "./data/tour"

const Tour = () => {
    return (
        <>
            <section className='container'>
                <h3 className='text-center'>our tour country</h3>
                <div className='row justify-content-around'>
                    {
                        tourdata.map((value, index) => {
                            return (
                                <div class="card col-3 m-2" >
                                    <img src={value.img} class="card-img-top" />
                                    <div class="card-body">
                                        <h5 class="card-title">{value.country}</h5>
                                        <p class="card-text">{value.description}</p>
                                        <button class="btn btn-primary">Read More</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>



    )
}

export default Tour