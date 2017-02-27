import React from 'react';
import { Link } from 'react-router'

class HomePage extends React.Component {
  render() {
    return(
      <div>
        <div className="container" >
          <div className="row">
            <div className="col m12">
              <h1>Welcome to my homepage</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;