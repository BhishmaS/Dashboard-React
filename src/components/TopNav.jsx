import React from "react";

import logo from '../assets/logo.svg';
import config from '../appconfig.json';
import apiConstants from '../models/Constants';

export default class TopNav extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            groups: [],
        }
    }
    
    componentDidMount() {
        this.getGroups();
    }
    
    getGroups() {
        fetch(`${config.baseUrl}/${apiConstants.groupsIdentifier}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ groups: data });
            });
    }

    buildGroupOptions() {
        return this.state.groups.map(group => {
            return <option className="selector-option" 
                        key={group.id} value={group.id}>
                {group.label}
            </option>
        });
    }

    onGroupSelected(groupId) {
        this.props.onGroupSelected(groupId);
    }

    render() {
        return (
            <div className="top-nav">
                <img src={logo} alt="logo" height={30} width={120} />
                <select className="groupby-selector" 
                        value={this.state.selectedGroupId}
                        onChange={(event) => this.onGroupSelected(event.target.value)}>
                    {this.buildGroupOptions()}
                </select>
            </div>
        );
    }
}