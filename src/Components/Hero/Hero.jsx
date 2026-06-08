import "./Hero.css"
import left from '../../assets/left.png'
import right from '../../assets/right.png'
import pause from '../../assets/pause.png'
import play from '../../assets/play.png'

const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {  
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      
      <div className="hero-explore">
        <p>Explore the features</p>
        <img className="arrow-img" src={left} alt="" />
      </div>
    <div className="hero-dot-play">
      <ul className="hero-dots">
    <li onClick={()=>setHeroCount(0)} className={heroCount === 0 ? "hero-dots orange":"hero-dots"}> </li>
    <li onClick={()=>setHeroCount(1)} className={heroCount === 1 ? "hero-dots orang":"hero-dots"}> </li>
    <li onClick={()=>setHeroCount(2)} className={heroCount === 2 ? "hero-dots black":"hero-dots"}> </li>
    
    </ul>
    <div className="hero-play">
      <img className="icon" onClick={()=>{setPlayStatus(!playStatus)}} src={playStatus ? pause : play} alt="" />
      <p>See the video</p>
    </div>
      </div>
    
    </div>
  )
}

export default Hero