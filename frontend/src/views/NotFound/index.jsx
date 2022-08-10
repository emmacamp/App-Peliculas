import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom';

function index() {
  return (
    <div id='notfound'>
      <img src="/src/assets/icons/not-found.png" alt=""  className='not-found-img'/>
      <div className="notfound-container">
        <h1>404 - Not Found!</h1>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  )
}
export default index