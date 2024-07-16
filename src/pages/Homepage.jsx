import React from 'react'
import Banner from '../components/Banner'
import SearchForm from '../components/SearchForm'
import MealList from '../components/MealList'
import Footer from '../components/Footer'



const Homepage = () => {
  return (
    <div>
        <Banner />
        <SearchForm />
        <MealList />
        <Footer />
        
      
    </div>
  )
}

export default Homepage
