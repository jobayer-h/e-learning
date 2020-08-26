import React from 'react';
import img from '../../imgs/Photos/Morder pyschology.png';
const Course = () => {
    return (
        <div className="col-md-4 col-12 col-sm-6">
            <div className="course-box">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                    <h5 className="card-title">Modern Psychology</h5>
                    <p className="card-text">Designation</p>
                    <button className="button buy-course">Buy Course</button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <i className="fa fa-calendar" aria-hidden="true"> Start 20  April, 2021</i>
                        <i className="fa fa-user-o" aria-hidden="true"> 60 seats</i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;