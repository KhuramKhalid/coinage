import React, { Component } from 'react';
import NavBar from './NavBar';

var coinageMenu = [
    {
        title: 'Coinage',
        url: '#/',
        icon: 'fa fa-btc',
        id: '11', 
        broadcasterId:0,
        submenu: [
            {
                title: 'Reports',
                url: '#/reports',
                icon: 'icon-bar-chart',
                id: '111'
            }
        ]
    }
]

class MenuSideBar extends React.PureComponent {

    constructor() {
        super();
        this.state = { menu: coinageMenu };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        return (
            <div className='page-sidebar-wrapper'>
                <div className='page-sidebar navbar-collapse collapse'>
                    <NavBar items={this.state.menu} {...this.props} menuclass='page-sidebar-menu' />
                </div>
            </div>
        );
    }
}

export default MenuSideBar;
