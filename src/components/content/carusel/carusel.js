import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import PropTypes from 'prop-types'
import classes from './carusel.module.scss'
import { connect } from 'react-redux'
import {IMG_DIRECTORY} from '../../../store/actions/content'
import {fetchAllContentByType} from '../../../store/actions/contentSrc'
import Radium from 'radium'

class carusel extends Component {

    static contextTypes = {
        type: PropTypes.string,
        groupTypesArr: PropTypes.array
    }

    state = {
        groupTypesArr: []
    }

    componentWillMount() {
        this.props.groupTypesInit("groupTypes", this.state.groupTypesArr);
    }

     render() {

        let {groupTypesArr} = this.props;
        groupTypesArr = groupTypesArr || [];
        if (groupTypesArr && groupTypesArr.contents && groupTypesArr.contents.length > 0) {

            groupTypesArr = groupTypesArr.contents.map(element => 
                {
                    let itemClasses = [];
                    let imgClasses = [];
                    itemClasses.push('carousel-item');

                    if (element.name.toLowerCase() === 'женщины') {
                        itemClasses.push('active');
                    }

                    imgClasses.push(classes.mainImg);
                    imgClasses.push('d-block w-100');

                    let itemKey = Math.random();
                    
                    return (

                        <Carousel.Item>
                            <img
                                className={imgClasses.join(' ')}
                                src={IMG_DIRECTORY + element.contents.img}
                                alt={element.contents.header}
                            />
                            <Carousel.Caption>
                                <h3>{element.contents.header}</h3>
                                <p>{element.contents.content}.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    )
                });

                
                
        }

         return (

            <Carousel>
                {groupTypesArr}
            </Carousel>
         )
     }
}
function mapStateToProps(state) {
    return {
        groupTypesArr: state.content.groupTypesArr,
        loading: state.content.loading
      }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        groupTypesInit: (type, groupTypesArr) => dispatch(fetchAllContentByType(type, groupTypesArr))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(carusel)

