import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './mainImage.module.scss'
import Left from './left/left'
import Right from './right/right'
import { connect } from 'react-redux'
import Radium from 'radium'

class mainImage extends Component {

    static contextTypes = {

    }

     render() {
        const rowClass = [];

        rowClass.push('row');
        rowClass.push(classes.mainRow);
        // rowClass.push('d-flex align-items-stretch')
        return (
            <div className={rowClass.join(' ')}>
                <Left/>
                <Right/>               
            </div>
          )
    }
}

export default mainImage