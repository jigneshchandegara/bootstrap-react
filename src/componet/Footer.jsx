import React from 'react'

const Footer = () => {
    return (
        <>
            <section class="footer">
                <div class="container">
                    <div class="row ">
                        <div class="col-4 text-center">
                            <h4 >Features</h4>
                            <p className='light pe-6 fs-6'>Lorem ipsum</p>
                            <p className='light pe-6 fs-6'>eveniet iusto</p>
                            <p className='light pe-6 fs-6'>dolorum distinctio</p>
                        </div>
                        <div class="col-4 text-center">
                            <h4 >Quick Contact</h4>
                            <p><i class="fas fa-phone  fs-6"></i> +91 9854332456</p>
                            <p><i class="fas fa-envelope-open-text  fs-6"></i> support@triptok.com</p>
                            <p><i class="fas fa-home  fs-6"></i> XYZ Colony, BLR-68, IND</p>
                        </div>
                        <div class="col-4 text-center">
                            <h4 >Follw us</h4>
                            <p><i class="fab fa-facebook  fs-6"></i> Facebook</p>
                            <p><i class="fab fa-twitter-square  fs-6"></i> Twitter</p>
                            <p><i class="fab fa-instagram-square fs-6"></i> Instagram</p>
                        </div>
                    </div>
                    <hr className='mt-5 bg-white' />
                    <p class="text-center">Copyright &copy; Triptok</p>
                </div>
            </section>
        </>
    )
}

export default Footer