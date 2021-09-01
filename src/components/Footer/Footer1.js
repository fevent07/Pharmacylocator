import React from "react";
import "../Footer/Footer.css"
const Footer1 = () => {
    return (
        <footer class="footer" style={{ marginTop: '50px' }}>
            <div  >
                {/* <section class="mb-4">
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-facebook-f"></i
                    ></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-twitter"></i
                    ></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-google"></i
                    ></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-instagram"></i
                    ></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-linkedin-in"></i
                    ></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-github"></i
                    ></a>
                </section> */}

                {/* <section class="mb-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                        eum harum corrupti dicta, aliquam sequi voluptate quas.
                    </p>
                </section> */}
                <section class="">
                    <br />
                    <div class="row" style={{ marginLeft: "10px" }}>
                        <div class="col-lg-6 col-md-6 mb-4 mb-md-0">
                            <h5 class="text">About Us</h5>

                            <ul class="list-unstyled mb-0">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                                    repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                                    eum harum corrupti dicta, aliquam sequi voluptate quas.
                                </p>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text">Contact Us</h5>

                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" class="text-white">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text"> Other Links</h5>

                            <ul class="list-unstyled mb-0">
                                <li >
                                    <i class="fab fa-facebook-f" />
                                    <a href="#!" class="text-white" style={{ marginLeft: '10px' }}>Link 1</a>
                                </li>
                                <li >
                                    <i class="fab fa-twitter" />
                                    <a href="#!" class="text-white" style={{ marginLeft: '10px' }}>Link 2</a>
                                </li>
                                <li >
                                    <i class="fab fa-instagram" />
                                    <a href="#!" class="text-white" style={{ marginLeft: '10px' }}>Link 3</a>
                                </li>
                                <li >
                                    <i class="fab fa-linkedin-in" />
                                    <a href="#!" class="text-white" style={{ marginLeft: '10px' }}>Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br /><br />
                </section>
            </div>
        </footer>

    );
}

export default Footer1;