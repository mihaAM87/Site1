import React, { Component } from 'react';
import { connect } from 'react-redux';

class groupTypes extends Component {
  static contextTypes = {};

  state = {};

  componentWillMount() {}

  render() {
    return <div>GroupTypes</div>;
  }
}
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(groupTypes);
