import React from 'react'
import { useParams } from 'react-router-dom';

const About = () => {
  let { id } = useParams(); 
  return <div style={{ fontSize: "50px" }}> 
  <h1>about page</h1>
           Now showing post {id} 
         </div>; 
}

export default About