import React, { Component } from 'react';
import './links.css';
import { Link } from 'react-router-dom';

class Links extends Component {
    getActiveLinkClass = ( link ) => {
        return window.location.pathname === link.path ? 'active link' : 'link text-light';
    }
    renderBranding() {
        return (
            <div className="branding d-none d-lg-block">
            <div style={{ 
            'position':'absolute',
            'left': '.5rem',
            'top': '.5rem' }}
            className="badge-profile badge-profile-sm shadow-sm m-auto bg-grad-clouds d-table relative">
            <span className="d-table-cell align-middle bg-grad bg-3d text-center" 
            style={{"fontSize": '2rem', 'fontWeight': 'bold'}}>
            <span 
            // style={{ marginRight: '-6px', marginLeft: '-6px'}}
            >c</span>
            <span 
            // style={{ marginRight: '-6px'}}
            >a</span>
            <span 
            // style={{ marginRight: '-7px'}}
            >o</span></span>
            </div>
            </div>
        )
    }
    goToTop(){
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    renderGoToTop() {
        return (
            <div id="go-to-top" className="shadow m-auto bg-grad-clouds d-table" 
            onClick={ this.goToTop }>
            <div className="m-auto d-table-cell align-middle">
                <div className="m-auto icon-arrow-up"></div></div>
            </div>
        )
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
            <React.Fragment><div className="fixed-top bg-3d">
                { this.renderBranding() }
                <nav className="navbar float-right pb-0 pl-0 pr-0 col-md-auto col-sm-12">
                    { navLinks.map( (link) => 
                        <Link key={ link.name.toLowerCase() }
                        to={ link.path }
                        className={ this.getActiveLinkClass(link) }>{ link.name }</Link>
                    )}
                </nav>
            </div>
            { this.renderGoToTop() }
            </React.Fragment>
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