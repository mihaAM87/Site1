import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './header.module.scss'
import {NavbarBrand} from 'react-bootstrap';
import { Outlet, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import {LOGOTYPE, METRO_IMG, IMG_DIRECTORY} from '../../../store/actions/content'
import Radium from 'radium'

class header extends Component {

    static contextTypes = {

    }

     render() {
        return (
            <div className='container' >
              <div className='row align-items-center'>
                  <div className="col-md-4">
                    <NavbarBrand as={NavLink} to='/'>
                      <img src={IMG_DIRECTORY + LOGOTYPE} className={classes.logotype}></img>
                    </NavbarBrand>
                    
                  </div>
                  <div className="col-md-3">
                    <img src={IMG_DIRECTORY + METRO_IMG} className={classes.metroImg}></img>
                    <span>г. Москва, Краснодонская улица, 39, м. "Волжская", м. "Люблино"</span>
                  </div>
                  <div className="col-md-2">
                    <div>
                      <span>MikhailAA1@yandex.ru</span>
                      <br />
                      <span>+7 (964) 763-21-29</span>
                    </div>
                    
                  </div>
                  <div className="col-md-2">
                    <button className="form-control btn btn-dark">Заказать Звонок</button>
                  </div>
                  <div className="col-md-1">
                    
                  </div>
              </div>
              
            </div>
          )
    }
}

export default header