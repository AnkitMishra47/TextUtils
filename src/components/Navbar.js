import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {

  


  return (
    <div>
  <nav className={`navbar navbar-expand-lg navbar-dark bg-${props.mode==='light' ? 'danger' : 'dark'}`}>
  <a className="navbar-brand mx-2" href="#">{props.title}</a>
  <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   
      <li className="nav-item active  mx-2" aria-current="page">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item mx-2">
        <a className="nav-link" href="#">{props.About}</a>
      </li>
    </ul>
   
    

    
 
    <div className={`form-check form-switch text-light mx-3`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'} Mode</label>
</div>
  </div>
</nav>
 </div>
  )
}

Navbar.propTypes = {
    title : PropTypes.string ,
    About : PropTypes.string 
}

Navbar.defaultProps = {
    title : 'Set Title',
    About : 'Set About us'  
}