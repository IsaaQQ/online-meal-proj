import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../hooks/context'
import { Link } from 'react-router-dom';

const MealList = () => {
  const {isLoading, foods} = useGlobalContext();
  if (isLoading){
    return <Loading />;
  }
  if (foods.lenght < 1 ){
    return <h1 className='text-danger text-center'>No Food Found for your search</h1>
  }
  return (
    <div id="below" 
    className='d-flex justify-content-between align-item-center flex-wrap container'>
      {
        foods.map((food) => {
          const { idMeal, strMeal, strMealThumb, strCategory } = food;
          return <Link key={idMeal} to ={`/meal/${idMeal}`}className='text-decoration-none my-3 mx-auto'>
            <div 
            style = {{width:'200px'}} 
            className='shadow shadow-lg rounded-2'
            >
              <img 
              src={strMealThumb} 
              alt={strMeal} 
              className="w-100 rounded-top-2"
              />
              <h4 className='text-sucess mt-3 pb-3 text-center fw-bold'>
                {strMeal}{" "}
                </h4>
                <p className='text-center'>{strCategory}</p>
            </div>
          </Link>
        } )
      };
      
    </div>
  )
}

export default MealList

