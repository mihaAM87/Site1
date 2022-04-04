import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './sportTypes.module.scss'
import { connect } from 'react-redux'
import {IMG_DIRECTORY, SPORTTYPES_IMGES_DIR} from '../../../../../store/actions/content'
import {fetchAllContentByType} from '../../../../../store/actions/contentSrc'

import Radium from 'radium'

class sportTypes extends Component {

    static contextTypes = {
      type: PropTypes.string,
      sportType: PropTypes.array
    }

    state = {
      sportType: []
    }

    componentWillMount() {
      this.props.sportTypeInit("sportTypes", this.state.sportType, this.props.match.params.id);
    }

     render() {

      let {sportType} = this.props;
        sportType = sportType || [];

        const navClass = [];

        navClass.push('row');
        navClass.push('text-white');
        navClass.push(classes.mainContent);
        let itemKey = Math.random();
        return (

          <div key={itemKey} className={navClass.join(' ')} style={{backgroundImage: "url(" + IMG_DIRECTORY + SPORTTYPES_IMGES_DIR + sportType.img + ")"}}>
            <h2>{sportType.header}</h2>
            <p>{sportType.content}</p>
          </div>
            
         )
     }
}
function mapStateToProps(state) {
    return {
        sportType: state.content.sportType,
        loading: state.content.loading
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        sportTypeInit: (type, sportType, id) => dispatch(fetchAllContentByType(type, sportType, id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(sportTypes)