import './background.css'

import video3 from '../../assets/video3.mp4';

import pic1 from '../../assets/pic1.jpg';
import pic2 from '../../assets/pic2.jpg';
import pic3 from '../../assets/pic3.jpg';

const Background = ({playStatus, heroCount}) => {
    if(playStatus){
        return (
            <video className='background' autoPlay loop muted>
                <source src={video3} type = "video/mp4"/>
            </video>
        ) 
    }
    else if(heroCount === 0){
        return <img src={pic1} className='background fade-in' alt="" />
    }
    else if(heroCount === 1){
        return <img src={pic2} className='background fade-in' alt="" />
    }
    else if(heroCount === 2){
        return <img src={pic3} className='background fade-in' alt="" />
    }
    
}

export default Background;
