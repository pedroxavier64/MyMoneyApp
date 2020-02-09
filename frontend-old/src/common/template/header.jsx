import React from 'react'
import Navbar from '../template/navBar'

export default props => (
    <header className="main-header">
        <a href="/#/" className="logo">
            <span className="logo-mini"><b>My</b>M</span>
            <span className="logo-lg">
                <i className='fa fa-money'><b> My</b> Money</i>
            </span>
        </a>
        <nav className="navbar navbar-static-top">
            <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button"></a>
            <Navbar />
        </nav>
    </header>
)