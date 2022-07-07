import React, { useReducer, Component } from 'react';
import PropTypes from 'prop-types';
import classes from './sportTypes.module.scss';
import { useDispatch, useStore } from 'react-redux';
import {
  IMG_DIRECTORY,
  SPORTTYPES_IMGES_DIR,
} from '../../../../../store/actions/content';
import { fetchAllContentByType } from '../../../../../store/actions/contentSrc';
import Carusel from '../../../carusel/carusel';
import Coaches from '../coaches/coaches';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  // etc... other react-router-dom v6 hooks

  return (
    <WrappedComponent
      {...props}
      params={params}
      // etc...
    />
  );
};

class SportTypes extends Component {
  state = {
    sportTypesArr: [],
    header: null,
    name: null,
  };

  // Перед отрисовкой интерфейса, инициализация входных данных из Redux
  UNSAFE_componentWillMount() {
    const name = this.props?.params?.name;
    this.props.onFetchAllContentByType('sportTypes', name);
  }

  render() {
    let { sportTypesArr, header } = this.props;
    const name = this.props?.params?.name;
    sportTypesArr = sportTypesArr || [];
    // let sportTypeItem = sportTypesArr.contents?.find(
    //   (item) => item.name?.toLowerCase() === name?.toLowerCase()
    // );
    let sportTypeItem = sportTypesArr;

    const navClass = [];

    navClass.push('text-white');

    return (
      <div className="row">
        <Carusel />
        {sportTypeItem ? (
          <div className={navClass.join(' ')}>
            <h1 className="text-black">{header}</h1>
            <div
              className={classes.mainContent}
              style={{
                backgroundImage:
                  'url(' +
                  IMG_DIRECTORY +
                  SPORTTYPES_IMGES_DIR +
                  sportTypeItem.img +
                  ')',
              }}
            >
              <h2>{sportTypeItem.header}</h2>
              <h3>{sportTypeItem.content}</h3>
            </div>
            <Coaches sportType={sportTypeItem.name} />
          </div>
        ) : (
          <Coaches sportType={''} />
        )}
      </div>
    );
  }
}
// Регистрация параметров Redux
function mapStateToProps(state) {
  return {
    sportTypesArr: state.content.sportTypesArr,
    header: state.content.header,
  };
}

// Регистрация функций Redux
function mapDiaspatchToProps(dispatch) {
  return {
    onFetchAllContentByType: (seacrhFilter, name) =>
      dispatch(fetchAllContentByType(seacrhFilter, name)),
  };
}

// // Вывод Основного компонента с подключённым к нему Redux
export default withRouter(
  connect(mapStateToProps, mapDiaspatchToProps)(SportTypes)
);
