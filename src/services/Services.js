import React, { Component } from 'react';
import './services.css';
class Services extends Component {
    render() {
        const skills = 'Angular, React, TypeScript, JavaScript, NodeJS, MongoDB';
        return (
            <section className="services p-4 bg-light">
            <h2 className="text-center text-dark font-weight-bold">Services</h2>
            <div className="m-4 row">
                <div className="col-md-4 col-sm-12 p-4 m-auto d-sm-none">
                    <div className="icon-pencil m-auto bg-grad-skyline"></div>
                </div>
                <div className="offset-md-2 col-md-5 col-sm-12">
                    <h2 className="bg-grad bg-grad-skyline">
                    <span>UI/UX Design</span>
                    </h2>
                    <p className="bg-grad bg-grad-skyline">
                    From project conceptual to the finishing touch, we put design first and foremost in every aspects of customer experiences.
                    </p>
                </div>
                <div className="col-md-4 col-sm-12 p-4 m-auto d-none d-sm-block">
                <div className="icon-pencil m-auto bg-grad-skyline"></div>
                </div>
            </div>
            <div className="offset-md-2 col-md-8 p-4 border-bottom"></div>
            <div className="m-4 row p-4">
                <div className="offset-md-5 col-md-4 col-sm-12 p-4 m-auto">
                <div className="icon-code m-auto bg-grad-dimigo"></div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h2 className="bg-grad bg-grad-dimigo">
                    <span>Enterprise Software Development</span>
                    </h2>
                    <p className="bg-grad bg-grad-dimigo">Mobile, modern and data-driven EAS development; solving complex business requirements and leveraging the latest and greatest technologies: {skills}</p>
                </div>
            </div>
            {/* <div className="offset-md-2 col-md-8 p-4 border-bottom"></div>
            <div className="m-4 row p-4">
                <div className="col-md-4 col-sm-12 p-4 m-auto d-sm-none">
                    <div className="icon-pencil m-auto bg-grad-skyline"></div>
                </div>
                <div className="offset-md-2 col-md-4 col-sm-12">
                    <h2 className="bg-grad bg-grad-skyline">
                    <span>Strategy</span>
                    </h2>
                    <p className="bg-grad bg-grad-skyline">
                    Stategy
                    </p>
                </div>
                <div className="col-md-4 col-sm-12 p-4 m-auto d-none d-sm-block">
                <div className="icon-pencil m-auto bg-grad-skyline"></div>
                </div>
            </div> */}
            </section>
        )
    }
}
export default Services;


