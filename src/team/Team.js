import React, { Component } from 'react';

class Team extends Component {
    render() {
        return (
            <div id="team" className="team bg-grad-electric-violet text-light p-4">
                <h2 className="text-center font-weight-bold">Our Team</h2>  
                <div className="row">
                    <div className="card bg-transparent border-0 text-center p-4 col-md-6">
                        <div className="card-img-top badge-profile badge-profile-md 
                            badge-profile-anh-cao bg-light ml-auto mr-auto">
                        </div>
                        <div className="card-body">
                        <h2 className="card-title m-auto font-weight-bold">
                        Anh Cao</h2>
                        <p className="card-text">Co-Founder / Principal</p></div>
                    </div>
                    <div className="card bg-transparent border-0 text-center p-4 col-md-6">
                        <div className="card-img-top badge-profile badge-profile-md 
                            badge-profile-brenny-nguyen bg-light ml-auto mr-auto">
                        </div>
                        <div className="card-body">
                        <h2 className="card-title m-auto font-weight-bold">
                        Brenny Nguyen</h2>
                        <p className="card-text">Co-Founder / COO</p></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Team;