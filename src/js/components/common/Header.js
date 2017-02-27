import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as authActions from '../../actions/AuthenticationAction';

class Header extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.renderAuthButton = this.renderAuthButton.bind(this);
  }
  
  renderAuthButton() {
    
    const dispatchAuth = () => {
      this.props
        .actions
        .isAuthenticated(!this.props.authenticated);
    }
    
    if(!this.props.authenticated) {
        return <li><a 
          onClick={dispatchAuth}>Login</a> </li>
      } else {
        return <li><a 
          onClick={dispatchAuth} >Logout </a></li>
      }
  }
  
  render() {
    console.log(this.props.authenticated)
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo right">Logo</Link>
            <ul className="left hide-on-med-and-down">
              <li><Link to="dashboard">Dashboard</Link></li>
              <li><Link to="resource">Resource</Link></li>
              {this.renderAuthButton()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);