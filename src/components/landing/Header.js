import React from 'react';
import header from '../../assets/img/header.png'
import WeatherApp from './WeatherApp';

const Header = () => {
  return (
    <>
   
    <div className="container-fluid bg-primary px-0 px-md-5 mb-5">
   
      <div className="row align-items-center px-3">
        <div className="col-lg-6 text-center text-lg-left">
  
          <h4 className="text-white mb-4 mt-5 mt-lg-left"> <WeatherApp/></h4>
          <h1 className="display-3 font-weight-bold text-white">New Approach to Kids Education</h1>
          <p className="text-white mb-4">Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed sit.
            Ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed ipsum at ipsum nonumy amet. Clita
            lorem dolore sed stet et est justo dolore.</p>
          <a href="/" className="btn btn-secondary mt-1 py-3 px-5">Learn More</a>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
            
          <img className="img-fluid mt-5" src={header} alt="" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Header;
