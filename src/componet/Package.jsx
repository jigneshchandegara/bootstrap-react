import React from 'react'
import { packagedata } from './data/package';

const Package = () => {
    return (
        <>
            <section className='container my-4'>
                <div className="row"><h3 className='text-center'>Tour package</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corporis consequatur sit at ullam quis maiores animi laudantium qui exercitationem est dolorem dolore nisi similique voluptate quos facere tenetur optio, perferendis aperiam et! Corrupti nihil, voluptate saepe beatae ratione similique aperiam mollitia vel sequi ipsa, velit molestias sunt nemo dolore ut officiis. Fugit adipisci, necessitatibus eveniet sapiente exercitationem magnam earum ratione incidunt qui in laborum inventore, dolor cupiditate? Officia esse ullam voluptatibus labore quia harum delectus quam vero sequi doloremque expedita voluptates provident alias, vel possimus, similique sit autem atque debitis quidem minima molestiae magnam. Quae id sunt dignissimos doloribus.</p>
                    <div className='row justify-content-around'>
                        {
                            packagedata.map((value, index) => {
                                return (
                                    <div class="card col-3 m-2" >
                                        <img src={value.img} class="card-img-top" />
                                        <div class="card-body">
                                            <h5 class="card-title">{value.country}</h5>
                                            <p class="card-text">price :- {value.price}</p>
                                            <p class="card-text">Days :- {value.days}</p>
                                            <button class="btn btn-primary">Read More</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div></div>
            </section>
        </>
    )
}

export default Package