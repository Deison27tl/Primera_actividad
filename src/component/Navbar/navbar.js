import React from 'react';
import './styleNavbar.css'
import Logo from './html.png'

class navBar extends React.Component {
    render() {
        return (
                <nav className="navbar">
                    <img src={Logo} className='logo'/>
                    <h1 className="navbar__title ">Test HTML</h1>
                </nav>
        )
    }
}
export default navBar