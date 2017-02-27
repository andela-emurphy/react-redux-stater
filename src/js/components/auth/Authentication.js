import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as authActions from '../../actions/AuthenticationAction'

export default (ComposedComponent)  => {
  class Authentication extends React.Component {
    
    componentWillMount() {
      if(!this.props.authenticated) {
        this.context.router.push('/')
      }
    }
    
    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
        this.context.router.push('/')
      }
    }
    render() {
      console.log(this.props.authenticated, this.context);
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }
  
  Authentication.contextTypes = {
    router: React.PropTypes.object
  }
  const mapStateToProps = (state) => {
    return {
      authenticated: state.authenticated
    }
  }
  
  const mapDispatchToProp = (dispatch) => {
    return {
      actions: bindActionCreators(authActions, dispatch)
    }
  }
  return connect(mapStateToProps, mapDispatchToProp)(Authentication);
}