import React from 'react';
import { Link } from 'react-router'


class Header extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo right">Logo</Link>
            <ul className="left hide-on-med-and-down">
              <li><Link to="dashboard">Dashboard</Link></li>
              <li><Link to="resource">Resource</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;