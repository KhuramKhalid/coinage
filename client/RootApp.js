/* core imports */
import React, { Component } from 'react';
import Firebase from './Firebase';

/* lineup components */
import Header from './components/Header';
import Footer from './components/Footer';
import MenuSideBar from './components/menu/MenuSideBar';

class RootApp extends Component {

  componentDidMount() {

    /* initialize Firebase client */
    Firebase.initialize(this.props);
  }

  render() {

    return (
      <div>
        
        <Header {...this.props}/>

        <div className="clearfix"></div>

        <div className="page-container">

          <a href="javascript: void(0)" className="page-quick-sidebar-toggler">
              <i className="icon-login"></i>
          </a>

          <MenuSideBar {...this.props} />

          <div className="page-content-wrapper">

            <div className="page-content">

              {React.cloneElement(this.props.children, this.props)}

            </div>

          </div>
          
        </div>

        <Footer/>

      </div>
    );
  }
}

export default RootApp;
