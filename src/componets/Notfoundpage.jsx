// NotFound.jsx

import React from 'react';


const NotFound = () => {

return (
    <>
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="glitch" data-text="404">404</h1>
        <p>Oops! Page Not Found</p>
        <a href="/" className="home-btn">Go to Homepage</a>
      </div>
    </div>
    </>
  );


};

export default NotFound;