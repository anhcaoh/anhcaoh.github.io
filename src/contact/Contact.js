import React, { Component } from 'react';
import './contact.css';
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
            action: 'https://www.google.com/maps?q=atlanta+ga&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiv4qPVgeTdAhVn8IMKHe8PDYsQ_AUIDigB'},
            {name: 'Facebook',
            display: '@caodesignbyanh',
            action: 'https://facebook.com/caodesignbyanh/'}
        ];
        let getContactIconClass = (contactMethod) => {
            let contactMethodClass = "icon-contact mr-3";
            switch( contactMethod.toLowerCase() ){
                case 'mobile':
                contactMethodClass += ' icon-mobile';
                break;
                case 'e-mail':
                contactMethodClass += ' icon-email';
                break;
                case 'address':
                contactMethodClass += ' icon-location';
                break;
                case 'facebook':
                contactMethodClass += ' icon-facebook';
                break;
                default:
                break;
            }
            return contactMethodClass;
        }
    
        return (
            <section id="contact" className="contact text-center p-4">
                <div className="col-md-6 offset-md-3 d-flex flex-wrap">
                    <div className="col-md-6">
                    <div className="badge-profile-md badge-profile-handshake 
                        mt-5 ml-auto mr-auto rounded-circle"></div>
                    </div>
                    <div className="col-md-6 text-left">
                        <h2 className="pt-4 pb-4 m-0 font-weight-bold">
                        Let's Chat</h2>
                        <ul className="list-group list-group-flush">
                            { contactMethods.map( method => 
                            <li key={ method.name } 
                            className="list-group-item list-group-item-action 
                            bg-transparent p-0 border-0">
                                <p><a name={ method.name } target="_blank"
                                href={method.action}>
                                    <span className={ getContactIconClass( method.name )}></span>
                                    { method.display }
                                </a>
                                </p>
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