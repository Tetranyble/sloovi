import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderStyle.css';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      );
    }
  }

  renderHeader = () =>{
    return (
      <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          Sloovi
        </Link>
  
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
          <li><Link to="/feature" className="nav-link px-2 link-dark">Features</Link></li>
        </ul>
  
        <div className="col-md-3 text-end">
          <Link to="/signin" className="btn btn-outline-primary me-2">Login</Link>
          <Link to="/signup" className="btn btn-primary">Sign-up</Link>
        </div>
      </header>
    </div>
    );
  }

  render() {
    return this.renderHeader();
    
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
