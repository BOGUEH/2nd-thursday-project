import React from 'react'
import {  Switch,  Route,  Link} from "react-router-dom";

function NavBar() {
    return (
        
        <div>
            <div className="container-fluid">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
              <a class="navbar-brand" href="home"><img src="../images/emergencylogo.jpeg" alt="logo" /></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"> </span>
          </button>
                <div className="float-left">   
                  <div class="collapse navbar-collapse" id="navbarNavDropdown" >
                        <ul class="navbar-nav">
                          <li class="nav-item">
                          <Link to ="/" className="navDetails">HOME</Link> 
                          </li>
                          <li class="nav-item">
                          <Link to ="/service" className="navDetails"> SERVICE</Link> 
                          </li>
                          <li class="nav-item">
                          <Link to ="/about"className="navDetails">ABOUT </Link>
                          </li>
                          <li class="nav-item">
                          <button> Download App</button> 
                          </li>
                        
                        </ul>
                    </div>
                  
                    </div>            
                </div>
            </nav>
          </div>

            

        </div>



    )
}

export default NavBar
