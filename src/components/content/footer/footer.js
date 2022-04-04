import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './footer.module.scss'
import { connect } from 'react-redux'
import {LOGOTYPE} from '../../../store/actions/content'
import Radium from 'radium'

class footer extends Component {

    static contextTypes = {

    }

     render() {
        const mainClass = [];

        mainClass.push('container');
        mainClass.push(classes.blackBackground);
        mainClass.push(classes.whiteColor);
        return (
            <div className={mainClass.join(' ')} >
              
                <h4>+7 (964) 763-21-29</h4>
                <h5><span className={classes.redColor}>Тренировка</span> (с) 2022. Все права защищены.</h5>
              
            </div>
          )
    }
}

export default footer