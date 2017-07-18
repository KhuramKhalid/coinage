import React, { Component } from 'react';

const propTypes = {
    title: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string,
    withSubMenu: React.PropTypes.bool,
    isActive: React.PropTypes.bool
}

class NavBarLink extends Component {
    render() {
        return(
            <a href={this.props.url} className="nav-link">
                <i className={this.props.icon}></i>
                <span className="title"> {this.props.title} </span>
                <span className={this.props.withSubMenu ? (this.props.isActive ? "arrow open" : "arrow") : "" }></span>
            </a>
        );
    }
}

NavBarLink.PropTypes = propTypes;

export default NavBarLink;