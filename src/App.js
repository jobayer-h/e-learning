import React from 'react';
import './bootstrap/css/bootstrap.min.css';
import './App.css';
import Hero from './Component/Hero/Hero';
import Nav from './Component/Nav/Nav';
import Books from './Component/Books/Books';
import Testimonial from './Component/Testimonial/Testimonial';
import Footer from './Component/Footer/Footer';
import Course from './Component/Course/Course';

function App() {
  return (
    <div>
      <section className="hero-area">
        <Nav></Nav>
        <Hero></Hero>          
      </section>
      <Books></Books>
      <section className="container" id="courses">
        <h3 className="section-heading">Online Courses</h3>
        <div className="row">
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
        </div>
      </section>
    <Testimonial></Testimonial>
    <Footer></Footer>


      
    </div>
  );
}

export default App;
