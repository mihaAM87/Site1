import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { fetchAllContentByType } from '../../../../store/actions/contentSrc';
import { useDispatch, useStore } from 'react-redux';

export default function MyMenu() {
  const store = useStore();
  const dispatch = useDispatch();

  dispatch(fetchAllContentByType('sportTypes'));

  let { sportTypesArr } = store.getState().content;
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
            <NavDropdown title="Виды спорта" id="basic-nav-dropdown">
              {sportTypesArr}
            </NavDropdown>
            <Nav.Link as={NavLink} to="/schedule">
              Расписание
            </Nav.Link>
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
