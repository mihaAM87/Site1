import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './coaches.module.scss'
import { connect } from 'react-redux'
import {IMG_DIRECTORY, COACHES_IMGES_DIR} from '../../../../../store/actions/content'
import {fetchAllContentByType} from '../../../../../store/actions/contentSrc'

import Radium from 'radium'

class coaches extends Component {

  static contextTypes = {
    type: PropTypes.string,
    coachesArr: PropTypes.array
  }

  state = {
    coachesArr: []
  }

  componentWillMount() {
    this.props.coachesInit("coaches", this.state.coachesArr);
  }

  render() {
    let {coachesArr} = this.props;
    coachesArr = coachesArr || [];

        const itemClass = [];

        itemClass.push('col-md-4');

        if (coachesArr && coachesArr.contents && coachesArr.contents.length > 0) {
          coachesArr = coachesArr.contents.map(element => 
            {
                let itemKey = Math.random();
                return (
                  <div className={itemClass.join(' ')}>
                    <Card key={itemKey}>
                      <Card.Img variant="top" src={IMG_DIRECTORY + COACHES_IMGES_DIR + content.contents.img} />
                      <Card.Body>
                        <Card.Title>{content.contents.header}</Card.Title>
                        <Card.Text>
                          {content.contents.content}
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                  
                    
                )
            });
        }

      


         return (

          <div>Coaches</div>
            
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

export default connect(mapStateToProps, mapDispatchToProps)(coaches)