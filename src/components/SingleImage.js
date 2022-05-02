
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './SingleImage.css';

export const SingleImage = () => {

  const navigate = useNavigate();
  const handleReturn = () => {

    // if (navigate.length <= 2){
    //   navigate('/');
    // } else {navigate(-1);}
    navigate(-1);
    console.log('It was pressed');
  };
  
  const {id} = useParams();
  console.log(id);
  
  return (

    <div className="envolve">

        <i className="bi bi-arrow-left-short back-logo" onClick={handleReturn} ></i>
        <div className="h2-img" >
          {/* <div className="single"> */}
              <h2 className="hh2">FridarteStudio</h2>
              <img src={process.env.PUBLIC_URL + `/assets/${id}.jpg`}  className="singleimage" alt={`singleimage${id}`} />
              {/* style={{maxWidth:270}} */}
          {/* </div> */}

        </div>
    </div>
  )
}
// style={{width:500, height:500}}