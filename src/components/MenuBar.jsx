import React from "react";

import MenuContent from './MenuContent';
import config from '../appconfig.json';

export default class MenuBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menuItems: [],
            menuContent: {},
            currentTab: '',
        };
    }

    componentDidMount() {
        this.getMenuItems(this.props.selectedGroupId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedGroupId !== prevProps.selectedGroupId) {
            this.getMenuItems(this.props.selectedGroupId);
        }
    }
    
    getMenuItems(groupId) {
        if (groupId) {
            fetch(`${config.baseUrl}/${groupId}`)
                .then(res => res.json())
                .then(res => {
                    const menuItems = Object.keys(res.data).map(itemName => { 
                        return { 
                            id: itemName,
                            name: `${itemName[0].toUpperCase()}${itemName.slice(1)}`,
                            content: res.data[itemName]
                        };
                    });
                    
                    if (menuItems.length > 0) {
                        this.updateMenuContent(menuItems[0]);
                        this.setState({ menuItems: menuItems });
                    }
                })
                .catch(error => {
                    console.log(error);
                    // Need to do error Handling
                });
        }
    }

    buildMenuItems() {
        return this.state.menuItems.map(menuItem => {
            return <li className={`menubar-list-item ${this.state.currentTab === menuItem.id ? 'active' : ''}`}
                        key={menuItem.id}
                        onClick={() => this.updateMenuContent(menuItem)}>
                <a className="menu-link">{menuItem.name}</a>
            </li>;
        });
    }

    updateMenuContent(menuItem) {
        this.setState({ menuContent: menuItem.content, currentTab: menuItem.id });
    }

    render() {
        return (
            <>
                <nav className="menubar">
                    <ul className="menubar-list">
                        {this.buildMenuItems()}
                    </ul>
                </nav>
                <main className="app-body">
                    <MenuContent content={this.state.menuContent}></MenuContent>
                </main>
            </>
        );
    }
}