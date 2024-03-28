import React, { useState } from 'react'

const Contact = () => {
  const [data, setdata] = useState()
  let handle = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  const submit = () => {
    console.log(data);
  }
  return (
    <section className='container my-5'>
      <h2 className='text-center mb-4'>Contact Us</h2>
      <div className="row">
        <div className="col-6 text-center">
          <img src="https://img.etimg.com/thumb/width-440,height-380,imgsize-71822,resizemode-75,msid-103866158/magazines/panache/world-tourism-day-from-domestic-to-international-destinations-the-indian-traveller-is-going-places/a-survey-highlights-that-44-per-cent-of-indians-choose-online-travel-agencies-for-bookings.jpg" alt="" />
        </div>
        <div className="col-6">
          <input className="w-100 mb-2 border-0 border-bottom border-dark" type="text" name="name" placeholder="Your Name" onChange={handle} required /><br />
          <input className="w-100 my-3 border-0 border-bottom border-dark" type="email" name="email" placeholder="E-Mail" onChange={handle} required /><br />
          <textarea className="w-100 my-3 border-0 border-bottom border-dark" cols="30" rows="6" placeholder="Type Your Message" name="desc" onChange={handle} required ></textarea><br />
          <button className='btn btn-primary' onClick={submit}>Submit</button>
        </div>
      </div>
    </section>
  )
}

export default Contact