import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-center text-white">

                <div className="container p-4 pb-0" id="footer_container">

                    <section className="mb-4">

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-facebook-f"></i></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-twitter"></i></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-google"></i></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram"></i></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-linkedin-in"></i></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-github"></i></a>
                    </section>
                </div>
                <div className="text-center p-3">
                    © 2023 Copyright:
                    {/* <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
                </div>
            </footer>
        </>
    );
}
// style="background-color: rgba(0, 0, 0, 0.2)