import React from "react";

export default class MenuContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuContent: [],
        };
    }

    componentDidMount() {
        this.buildMenuContent();
    }

    componentDidUpdate(prevProps) {
        if (this.props.content !== prevProps.content) {
            this.buildMenuContent(this.props.content);
        }
    }

    buildMenuContent(content) {
        if (content) {
            let menuContent = [];
            Object.keys(content).forEach(key => {
                let subContent = <></>;
                if (key === 'budget') {
                    subContent = <p className="content"><b>{content[key].data.value}</b> minimum recommended buget to reduce pay equity gap</p>;
                }
    
                if (key === 'employeeComparison') {
                    subContent = <p className="content">{content[key].data.label} make up <b>{content[key].data.value}</b> of employees</p>;
                }
    
                if (key === 'payEquityGap') {
                    const data = content[key].data;
                    subContent = <p className="content">{data.minority.label} earn <b>{data.minority.value}</b> for every <b>{data.majority.value}</b> earned by comparable {data.majority.label}</p>;
                }
    
                const htmlContent = <div className="col-default-3" key={key}>
                    <div className="card">
                        <div className="card-body">
                            <label className="label">{content[key].label}</label>
                            {subContent}
                        </div>
                    </div>
                </div>;
                menuContent.push(htmlContent);
            });

            this.setState({menuContent: menuContent});
        }
    }

    render() {
        return (
            <div className="menu-content">
                <div className="row">{this.state.menuContent}</div>
            </div>
        );
    }
}