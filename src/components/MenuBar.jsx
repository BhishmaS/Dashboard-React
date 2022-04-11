import React from "react";

import MenuContent from './MenuContent';
import config from '../appconfig.json';

export default class MenuBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menuItems: [],
            menuContent: {},
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
    
                    this.setState({ menuItems: menuItems });
                });
        }
    }

    buildMenuItems() {
        return this.state.menuItems.map(menuItem => {
            return <li className="menubar-list-item" //${this.props.show === tabId ? 'active' : ''}
                        key={menuItem.id}
                        onClick={() => this.updateMenuContent(menuItem.content)}>
                <a className="menu-link">{menuItem.name}</a>
            </li>;
        });
    }

    updateMenuContent(content) {
        this.setState({ menuContent: content });
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