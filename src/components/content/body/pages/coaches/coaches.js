import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  IMG_DIRECTORY,
  COACHES_IMGES_DIR,
} from '../../../../../store/actions/content';
import { fetchAllContentByType } from '../../../../../store/actions/contentSrc';
import Card from 'react-bootstrap/Card';
import Carusel from '../../../carusel/carusel';

class coaches extends Component {
  static contextTypes = {
    type: PropTypes.string,
    coachesArr: PropTypes.array,
    sportTypeName: PropTypes.string,
    sportType: PropTypes.string,
  };

  state = {
    coachesArr: [],
    sportType: null,
  };

  UNSAFE_componentWillMount() {
    this.props.coachesInit('coaches');
  }

  render() {
    let { coachesArr, sportType } = this.props;
    coachesArr = coachesArr || [];

    const itemClass = [];

    itemClass.push('col-md-4');

    if (sportType && sportType != '') {
      coachesArr = coachesArr?.contents?.filter(
        (item) => item.contents.type.toLowerCase() === sportType?.toLowerCase()
      );
    } else {
      coachesArr = coachesArr?.contents;
    }

    if (coachesArr && coachesArr.length > 0) {
      coachesArr = coachesArr.map((element) => {
        let elementContents = element.contents;
        let itemKey = Math.random();
        return (
          <div className={itemClass.join(' ')} key={itemKey}>
            <Card>
              <Card.Img
                variant="top"
                src={IMG_DIRECTORY + COACHES_IMGES_DIR + elementContents.img}
              />
              <Card.Body>
                <Card.Title>{elementContents.header}</Card.Title>
                <Card.Text>{elementContents.content}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
                <button
                  className="form-control btn btn-primary"
                  variant="primary"
                  onClick={this.onOpen}
                >
                  Записаться
                </button>
              </Card.Body>
            </Card>
          </div>
        );
      });
    }

    return (
      <div className="row">
        {!sportType || sportType == '' ? <Carusel /> : <br />}

        <div className="conteiner">
          <div className="row">{coachesArr ? coachesArr : <br />}</div>
        </div>
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
    coachesInit: (type, coachesArr) => dispatch(fetchAllContentByType(type)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(coaches);
