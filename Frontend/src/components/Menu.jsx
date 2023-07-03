/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Menu.module.css'
import './assets/dashboard.css'
import './css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Menu = () => {

   
    return (
        
        <div class="sticky-top" > 
        <div class="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow ">
        <a class="navbar-brand bg-primary col-md-3 col-lg-2 me-0 px-3  " href="/" >
            
        <img width={76} height={70} src="images/rkc_progress.png"/>
        Текст0
            </a>
            
    
   
        <span class="form-control-dark w-100"></span>
      
    
    </div>
   
    <div class="container-fluid" >
    <div class="row" >
    <Nav expanded="true" title="Меню" id="basic-nav-dropdown" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3" style={{marginTop: "40px"}} >
                <ul class="nav flex-column" >
                              <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="/" >
                                  <span data-feather="home"></span>
                                  тут папа работает
                                </a>
                              </li>
                                            <li class="nav-item">
                            <a class="nav-link " href="/1">
                                <span data-feather="bar-chart-2"></span>
                                 Данил                    </a>
                        </li>
                                            <li class="nav-item">
                            <a class="nav-link " href="/2">
                                <span data-feather="bar-chart-2"></span>
                                текст3                         </a>
                        </li>
                         
                                    </ul>
            </div>
        </Nav>
        </div>
        </div>
        </div>
     
     
    );
}

export default Menu;
