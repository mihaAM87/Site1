import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './right.module.scss'
import { connect } from 'react-redux'
import {MAIN_IMG, IMG_DIRECTORY} from '../../../../store/actions/content'
import Radium from 'radium'

class right extends Component {

    static contextTypes = {

    }

     render() {
        const imgClass = [];

        imgClass.push(classes.mainImg);
        return (
            <div className='col-md-6'>
                    <img src={IMG_DIRECTORY + MAIN_IMG} className={imgClass.join(' ')}></img>
            </div>
          )
    }
}

export default right