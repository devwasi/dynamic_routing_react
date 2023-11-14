import "./home.css"
import Card from '../../componants/Cards/Card';
import axios from 'axios';
import star from "../../images/star.png"
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";



function Home() {
  const [productData,setProductData] = useState([])
  const [isData, setIsData] = useState(false)
  // useParams
  let { productId } = useParams() 

  const getData = async ()=>{
   const fetchData = await axios.get(`https://fakestoreapi.com/products`)
   try{
    setProductData(fetchData.data)
    console.log(fetchData.data)
    setIsData(true)
  }catch(err){
    console.log(err);
    setIsData(true)
   }
  
  }
  useEffect(()=>{
  getData()
  },[])

  return (
    <div className='main'>
    
      {
       isData ? productData.map((e,i)=>{
          const {title, image, description, rating, price,} = e
          return <Card title={title} image={image} description={description} price={price} rating={rating.rate} key={i} star={star}  />
        }) : 'no Data found'
      }
      
    </div>
  );
}

export default Home;
