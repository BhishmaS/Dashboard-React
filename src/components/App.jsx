import React from "react";

import '../styles/_app.scss';
import TopNav from './TopNav';
import MenuBar from './MenuBar';

class App extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        selectedGroupId: '',
      };
    };

    updateMenu(groupId) {
        this.setState({selectedGroupId: groupId});
    }

    render() {
        return (
            <>
                <TopNav onGroupSelected={this.updateMenu.bind(this)}></TopNav>
                <MenuBar selectedGroupId={this.state.selectedGroupId}></MenuBar>
            </>
        );
    }
}

export default App;
