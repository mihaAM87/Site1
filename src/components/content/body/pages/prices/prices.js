import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './prices.module.scss';
import { connect } from 'react-redux';
import {
  IMG_DIRECTORY,
  COACHES_IMGES_DIR,
} from '../../../../../store/actions/content';
import { fetchAllContentByType } from '../../../../../store/actions/contentSrc';
import Card from 'react-bootstrap/Card';

import Radium from 'radium';

class prices extends Component {
  static contextTypes = {
    type: PropTypes.string,
    pricesArr: PropTypes.array,
  };

  state = {
    pricesArr: [],
  };

  componentWillMount() {
    this.props.pricesInit('prices', this.state.pricesArr);
  }

  render() {
    let { pricesArr } = this.props;
    pricesArr = pricesArr || [];

    const itemClass = [];

    itemClass.push('col-md-3');
    itemClass.push(classes.itemImg);

    if (pricesArr && pricesArr.contents && pricesArr.contents.length > 0) {
      pricesArr = pricesArr.contents.map((element) => {
        let itemKey = Math.random();
        return (
          <div className={itemClass.join(' ')}>
            <Card key={itemKey} className={classes.itemImg}>
              <Card.Body>
                <Card.Title>
                  <h3>{element.header}</h3>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p>{element.content.conditions}</p>
                </Card.Subtitle>
                <Card.Text>
                  <h2>{element.content.price}.</h2>
                </Card.Text>
                <button className="btn btn-light">Купить</button>
              </Card.Body>
            </Card>
          </div>
        );
      });
    }

    return (
      <div className="conteiner">
        <div className="row">
          <h1>Стоимость тренировок</h1>
          {pricesArr}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    pricesArr: state.content.pricesArr,
    loading: state.content.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pricesInit: (type, pricesArr) =>
      dispatch(fetchAllContentByType(type, pricesArr)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(prices);
