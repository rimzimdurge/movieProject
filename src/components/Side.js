import React from 'react';
import Horror from './Horror';
import { Link } from 'react-router-dom';
import Action from './Action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { faCarBurst } from '@fortawesome/free-solid-svg-icons';
import {faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons';
import {faFaceGrinTongueWink} from '@fortawesome/free-solid-svg-icons';
import {faGun} from '@fortawesome/free-solid-svg-icons';




const Side = () => {
    const h5Style = {
        // fontSize: '3rem',
        // letterSpacing: '0.9px',
        // background: 'linear-gradient(90deg, rgba(249, 211, 180, 1) 0%, rgba(249, 211, 180, 0) 100%)',
        // backgroundClip: 'text',
        // WebkitBackgroundClip: 'text',
        // WebkitTextFillColor: 'transparent',
        // width: 'fit-content',

        fontsize: '6rem',
        letterSpacing: '0.9px',
        color: '#f9d3b4',
        width: 'fit-content'
      };


      const linkStyle = {
        display: 'flex',
        alignItems: 'center',
        color: 'black',
        textDecoration: 'none',
        fontSize: '1.5rem',
        margin: '10px 0',
      };
    
      const iconStyle = {
        width: '30px', // Adjust the width as needed
        height: '30px', // Adjust the height as needed
        marginRight: '10px',
      };

      const categoryLinks = [
        { to: '/horror', label: 'Horror', icon: faGhost },
        { to: '/action', label: 'Action', icon: faCarBurst },
        { to: '/fantasy', label: 'Fantasy', icon: faWandMagicSparkles },
        { to: '/drama', label: 'Drama', icon: faFaceGrinTongueWink },
        { to: '/thriller', label: 'Thriller', icon: faGun },
      ];
    


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
          {categoryLinks.map((category) => (
            <Link to={category.to} onClick={closeOffcanvas} style={linkStyle} key={category.label}>
              {/* <img src={category.icon} alt={`${category.label} Icon`} style={iconStyle} /> */}
              <FontAwesomeIcon icon="fa-solid fa-ghost" />
              <FontAwesomeIcon icon="fa-solid fa-car-burst" />
              <FontAwesomeIcon icon="fa-solid fa-wand-magic-sparkles" />
              <FontAwesomeIcon icon="fa-regular fa-face-grin-tongue-wink" />
              <FontAwesomeIcon icon="fa-solid fa-gun" />
              {category.label}
            </Link>
          ))} 
          {/* <Link to="/horror" onClick={closeOffcanvas}>Horror </Link>   
          <hr /> 
          <Link to="/action" onClick={closeOffcanvas}>Action</Link>    
          <hr />
          <Link to="/action" onClick={closeOffcanvas}>Fantasy </Link>
          <hr />
          <Link to="/action" onClick={closeOffcanvas}>Drama</Link>
          <hr />
          <Link to="/action" onClick={closeOffcanvas}>Thriller</Link> */}
        </div>
      </div>   
    </>
  );
};

export default Side;

