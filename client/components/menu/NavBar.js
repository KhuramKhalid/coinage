import React, { Component } from 'react';

import NavBarItem from './NavBarItem';

const propTypes = {
    items: React.PropTypes.array.isRequired,
    menuclass: React.PropTypes.string.isRequired
}

class NavBar extends Component {
    render() {
        var items = this.props.items.map((item, index) => <NavBarItem title={item.title} url={item.url} 
            submenu={item.submenu} icon={item.icon} key={item.id} id={item.id} broadcasterId={item.broadcasterId} changeChannel={this.props.changeChannel} />);
        return (
            <ul className={this.props.menuclass}>
                {items}
            </ul>
        );
    }
}

NavBar.PropTypes = propTypes;

export default NavBar;