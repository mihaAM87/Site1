import React, { Component } from 'react';
import classes from './mainImage.module.scss';
import Left from './left/left';
import Right from './right/right';

export default function MainImage() {
  const rowClass = [];

  rowClass.push('row');
  rowClass.push(classes.mainRow);
  // rowClass.push('d-flex align-items-stretch')
  return (
    <div className={rowClass.join(' ')}>
      <Left />
      <Right />
    </div>
  );
}
