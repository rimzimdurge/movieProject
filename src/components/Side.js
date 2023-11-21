import React from 'react';
import Horror from './Horror';
import { Link } from 'react-router-dom';
import Action from './Action';






const Side = () => {
    const h5Style = {
        fontSize: '3rem',
        letterSpacing: '0.9px',
        background: 'linear-gradient(90deg, rgba(249, 211, 180, 1) 0%, rgba(249, 211, 180, 0) 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        width: 'fit-content',
      };
    


      const closeOffcanvas = () => {
        document.getElementById('staticBackdrop').classList.remove('show');
      }; 





  return (
    <>
      <button className="btn btn-secondary position-absolute top-0 start-0 m-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
        Categories
      </button>

      <div className="offcanvas offcanvas-start" data-bs-backdrop={true} tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
        <div className="offcanvas-header">
          <h5 style={h5Style} className="offcanvas-title" id="staticBackdropLabel">MovieLand</h5>
        
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div/>
          Categories
          <hr />
            
          <Link to="/horror" onClick={closeOffcanvas}>Horror </Link>   
          <hr /> 
          <Link to="/action" onClick={closeOffcanvas}>Action</Link>    
          <hr />
          <Link to="/action" onClick={closeOffcanvas}>Fantasy </Link>
          <hr />
          <Link to="/action" onClick={closeOffcanvas}>Drama</Link>
          <hr />
          <Link to="/action" onClick={closeOffcanvas}>Thriller</Link>
        </div>
      </div>   
    </>
  );
};

export default Side;

