import React from 'react'

export default function Navbar() {
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
                <div style={{ display: 'flex', marginLeft: '20px'}}>
                    <img alt='logo' src={process.env.PUBLIC_URL + '/images/bh_logo.png'} style={{ height: '40px', margin: '0 10px 0 0' }} />
                    <h5 style={{ margin: '5px 10px 0 10px' }}>Bharat Acharya Education</h5>
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav" style={{marginRight: '20px'}}>
                    <a class="nav-item nav-link active" href="#">Home <span class="sr-only"></span></a>
                    <a class="nav-item nav-link" href="#">Video lectures</a>
                    <a class="nav-item nav-link" href="#">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}
