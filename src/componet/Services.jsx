import React from 'react'
import { Ser } from './data/services'

const Services = () => {
    return (
        <>
            <section className=" mb-5">
                <h3 className='my-3 text-center'>Our services include</h3>
                <div class="container">
                    <div class="row">
                        {
                            Ser.map((value, index) => {
                                return (
                                    <div class="col-4 ">
                                        <div class="mt-5 text-center position-relative">
                                            <h3 class="title">{value.title}</h3>
                                            <p class="description">
                                                {value.des}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services