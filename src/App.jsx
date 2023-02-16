import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function cardRender(info){
  return <Card 
              key={info.id}
              {...info}
      />
}

function App() {
  return <div>
    <Navbar/>
    <Hero/>
    <section className='card-list'>
      {data.map(cardRender)}
    </section>
  </div>
}

export default App
