import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  IMG_DIRECTORY,
  COACHES_IMGES_DIR,
} from '../../../../../store/actions/content';
import { fetchAllContentByType } from '../../../../../store/actions/contentSrc';
import Card from 'react-bootstrap/Card';

class coaches extends Component {
  static contextTypes = {
    type: PropTypes.string,
    coachesArr: PropTypes.array,
  };

  state = {
    coachesArr: [],
  };

  UNSAFE_componentWillMount() {
    this.props.coachesInit('coaches', this.state.coachesArr);
  }

  render() {
    let { coachesArr } = this.props;
    coachesArr = coachesArr || [];

    const itemClass = [];

    itemClass.push('col-sm-6 col-md-4');

    if (coachesArr && coachesArr.contents && coachesArr.contents.length > 0) {
      coachesArr = coachesArr.contents.map((element) => {
        let itemKey = Math.random();
        return (
          <div className={itemClass.join(' ')} key={itemKey}>
            <Card>
              <Card.Img
                variant="top"
                src={IMG_DIRECTORY + COACHES_IMGES_DIR + element.contents.img}
              />
              <Card.Body>
                <Card.Title>{element.contents.header}</Card.Title>
                <Card.Text>{element.contents.content}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
        );
      });
    }

    return (
      <div className="conteiner">
        <div className="row">{coachesArr}</div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    coachesArr: state.content.coachesArr,
    loading: state.content.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    coachesInit: (type, coachesArr) =>
      dispatch(fetchAllContentByType(type, coachesArr)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(coaches);
