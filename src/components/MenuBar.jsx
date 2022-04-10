import React from "react";

export default class MenuBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <nav className="menubar">
                    <ul className="menubar-list">
                        <li className="menubar-list-item" //${this.props.show === tabId ? 'active' : ''}
                            /*onClick={() => this.props.onNavigationChanged(tabId)}*/>
                            <a className="menu-link">Gender</a>
                        </li>
                        <li className="menubar-list-item active">
                            <a className="menu-link">Race</a>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
}