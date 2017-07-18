import React, { Component } from 'react';

import NavBar from './NavBar';
import NavBarLink from './NavBarLink';

const contextTypes = {
  router: React.PropTypes.object,
}

const propTypes = {
    id: React.PropTypes.number.isRequired,
    key: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    icon: React.PropTypes.string,
    submenu: React.PropTypes.array
}

class NavBarItem extends Component {

    render() {

        var isActive = this.context.router.isActive(this.props.url.replace('#', ''));

        var withSubMenu = false;

        if (this.props.submenu) { withSubMenu = true; }

        var content = [<NavBarLink title={this.props.title} url={this.props.url} icon={this.props.icon} broadcasterId={this.props.broadcasterId} 
            key={this.props.id} isActive={isActive} withSubMenu={withSubMenu} changeChannel={this.props.changeChannel} />];

        var props = this.props;

        if (withSubMenu) {
            content.push(<NavBar items={this.props.submenu} menuclass="sub-menu" key={this.props.submenu.length + 1} changeChannel={this.props.changeChannel} />);
        }

        return (
            <li key={this.props.id} className={isActive ? "nav-item active open" : "nav-item"}>{content}</li>
        );
    }
}

NavBarItem.PropTypes = propTypes;
NavBarItem.contextTypes = contextTypes;

export default NavBarItem;