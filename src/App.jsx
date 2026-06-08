import { useState } from 'react'
import Background from './Components/Background/background';
import NAvbar from './Components/Navbar/NAvbar';
import Hero from './Components/Hero/Hero';



function App() {
  let heroData = [
    {text1:"Dive into", text2:"What you love"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Give in to", text2:"your passions"},
  ]  

  const [heroCount, setHeroCount] = useState(0);
  const  [playStatus, setPlayStatus] = useState(false);

  return ( 
    <div>
        <Background playStatus ={playStatus} heroCount={heroCount}/>
        <NAvbar/>
        <Hero setPlayStatus={setPlayStatus} 
              heroData={heroData [heroCount]}
              heroCount={heroCount}
              setHeroCount={setHeroCount}
              playStatus={playStatus}/>
    </div>
  )
}

export default App
