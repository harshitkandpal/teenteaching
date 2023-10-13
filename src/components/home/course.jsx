import React from 'react'; // Assuming the JSON file is in the same directory

function CourseCard({ link, nameofsub, goto }) {
  return (
      <div className="col">
        <a href={goto} style={{ textDecoration: 'none' }}>
          <div className="card m-2">
            <img src={link} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{nameofsub}</h5>
            </div>
          </div>
        </a>
      </div>
  );
}

export default CourseCard;
