import React, { Component } from 'react';
import classes from './mainContent.module.scss';
import Header from './content/header/header';
import MainImage from './content/mainImage/mainImage';
import Carusel from './content/carusel/carusel';
import Body from './content/body/body';
import Footer from './content/footer/footer';

class mainContent extends Component {
  state = {};

  render() {
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
          <Carusel />

          <Body />

          <Footer />
        </div>
      </div>
    );
  }
}

export default mainContent;
