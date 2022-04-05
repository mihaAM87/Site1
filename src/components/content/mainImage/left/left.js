import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './left.module.scss'
import { connect } from 'react-redux'
import Radium from 'radium'

class left extends Component {

    static contextTypes = {

    }

     render() {

        const mainClass = [];

        mainClass.push(classes.mainClass);
        mainClass.push('col-md-6 d-flex align-items-center justify-content-center')

        return (
            <div className={mainClass.join(' ')}>
                <div>
                    <h1 className="text-white d-flex justify-content-start col-md-12">Спорт</h1>
                    <h2 className="text-white d-flex justify-content-start col-md-12">Первая тренировка</h2>
                    <h2 className="text-white d-flex justify-content-start col-md-12">Бесплатно</h2>
                    <div className='row d-flex justify-content-start col-md-12'>
                        <div className='col-md-6'>
                            <button type='button' className='btn btn-light'>Записаться</button>
                        </div>
                        <div className='col-md-6'>
                            <a className="active text-white" href="#">Тренеры</a>
                        </div>
                        
                    </div>
                    
                </div>
                    
            </div>
          )
    }
}

export default left