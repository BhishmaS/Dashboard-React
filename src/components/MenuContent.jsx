import React from "react";

export default class MenuContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="menu-content">
                    <div className="row">
                        <div className="col-default-3">
                            <div class="card">
                                <label className="label">Budget</label>
                                <p className="content">
                                Women earn 96¢ for every $1 earned by comparable Men
                                </p>
                            </div>
                        </div>
                        <div className="col-default-3">
                            <div class="card">
                                <label className="label">Budget</label>
                                <p className="content">
                                    Budget Budget Budget Budget Budget Budget Budget Budget Budget 
                                </p>
                            </div>
                        </div>
                        <div className="col-default-3">
                            <div class="card">
                                <label className="label">Budget</label>
                                <p className="content">
                                    Budget Budget Budget Budget Budget Budget Budget Budget Budget 
                                </p>
                            </div>
                        </div>
                        <div className="col-default-3">
                            <div class="card">
                                <label className="label">Budget</label>
                                <p className="content">
                                    Budget Budget Budget Budget Budget Budget Budget Budget Budget 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}