import React, { Component } from 'react';
import './links.css';
import { Link } from 'react-router-dom';

class Links extends Component {
    getActiveLinkClass = ( link ) => {
        return window.location.pathname === link.path ? 'active link' : 'link text-light';
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
            <div className="fixed-top bg-3d">
                <div className="d-none d-sm-block">
                <div style={{ 'position':'absolute',
                    'left': '.5rem',
                    'top': '.5rem' }}
                className="badge-profile badge-profile-sm m-auto bg-grad-clouds d-table relative">
                {/* <span className="d-table-cell align-middle bg-grad bg-3d text-center" 
                style={{'fontSize': '2rem', 'letterSpacing':'-3px'}}>cao</span> */}
                <span class="d-table-cell align-middle bg-grad bg-3d" 
                style="font-size: 4rem;font-weight: bold;">
                <span style="
                margin-right: -12px;">c</span>
                <span 
                style="
                margin-right: -14px;
                transform: rotateX(8deg);">a</span>
                <span style="
                padding-right: m;
                margin-right: -7px;">o</span></span>
                </div>
                </div>
                <nav className="navbar float-right pb-0 pl-0 pr-0 col-md-auto col-sm-12">
                    { navLinks.map( (link) => 
                        <Link key={ link.name.toLowerCase() }
                        to={ link.path }
                        className={ this.getActiveLinkClass(link) }>{ link.name }</Link>
                    )}
                </nav>
            </div>
        )
    }
    scrollToTop(){
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
    }
    componentDidMount(){
        this.scrollToTop();   
    }
    componentDidUpdate(){
        this.scrollToTop();
    }
}
export default Links