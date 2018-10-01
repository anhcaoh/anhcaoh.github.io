import React, { Component } from 'react';

class Contact extends Component {
    render() {
        const contactMethods = [
            { name: 'Mobile', 
            display: '+1 (678) 602-1591',
            action: 'tel:+16786021591'},
            { name: 'E-mail', 
            display: 'anhcaoh@gmail.com',
            action: 'mailto:anhcaoh@gmail.com'},
            { name: 'Address', 
            display: 'Atlanta, Georgia',
            action: 'https://www.google.com/maps?q=atlanta+ga&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiv4qPVgeTdAhVn8IMKHe8PDYsQ_AUIDigB'}
        ];
        return (
            <section className="contact text-center p-4 bg-light">
                <div className="col-md-6 offset-md-3 d-flex flex-wrap">
                    <div className="col-md-7">
                    <div className="badge-profile-md badge-profile-handshake 
                        mt-4 ml-auto mr-auto rounded-circle"></div>
                    </div>
                    <div className="col-md-5 text-left">
                        <h2 className="p-3 m-0 font-weight-bold">
                        Let's Chat</h2>
                        <ul className="list-group list-group-flush">
                            { contactMethods.map( method => 
                            <li key={ method.name } 
                            className="list-group-item list-group-item-action 
                            bg-transparent pb-1 border-0">
                                <a name={ method.name } target="_blank"
                                href={method.action}>
                                    { method.display }
                                </a>
                            </li>
                            ) }
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;