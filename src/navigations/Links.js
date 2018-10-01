import React, { Component } from 'react';
import './links.css';
import { Link } from 'react-router-dom';

class Links extends Component {
    getActiveLinkClass = ( link ) => {
        return window.location.pathname === link.path ? 'active link' : 'link';
    }
    render() {
        const navLinks = [
            {name:'Home',
            path:'/home',
            component: 'hero'},
            {name:'Projects',
            path:'/projects',
            component: 'projects'},
            {name:'Services',
            path:'/services',
            component: 'services'},
            {name:'Our Team',
            path:'/team',
            component: 'team'},
            {name:'Contact',
            path:'/contact',
            component: 'contact'}
        ];
        return (
            <div className="fixed-top bg-light">
                <nav className="navbar float-right">
                    { navLinks.map( (link) => 
                        <Link key={ link.name.toLowerCase() }
                        to={ link.path }
                        className={ this.getActiveLinkClass(link) }>{ link.name }</Link>
                    )}
                </nav>
            </div>
        )
    }
}
export default Links