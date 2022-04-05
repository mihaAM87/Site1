import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './header.module.scss'
import Caption from './caption/caption'
import MyMenu from './myMenu/myMenu'
import {NavbarBrand} from 'react-bootstrap';
import { Outlet, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import Radium from 'radium'

class header extends Component {

    static contextTypes = {

    }

     render() {

        
        return (
            <div>
              <Caption />
              <MyMenu />
            </div>
          )
    }
}

export default header