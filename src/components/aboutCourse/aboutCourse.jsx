import React from 'react';

function CourseDetails(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="course__details">
            <h1 className="my-4">Introduction To Course</h1>
            <p className="mx-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac dui vel justo volutpat auctor. Nunc eget sapien id justo facilisis condimentum ac id sem. Sed vulputate, metus sit amet dignissim fermentum, purus lectus pellentesque libero, id hendrerit elit nulla at eros.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="video-container my-5">
            <iframe
              width="420"
              height="235"
              src="https://www.youtube.com/embed/3-iCDOYkfms?si=jW5YcZJjzr4UUWmF"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
