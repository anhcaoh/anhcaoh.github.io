import React, { Component } from 'react';
import './services.css';
class Services extends Component {
    render() {
        const services = [
            { id: 'design',
            name: 'UI/UX Design',
            icon: 'icon-md icon-pencil',
            class: 'bg-grad-skyline',
            description: 'From project conceptual to the finishing touch, \
            we put design first and foremost in every aspects of customer experiences.',
            'principles': 'Mobile First • Simplexity • Responsive Web Design (RWD)'},
            { id: 'mobile-web-apps',
            name: 'Mobile Web & Apps',
            icon: 'icon-md icon-mobile-web',
            class: 'bg-grad-mojito',
            description: 'To our favorite local mom and pop businesses; coffee shops & tea house, restaurants & bar, hair & nail salons, we are here to help reaching your tech-savvy customers.',
            works: 'Mobile Order • Appointment Scheduling • Point of Sale'},
            { id: 'development', 
            name: 'Enterprise Software Development',
            icon: 'icon-md icon-code', 
            class: 'bg-grad-dimigo',
            description: 'Data-driven EAS development: \
            To solve complex business requirements by leveraging the latest and greatest technologies:',
            technologies: 'Angular • React • TypeScript • JavaScript • NodeJS • MongoDB'}
        ];
        let isOdd = ( number ) => number % 2;
        return (
            <section id="services" className="services p-4 bg-light">
                <h2 className="text-center text-dark font-weight-bold">Services</h2>
                { services.map( ( service, index ) =>
                    <div key={ service.id }>
                    <div className={[ index === 0 ? '' : 'pt-4 pb-4','mt-4 mb-4 row'].join(' ')}>
                    { index === 0 && 
                        <div className="col-md-4 col-sm-12 p-4 m-auto d-none d-sm-none">
                            <div className={['m-auto', service.icon, service.class].join(' ')}></div>
                        </div>
                    }
                    { isOdd(index) ?
                        <div className="col-md-4 col-sm-12 p-4 m-auto">
                            <div className={['m-auto', service.icon, service.class].join(' ')}></div>
                        </div> : 
                        <div className="col-md-4 col-sm-12 p-4 m-auto d-sm-none">
                            <div className={['m-auto', service.icon, service.class].join(' ')}></div>
                        </div>
                    }
                    <div className={[ isOdd(index) ? 'col-md-6' : 'offset-md-1 col-md-5', 'col-sm-12'].join(' ')}>
                        <h2 className={['bg-grad', service.class].join(' ')}>{ service.name }</h2>
                        <p className={['bg-grad', service.class].join(' ')}>{ service.description }</p>
                        { (service.principles || service.technologies || service.works ) && 
                        <p className={['pl-3 border-left bg-grad', service.class].join(' ')}>{ 
                            service.principles || 
                            service.technologies || service.works }</p> 
                        }
                    </div>
                    { !isOdd(index) &&
                        <div className="col-md-4 col-sm-12 p-4 m-auto d-none d-sm-block"> 
                            <div className={['m-auto', service.icon, service.class].join(' ')}></div>
                        </div>
                    }
                    </div>
                        { index < services.length - 1 &&
                        <div className="offset-md-1 col-md-10 p-4 border-bottom"></div>
                        }
                    </div>
                    )
                }
            </section>
        )
    }
}
export default Services;


