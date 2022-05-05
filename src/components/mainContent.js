import React, { Component } from 'react';
import classes from './mainContent.module.scss';
import Header from './content/header/header';
import MainImage from './content/mainImage/mainImage';
import Body from './content/body/body';
import Footer from './content/footer/footer';
import Modal from './content/modal/modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useStore } from 'react-redux';

export default function MainContent() {
  const store = useStore();
  let mainClass = [];
  let headerClass = [];

  mainClass.push('row');
  mainClass.push(classes.mainClass);

  headerClass.push('row');
  headerClass.push(classes.headerClass);

  return (
    <div className="row">
      <div className={headerClass.join(' ')}>
        <Header />
      </div>
      <div className={mainClass.join(' ')}>
        <MainImage />

        <Body />

        <Footer />
        <Modal />
      </div>
    </div>
  );
}
