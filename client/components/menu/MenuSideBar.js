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
                title: 'Currencies',
                url: '#/currencies',
                icon: 'fa fa-money',
                id: '111'
            },
            {
                title: 'Assets',
                url: '#/assets',
                icon: 'icon-diamond',
                id: '112'
            },
            {
                title: 'Trending',
                url: '#/trending',
                icon: 'icon-graph',
                id: '113'
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
