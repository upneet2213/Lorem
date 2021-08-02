import React, { useState } from 'react';
import data from './data';
function App() {
  const [number,setNumber]= useState(0)
  const [text,setText]= useState([])
  const handleSubmit=(e)=>{
    e.preventDefault()
    let amount = parseInt(number)
    if(number<=0){
      amount = 1 }
    if(number>data.length){amount = data.length}
    setText(data.slice(0,amount))
  }
  return (
  
    <section className="section-center">
      <h3>Tired of Boring LOREM IPSUM?</h3>
        <form action="" className="lorem-form" onSubmit={handleSubmit}> 
        <label htmlFor="paragraph">Paragraphs:</label>
        <input type="number" name="paragraph" id="paragraph" value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <button className="btn" type="submit">Generate</button>
        </form>
        <article className="lorem-text">
          {text.map((para, index)=>{
            return <p key={index}>{para}</p>
          })}
        </article>
      
    </section>
 
    )
}

export default App;
