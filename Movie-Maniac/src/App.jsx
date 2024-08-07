import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import MovieList from './Components/MovieList/MovieList'

const App = () => {
  return (
    <div className='app'>
      <Navbar />

      <main>
        <MovieList />
      </main>
    </div>
  )
}

export default App
