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
                let htmlContent = <></>;
                if (key === 'budget') {
                    htmlContent = <div className="col-default-3" key={key}>
                        <div className="card">
                            <label className="label">{content[key].label}</label>
                            <p className="content">
                                <b>{content[key].data.value}</b> minimum recommended buget to reduce pay equity gap
                            </p>
                        </div>
                    </div>;
                }
    
                if (key === 'employeeComparison') {
                    const data = content[key].data;
                    htmlContent = <div className="col-default-3" key={key}>
                        <div className="card">
                            <label className="label">{content[key].label}</label>
                            <p className="content">{data.label} make up <b>{data.value}</b> of employees</p>
                        </div>
                    </div>;
                }
    
                if (key === 'payEquityGap') {
                    const data = content[key].data;
                    htmlContent = <div className="col-default-3" key={key}>
                        <div className="card">
                            <label className="label">{content[key].label}</label>
                            <p className="content">
                                {data.minority.label} earn <b>{data.minority.value}</b> for every <b>{data.majority.value}</b> earned by comparable {data.majority.label}
                            </p>
                        </div>
                    </div>;
                }
    
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