import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
        <div className="page-header navbar navbar-fixed-top">
            <div className="page-header-inner">
                <div className="page-logo">
                    <a href="/coinage"><img src="images/coinage.png" alt="logo" className="logo-default" height={45}/></a>
                    <div className="menu-toggler sidebar-toggler hide">
                    </div>
                </div>
                <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse"
                    data-target=".navbar-collapse"> </a>
                <div className="page-actions"></div>
                <div className="page-top">
                    <div className="top-menu">
                        <ul className="nav navbar-nav pull-right">
                            <li className="separator"></li>
                            <li className="dropdown dropdown-user">
                                <a href="javascript: void(0)" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <span className="username username-hide-on-mobile"></span>
                                    <img alt="" className="img-circle" src="images/avatar.png"/> </a>
                                <ul className="dropdown-menu dropdown-menu-default">
                                    <li>
                                        <a href="javascript: void(0)"><i className="icon-key"></i> Settings </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Header;
