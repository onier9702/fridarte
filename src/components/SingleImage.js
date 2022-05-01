
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
    <div id="gray-grid">
      <i className="bi bi-arrow-left-short" id="back-logo" onClick={handleReturn} ></i>
      <div id="h2-img" >
        <div id="single">
            <h2 className="m-3">FridarteStudio</h2>
            <img src={`../../assets/${id}.jpg`} style={{maxWidth:300}} id="singleimage" alt={`singleimage${id}`} />
        </div>

      </div>
    </div>
  )
}
// style={{width:500, height:500}}