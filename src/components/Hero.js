import HeroImg from '../assets/hero img.png';
import {AiOutlineFacebook,AiOutlineGithub,AiOutlineLinkedin,AiOutlineInstagram} from "react-icons/ai";


export default function Hero(){
    return(
        <section id='hero' className='flex flex-col md:flex-row  bg-secondary px-5 justify-center'>
        <div className='md:w-1/2 flex flex-col justify-center '>
            <h1 className='  text-white text-5xl font-hero-font'>HI <br/> Im Vasanthakumar 
              <p className='text-2xl'>Im a Full-Stack Developer</p>
            </h1>
          <div className='flex py-5'>
            
            <a href='/' className='pr-2 hover:text-yellow-200'><AiOutlineFacebook size={40}/></a>
            <a href='/' className='pr-2  hover:text-yellow-200'><AiOutlineGithub size={40}/></a>
            <a href='/' className='pr-2  hover:text-yellow-200'><AiOutlineLinkedin size={40}/></a>
            <a href='/'  className=' hover:text-yellow-200'><AiOutlineInstagram size={40}/></a>
          </div>
          <div>
             
            </div>
         
        </div>
        
         <img className='md:w-1/3' alt="hero" src={HeroImg}/>
        </section>
    )
}