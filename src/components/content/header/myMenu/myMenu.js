import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllContentByType } from '../../../../store/actions/contentSrc';

class myMenu extends Component {
  static contextTypes = {
    type: PropTypes.string,
    sportTypesArr: PropTypes.array,
  };

  state = {
    sportTypesArr: [],
  };

  UNSAFE_componentWillMount() {
    this.props.sportTypesInit('sportTypes', this.state.sportTypesArr);
  }

  render() {
    let { sportTypesArr } = this.props;
    sportTypesArr = sportTypesArr || [];

    const navClass = [];

    navClass.push('row');

    if (
      sportTypesArr &&
      sportTypesArr.contents &&
      sportTypesArr.contents.length > 0 &&
      Link
    ) {
      sportTypesArr = sportTypesArr.contents.map((element) => {
        return (
          <NavDropdown.Item as={NavLink} to={'/sportTypes/' + element.name}>
            {element.header}
          </NavDropdown.Item>
        );
      });
    }

    return (
      <Navbar bg="danger" expand="lg" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                as={NavLink}
                title="Виды спорта"
                id="basic-nav-dropdown"
              >
                {sportTypesArr}
              </NavDropdown>
              <Nav.Link as={NavLink} to="/prices">
                Стоимость
              </Nav.Link>
              <Nav.Link as={NavLink} to="/coaches">
                Тренеры
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contacts">
                Контакты
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    sportTypesArr: state.content.sportTypesArr,
    loading: state.content.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sportTypesInit: (type, sportTypesArr) =>
      dispatch(fetchAllContentByType(type, sportTypesArr)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(myMenu);
