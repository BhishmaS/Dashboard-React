import React from "react";

import logo from '../assets/logo.svg';

export default class TopNav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="top-nav">
                    <img src={logo} alt="logo" height={30} width={120} />
                    <select className="groupby-selector">
                        <option className="selector-option">Group 1</option>
                        <option className="selector-option">Group 2</option>
                    </select>
                </div>
            </>
        );
    }
}