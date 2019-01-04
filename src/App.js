import React, { Component } from 'react';
import './App.css';
import Navigations from './navigations/Navigations';
class App extends Component {
  
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  isBottomScroll(){
    var d = document.documentElement;
    var offset = (d.scrollTop + window.innerHeight);
    var thirdHeight = (d.offsetHeight / 3);
    return offset >= thirdHeight;
  }
  handleScroll = () => {
    if(window.scrollY >= 350){
      document.getElementsByClassName('branding')[0].classList.add('show');
    } else {
      document.getElementsByClassName('branding')[0].classList.remove('show');
    }
    if( this.isBottomScroll() ){
      document.getElementById('go-to-top').classList.add('show');
    } else{
      document.getElementById('go-to-top').classList.remove('show');
    }
    
  }
  render() {
    return (
      <main className="App">
        <Navigations />
        <footer className="bg-grad-clouds text-center pt-4 pb-4">
          <small>Design with &hearts; by Cao Design Agency @ { new Date().getFullYear() }.</small>
        </footer>
      </main>
    );
  }
}

export default App;
