import React from 'react';
import CourseCard from './course'; // Make sure to use the correct file name
import coursesData from './courses.json';
import './home.css';

function Home() {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        {coursesData.map((course) => (
          <div key={course.id} className="col">
            <CourseCard link={course.link} nameofsub={course.nameofsub} goto={course.goTo}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
