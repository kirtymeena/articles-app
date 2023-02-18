import React from 'react'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import ArticleList from './pages/ArticleList'

function App() {
  return (
    <div className='home__layout'>
      <div>
        <Navbar />
      </div>
      <div className='card__layout'>
        <div>
          <ArticleList/>
        </div>
      </div>

    </div>
  )
}

export default App