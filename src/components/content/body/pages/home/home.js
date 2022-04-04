import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './home.module.scss'
import { connect } from 'react-redux'
import {IMG_DIRECTORY} from '../../../../../store/actions/content'
import {fetchAllContentByType} from '../../../../../store/actions/contentSrc'

import Radium from 'radium'

class home extends Component {

    static contextTypes = {

    }

    state = {
      
    }

    componentWillMount() {
        
    }

     render() {

         return (

          <div>
            <h2><span className='text-danger'>Бокс</span> начинается здесь</h2>
          </div>
            
         )
     }
}
function mapStateToProps(state) {
    return {
        
      }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(home)